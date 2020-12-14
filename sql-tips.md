### SQL General recalls

1. `SQL`: Structured Query Language

2. Important Query Commands:
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
  - 
