### Postgres SQL General tips

#### Tip 1: Quick recall tips (In case forgot)

1). <>: not equal (Operator)

2). IN is = ANY (shorthand for multiple OR conditions) in PostgreSQL

```sql
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK', 'USA');
```

3). Joins:
- `inner join`: common area
- `left join`: full left table + common area between left and right tables
- `right join`: full right table + common area between left and right tables
- `full outer join`: left join: full left and right tables

![joins table](https://res.cloudinary.com/dameng/image/upload/v1607324509/tipify/joins.png)



#### Tip 2: JSONB

1). JSONB refers to Binary JSON 

2). Why JSONB? Answer:
JSON is stored in its plan text format
JSONB is stored in a binary representation
JSONB is faster, coz already in binary format, no need transform

In PostgreSQL, the difference between text format and json format inside database is json format as double quotes (eg: “name”), text format has no quote symbol (eg: name)

 
JSONB general examples:

- select first element inside array:
``` sql
select body->'yearGroup'->0 as yearData from excursion_spaces
```



#### Tip 3: #> (path of object)
`#>`: is the path of the json object

- select the specific object key and display as a new value:
``` sql
select body #> '{organisationLevel, bu}' as school from excursion_spaces
```
<i>Original object structure:</i>

```json
"organisationLevel": {
  "bu": "Middle School",
  "org_level": "develop"
},
```

<i>After run the query:</i>
```
"Middle School"
```



#### Tip 4: @> &and <@ (includes)

- Simple explain:

1). Concept: `@>`: In general `@>` is the "contains" operator.
2). Difference:
`<@`: was left part of right?
`@>`: was right part of left?

(Examples) select the data with condition:
```sql
select body->'yearGroup' from excursion_spaces where (body->'yearGroup' @> '[{"year": "Year 8"}]')
/* Or another version */
select body->'yearGroup' as years from excursion_spaces where ('[{"year": "Year 2"}]'::jsonb <@ (body->'yearGroup')::jsonb)
```

- Another example in real working environment:

Database query:
```js
select body->'column_name' from table_name where (body->'column_name' @> '[{"attribute_name": "Specific variable"}]')
// select body->'yearGroup' from excursion_spaces where (body->'yearGroup' @> '[{"year": "Year 8"}]')
```

NodeJS query:
```js
const attributeObject = `[{"attribute_name": "Specific ' || $${variable++} || '"}]`;
console.log(`select count(*) from table_name, (body->'column_name' @> ('${attributeObject}')::jsonb)`);
// const yearObject = `[{"year": "Year ' || $${index++} || '"}]`;
// console.log(`select count(*) from excursion_spaces, (body->'yearGroup' @> ('${yearObject}')::jsonb)`);
```



#### Tip 5: ? or ?| or ?& (contains)

- convert to text and find the text which is inside the database:
```sql
select body -> 'organisationLevel' as school from excursion_spaces where body -> 'organisationLevel'->> 'bu' <> 'Middle School'
```

- query for does body contains uuid?
```sql
select body from excursion_spaces where body ? 'uuid'
```



#### Tip 6: JSONB function queries general examples:

Example 1: get array elements
```sql
select jsonb_array_elements((body ->> 'yearGroup')::jsonb), created_at  from excursion_spaces
/* Or */
select jsonb_array_elements_text((body ->> 'yearGroup')::jsonb), created_at  from excursion_spaces
```

Example 2: get object elements
```sql
select jsonb_each((body -> 'organisationLevel')) from excursion_spaces
/* Or */
select jsonb_each_text(body -> 'organisationLevel') from excursion_spaces
```

Example 3: select object keys
```sql
select jsonb_object_keys(body -> 'organisationLevel') from excursion_spaces
```



#### References:

1. <a href="https://www.postgresql.org/docs/9.4/functions-json.html#FUNCTIONS-JSONB-OP-TABLE" target="_blank">PostgreSQL Doc</a>
2. <a href="https://devhints.io/postgresql-json" target="_blank">PostgreSQL JSON</a>
