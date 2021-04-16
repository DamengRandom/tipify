### SQL General recalls

<b>1.</b> Common tips:
  - double hash `(--)` means not run the code
  - Usually in SQL, we use `single quote`
  - `<>` is same as `!=`, which means not equal to 


<b>2.</b> `SQL`: Structured Query Language


<b>3.</b> Important Query Commands:
  -  `USE`: use database TEST
  -  `SELECT`: select database columns (eg: select *)
  -  `FROM`: from which database table
  -  `WHERE`: condition
  -  `ORDER BY`: default is ascending order
  -  `AS`: give a custom column name
  -  `AND` `OR` `NOT`: operators, ☞ venn diagram (eg: <>: means not equal)
  -  `IN`: contains which values, eg:
  ``` sql
    select * from customers where state not in ('CO', 'IL', 'FL’)
  ```
  -  `LIKE`: find similar data eg: 
  ``` sql
    '%part_of_string%'
  ```
  -  `REGEX`: regular expression, powerful for using searching strings inside a table,
      - `^`: beginning of the string
      - `$`: end of the string
      - `|`: logical or (multiple patterns)
      eg: 
  ``` sql
    where last_name regexp 'ey$|on$’ last_name end with ey or on
  ```
  -  `IS NULL` or `IS NOT NULL`: check condition the attribute is not null or is null records eg: 
  ``` sql
    where phone is not null
  ```
  -  ` ORDER BY`: ascending order or descending order eg: 
  ``` sql
    order by first_name desc
  ```
  -  `LIMIT`: top number of records (eg: top 10 records)
  -  `JOIN ON`:  join two tables together, if we type JOIN means inner join, eg:
  ```sql
  join tableName on condition (tableA.AttributeId == tableB.AttributeId) 
  join customers on orders.customer_id = customers.customer_id 
  select oi.order_id, oi.unit_price from order_items oi join products p on p.product_id = oi.product_id
  ```
  -  `JOIN`: join across multiple dbs
  - outer join: `LEFT JOIN` & `RIGHT JOIN`:
    - eg: join start from left table or start from right table
    - left: we get all the data from left table (which is from TableName) whether the condition is true or not 
    - right: we get all the data from right table (which is from TableName) whether the condition is true or not 
  ``` sql
  select p.product_id, p.name, oi.quantity from products p left join order_items oi on p.product_id = oi.product_id
  ```
  - `USING`: is a shortcut for p.product_id = oi.product_id, just using this USING(product_id) [ONLY for the SAME attribute name]
  - `UNION`: combine data from multiple queries [can be from same table or different table, can be same from same db or different db]!!! eg: 
  ``` sql
  select *
  from orders
  where order_id >= 8
  union
  select *
  from orders
  where shipper_id >= 3
  ```
  - `INSERT INTO`: add data to db table, eg:
  ``` sql
  INSERT INTO customers (first_name, last_name, birth_date, address, city, state)
  VALUES (DEFAULT, 'ella', 'wu', '2018-06-01', NULL, 'Newington', 'Sydney', 'CA', '10000')
  ```
  - `UPDATE`: modify current record, eg:
  ``` sql
  UPDATE table name SET columns with updated value WHERE which data needs to be updated
  -- eg:
  UPDATE sql_store.NewTable SET status = 3 WHERE order_id = 9
  ```
  - `DELETE`: remove a record(s), eg:
  ```sql 
  DELETE FROM which table WHERE: which record
  -- eg:
  DELETE FROM sql_store.NewTable WHERE status = 3;
  ```
  - `CREATE TABLE`: used fro copy a table and its records, eg:
  ```sql
  create table NewTableNAME as select * from orders; 
  ```

<b>4. PostgreSQL queries for array of objects in JSONB format</b>

The major method is: `jsonb_to_recordset`

```
-- select email from user_email_configuration, jsonb_to_recordset(user_email_configuration.body->'users') as users(email text)
-- select * from user_email_configuration where body->>'groupname' = 'gitenant.app-demo'
```
