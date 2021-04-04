#!/bin/bash

cd /tmp
curl -LOJ https://github.com/k0kubun/sqldef/releases/latest/download/mysqldef_linux_amd64.tar.gz
sudo tar -xvzf ./mysqldef_linux_amd64.tar.gz -C /usr/bin
