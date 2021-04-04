#!/bin/bash

cd /tmp
curl -LOJ https://github.com/skeema/skeema/releases/latest/download/skeema_amd64.deb
sudo apt install ./skeema_amd64.deb
