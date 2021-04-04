# Database Provisioning

## How-to Guides

### New Machine Deployment

- Install `mysqldef` by `./install_mysqldef.sh`
- Ensure that `docker` is ready in the machine
- Start MariaDB by `./start_database_server.sh` (enable persistence volume in
  the script if necessary)
- Assure that the schema is created correctly by `./assure_mysqldef.sh`
- Seed the data by `./seed_data.sh`

### Development

## Explanation

The folder is created to provide a "simple" and easy way to work with database
"provisioning", or a simple way to create a new database from scratch
everywhere. I will try to explan the problem, and the technical decisions here.

### Problem

- Store the application's data
- Fast Changes Adaptive
- Easy Deployment

### NoSQL versus SQL

SQL should be a better choice here, since the nature of the application is a CMS
(Content Management System), with a mix of something else that I does not have
the vocabulary to explain at the time.

### PostgresQL versus MySQL versus SQL Server

Postgres has better reputation, but I used at work, and wanted to try new stuff,
so... MySQL is chosen with a twist: MariaDB, since it is claimed as a saner
MySQL.
