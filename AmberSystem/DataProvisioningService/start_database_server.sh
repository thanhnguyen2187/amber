#!/bin/bash

sudo docker pull mariadb
sudo docker rm amber-mariadb
sudo docker run \
    --name amber-mariadb \
    --env MYSQL_ROOT_PASSWORD="amber" \
    --env MYSQL_DATABASE="amber" \
    --env MYSQL_USER="amber" \
    --env MYSQL_PASSWORD="amber" \
    --volume $HOME/Amber/mariadb/:/var/lib/mysql \
    --publish 3306:3306 \
    mariadb:latest
