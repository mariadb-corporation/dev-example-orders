# Orders

**Orders** is a web application that introduces you to the power, performance, and simplicity of [MariaDB](https://mariadb.com/products/) by simulating online eCommerce (ordering) traffic.

<p align="center" spacing="10">
    <kbd>
        <img src="media/demo.gif" />
    </kbd>
</p>

The following will walk you through the steps for getting this application up and running within minutes! This application is completely open source. Please feel free to use it and the source code as you see fit.

# Table of Contents
1. [Introduction to MariaDB](#overview)
    1. [MariaDB Platform](#platform)
    2. [MariaDB SkySQL](#skysql)
2. [Getting Started](#get-started)
    1. [Get the code](#code)
    2. [Create the schema](#schema)
    3. [Build and run the app](#app)
2. [Requirements to run the app](#requirements)
3. [Support and Contribution](#support-contribution)
4. [License](#license)

## Overview <a name="overview"></a>

### MariaDB Platform <a name="platform"></a>

[MariaDB Platform](https://mariadb.com/products/mariadb-platform/) integrates the former [MariaDB TX (transactions)](https://mariadb.com/products/mariadb-platform-transactional/) and [MariaDB AX (analytics)](https://mariadb.com/products/mariadb-platform-analytical/) products so developers can build modern applications by enriching transactions with real-time analytics and historical data, creating insightful experiences and compelling opportunities for customers – and for businesses, endless ways to monetize data. It’s the only enterprise open source database built for modern applications running in the cloud.

To download and deploy MariaDB check out the instructions [here](https://mariadb.com/docs/deploy/installation/). You can also make use of the [MariaDB image available on Docker Hub](https://hub.docker.com/_/mariadb).

### MariaDB SkySQL <a name="skysql">

[SkySQL](https://mariadb.com/products/skysql/) is the first and only database-as-a-service (DBaaS) to bring the full power of MariaDB Platform to the cloud, including its support for transactional, analytical and hybrid workloads. Built on Kubernetes, and optimized for cloud infrastructure and services, SkySQL combines ease of use and self-service with enterprise reliability and world-class support – everything needed to safely run mission-critical databases in the cloud, and with enterprise governance.

[Get started with SkySQL!](https://mariadb.com/products/skysql/#get-started)

<p align="center" spacing="10">
    <kbd>
        <img src="media/skysql.png" />
    </kbd>
</p>

## Get started <a name="get-started"></a>

### Get the code <a name="code"></a>

Download this code directly or use [git](git-scm.org) (through CLI or a client) to retrieve the code using `git clone`:

```
$ git clone https://github.com/mariadb-corporation/dev-example-orders.git
```

### Create the schema <a name="schema"></a>

[Connect to the database](https://mariadb.com/kb/en/connecting-to-mariadb/) and execute the following:

```
$ mariadb --host host_address --port #### --user user_name -p**** < schema/create.sql
```

or executing the SQL within (create.sql)(schema/create.sql) directly

```sql
CREATE DATABASE orders;

CREATE TABLE orders.orders (
  description varchar(25) 
) ENGINE=InnoDB;
```

### Build and run the app <a name="app"></a>

This application is made of two parts:

* Client
    - communicates with the API.
    - is a React.js project located in the [client](client) folder.
* API
    - uses a MariaDB Connector to connect to MariaDB.
    - contains multiple projects, located in the [api](api) folder.
        - [Node.js](api/nodejs)
        - Python (coming soon!)

**IMPORTANT**: Nagivate to the [client](client) folder and execute the following CLI command before proceeding:

```
$ npm install
```

See the README's in [client](client/README.md) and [api](api/README.md) for more information on how to get started!

## Support and Contribution <a name="support-contribution"></a>

Thanks so much for taking a look at the Orders app! As this is a very simple example, there's plenty of potential for customization. Please feel free to submit PR's to the project to include your modifications!

If you have any questions, comments, or would like to contribute to this or future projects like this please reach out to us directly at developers@mariadb.com or on [Twitter](https://twitter.com/mariadb).

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)