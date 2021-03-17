#!/bin/bash

# clean previous output
rm ./amber.csr.pem
rm ./amber.key.pem
rm ./amber.https.crt
rm ./amber.https.pfx

# generate a private key and a certificate signing request
# openssl req \
#     -config amber.https.config \
#     -new -out amber.csr.pem
# mv ./key.pem ./amber.key.pem
# create a self-signed certificate
# openssl x509 \
#     -req \
#     -days 365 \
#     -extfile amber.https.config \
#     -extensions v3_req \
#     -in amber.csr.pem \
#     -signkey amber.key.pem \
#     -out amber.https.crt
# generate a pfx file containing the certificate
# and the private key that can be used with Kestrel
# openssl pkcs12 \
#     -export \
#     -out amber.https.pfx \
#     -inkey amber.key.pem \
#     -in amber.https.crt \
#     -password pass:abc123@999

mkcert \
    -cert-file amber.pem \
    -key-file amber-key.pem \
    localhost 127.0.0.1

# openssl pkcs12 \
#     -export \
#     -out \
#     amber.pfx \
#     -inkey amber.pem \
#     -key amber-key.pem

# source: https://devblogs.microsoft.com/aspnet/configuring-https-in-asp-net-core-across-different-platforms/
