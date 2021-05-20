#!/bin/bash

# sudo rm /usr/local/share/ca-certificates/amber.https.crt
# echo "Old certificate removed."
sudo rm /usr/local/share/ca-certificates/local.pem
echo "Old certificate removed."

sudo cp ./local.pem /usr/local/share/ca-certificates
echo "Certificate copied successfully."

sudo update-ca-certificates
