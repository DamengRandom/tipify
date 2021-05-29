### Just Code (Shhh)

<b>1.</b> If changes one of object values inside same array, we need to use spread operator (`...`) or `JSON.parse(JSON.stringify())` way to trigger the state changes and get component re-rendered !!!! Code example:

```js
// sort array of objects !!
function compareVotes( a, b ) {
  if ( a.upvotes < b.upvotes ) return 1;
  if ( a.upvotes > b.upvotes ) return -1;
  return 0;
}

// Way 1:
const afterSorted = JSON.parse(JSON.stringify(articles.sort(compareVotes)));

// Way 2:
const afterSorted = [...articles.sort(compareVotes)];

// Then we can set the changed value:
setCurrent(afterSorted);
```

Completed version below:

```js
import React, { useState } from 'react';
import Articles from './Articles';

function compareDate( a, b ) {
  if ( a.date < b.date ) return 1;
  if ( a.date > b.date ) return -1;
  return 0;
}

function compareVotes( a, b ) {
  if ( a.upvotes < b.upvotes ) return 1;
  if ( a.upvotes > b.upvotes ) return -1;
  return 0;
}

let articles = [
  {
    title: 'abc test',
    upvotes: 53,
    date: '2019-11-12'
  },
  {
    title: 'cde omg, what?',
    upvotes: 23,
    date: '2020-1-12'
  },
  {
    title: 'test me test now ...',
    upvotes: 33,
    date: '2021-9-12'
  }
];


export default function ArticleWrapper() {
  const [current, setCurrent] = useState(articles);

  const sortByVotes = () => {
    // const afterSorted = JSON.parse(JSON.stringify(articles.sort(compareVotes)));
    const afterSorted = [...articles.sort(compareVotes)];
    setCurrent(afterSorted);
    console.log("votes", current);
  };
  
  const sortByDate = () => {
    // const afterSorted = JSON.parse(JSON.stringify(articles.sort(compareDate)));
    const afterSorted = [...articles.sort(compareDate)];
    setCurrent(afterSorted);

    console.log("dates", current);
  };

  return (
    <div>
      <h3>Re-render the list after using sort !!!</h3>
      <div>
        <button onClick={sortByVotes}>sort by upvotes</button>
        <button onClick={sortByDate}>sort by date</button>
      </div>
      <Articles articles={current} />
      {/* Articles component is used for returning tables of articles */}
    </div>
  )
}
```

Reference: <a href="https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render" target="_blank">here</a>


<b>2.</b> How to save data like object format instead of array format in NodeJS

```js
app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex'); // will generate a random hash id value
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  // event bus (emit event !!!!)
  await axios.post('http://localhost:9225/events', {
    type: 'PostCreated',
    data: {
      id,
      title,
    }
  });

  res.status(201).send(posts[id]);
});
```


<b>3.</b> KnexJS insert data for existing records specific column

```js
// One example of using knex for seeding existing records specific column data

/**
 * Complete SETUP Guidance (V1.0)
 *
 * STEP 1: setup dbName value: either CLIENT_TABLE_NAME or AUDIT_CLIENT_TABLE_NAME
 * Code for client table -> const dbName = dbTableName.CLIENT_TABLE_NAME;
 * Code for audit_client table -> const dbName = dbTableName.AUDIT_CLIENT_TABLE_NAME;
 *
 * STEP 2: setup mode either mock/test data injection or real data injection
 * Code for mock/test injection -> const simulationEnabled = true;
 * Code for real injection -> const simulationEnabled = false;
 *
 * STEP 3: setup clientId either id or audit_id
 * Code for client table -> const clientId = client.id;
 * Code for audit_client table -> const clientId = client.audit_id;
 *
 * STEP 4: setup condition query id either id or audit_id
 * Code for client table -> .where("id", clientId)
 * Code for audit_client table -> .where("audit_id", clientId)
*/

"use strict";

require("dotenv").config();
const dbTableName = require("../lib/const/dbTableName");
const knexCustom = require("../lib/knexCustom");
const { uuid } = require('uuidv4');

// records batch
const itemsPerBatch = 100;
// need to use the table name which needs to generate existing cs_client_id (configurable)
// const dbName = dbTableName.CLIENT_TABLE_NAME;
const dbName = dbTableName.AUDIT_CLIENT_TABLE_NAME;
// Set this to 'true' to get the 'Total affected record' without actually affecting the records
// const simulationEnabled = true;
const simulationEnabled = false;

async function updateClientCsClientId(extractAllCsClientIds, client) {
  let csClientIdObject = {};

  if (!client.cs_client_id
    || (client.cs_client_id && 10 !== client.cs_client_id.length)
  ) {
    while (true) {
      client.cs_client_id = uuid();
      csClientIdObject = {
        csClientId: client.cs_client_id,
        isNew: true,
      };

      if (!extractAllCsClientIds.includes(client.cs_client_id)) {
        break;
      }
    }
  } else {
    csClientIdObject = {
      csClientId: client.cs_client_id,
      isNew: false,
    };
  }

  return csClientIdObject;
}

async function main() {
  console.log("process.env.APP_ENV", process.env.APP_ENV);

  let sqlResponseCount;
  const extractAllCsClientIds = [];

  sqlResponseCount = await knexCustom(dbName)
  .count("*")
  .catch((err) => {
    console.error(err);
  });

  const recordCount = sqlResponseCount[0].count;
  const batchCount = Math.ceil(recordCount * 1.0 / itemsPerBatch);
  let errorRecordCount = 0;
  let affectedRecordCount = 0;
  let skippedRecordCount = 0;

  for (let i = 0; i < batchCount; i++) {
    console.log(`Processing batch sequence ${i}...`);

    sqlResponseCount = await knexCustom(dbName)
    .orderBy("id", "asc")
    .limit(itemsPerBatch)
    .offset(i * itemsPerBatch)
    .catch((err) => {
      console.error(err);
    });

    for (let j = 0; j < sqlResponseCount.length; j++) {
      const client = sqlResponseCount[j];
      // const theId = client.id;
      const theId = client.audit_id;
      const { csClientId, isNew } = await updateClientCsClientId(extractAllCsClientIds, client);
      extractAllCsClientIds.push(csClientId);

      if (isNew) {
        console.log(`Updating cs client id: ${csClientId} for id: ${theId} ...`);

        if (simulationEnabled) {
          affectedRecordCount++;
        } else {
          let errorFound = false;

          await knexCustom(dbName)
          .update({
            cs_client_id: csClientId,
          })
          // .where("id", theId)
          .where("audit_id", theId)
          .catch((err) => {
            errorFound = true;
            console.error(err);
          });

          if (errorFound) {
            errorRecordCount++;
          } else {
            affectedRecordCount++;
          }
        }
      } else {
        console.log(`Unmodified client ${theId} skipped.`);

        skippedRecordCount++;
      }
    }
  }

  await knexCustom.destroy();
  console.log(`simulationEnabled: ${simulationEnabled}`);
  console.log(`Total error record    : ${errorRecordCount}`);
  console.log(`Total affected record : ${affectedRecordCount}`);
  console.log(`Total skipped record  : ${skippedRecordCount}`);
  console.log(`Total record          : ${recordCount}`);
  console.log("Updating updateClientCsClientId done!");
}

main()
.catch((err) => {
  console.error(err);
});
```


<b>4.</b> Palindrome interview question demo:

```js
function palindrome(word) {
  if (typeof word === 'string') {
		var regex = /[^A-Za-z]/g;
  
 	 	word = word.toLowerCase().replace(regex, '');
  
  	var wordLength = word.length;
  
  	for (let i = 0; i < wordLength/2; i++) {
			if (word[i] !== word[wordLength-1-i]) {
				return false;
			}
 
			return true;
		}
  } else {
  	console.log('Input must be a string ..');
  }
}

console.log(palindrome('kyayk')); // true
console.log(palindrome('damon')); // false
```


<b>5.</b> Find the same elements which occurred in 2 arrays 

```js
// 2 List of strings and return same elements which occurred in both array lists

// const arr1 = ['1', '2', '4'];
// const arr2 = ['11', '43', '55', '2', '832', '66', '4', '222', '1212'];
const arr1 = ['I', 'love', 'Ella', '!'];
const arr2 = ['Come', 'on', 'Ella', ',', 'you', 'can', 'make', 'it', '!'];

const commonElements = arr1.filter(el => arr2.includes(el));

console.log(commonElements);

// if using underscore js or lodash js, we can use a function called `intersection`
// eg: 
_.intersection(arr1, arr2);
```


<b>6.</b>
