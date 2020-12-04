### Postgres SQL General tips

#### Tip 1:

`@>`: In general `@>` is the "contains" operator.

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
