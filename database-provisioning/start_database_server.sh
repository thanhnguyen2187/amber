#!/bin/bash

sudo docker rm -f amber-mariadb
sudo docker run \
    --name amber-mariadb \
    --detach \
    -p 127.0.0.1:3306:3306 \
    -e MYSQL_ROOT_PASSWORD=amber \
    -e MYSQL_DATABASE=amber \
    -e MYSQL_USER=amber \
    -e MYSQL_PASSWORD=amber \
    -d \
    mariadb:10.5.9-focal

# use "real" volume for "real" deployment
# -v /var/lib/amber-mariadb:/var/lib/mysql \
