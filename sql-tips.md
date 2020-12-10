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
  -  `JOIN ON`:  join two tables together
  