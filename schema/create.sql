CREATE DATABASE orderstx;
CREATE DATABASE ordersax;

CREATE TABLE orderstx.orders (
  description varchar(25) 
) ENGINE=InnoDB;
CREATE TABLE ordersax.orders (
  description varchar(25) 
) ENGINE=columnstore;
