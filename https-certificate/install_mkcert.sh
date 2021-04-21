#!/bin/bash

sudo apt install libnss3-tools
cd /tmp

git clone https://github.com/FiloSottile/mkcert && cd mkcert
go build -ldflags "-X main.Version=$(git describe --tags)"

sudo cp ./mkcert /usr/local/bin/mkcert
sudo chmod +x /usr/local/bin/mkcert

cd -
