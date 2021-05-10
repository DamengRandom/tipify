### Just Code (Shhh)

<b>1. </b> If changes one of object values inside same array, we need to use spread operator (`...`) or `JSON.parse(JSON.stringify())` way to trigger the state changes and get component re-rendered !!!! Code example:

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


<b>2. </b> How to save data like object format instead of array format in NodeJS

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
