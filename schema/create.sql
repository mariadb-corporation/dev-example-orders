CREATE DATABASE orderstx;
CREATE DATABASE ordersax;

CREATE TABLE orderstx.orders (
  col0 varchar(25), 
  col1 varchar(25),
  col2 varchar(25), 
  col3 varchar(25), 
  col4 varchar(25), 
  col5 varchar(25), 
  col6 varchar(25), 
  col7 varchar(25), 
  col8 varchar(25), 
  col9 varchar(25) 
) ENGINE=InnoDB;
CREATE TABLE ordersax.orders (
  col0 varchar(25), 
  col1 varchar(25),
  col2 varchar(25), 
  col3 varchar(25), 
  col4 varchar(25), 
  col5 varchar(25), 
  col6 varchar(25), 
  col7 varchar(25), 
  col8 varchar(25), 
  col9 varchar(25) 
) ENGINE=columnstore;
