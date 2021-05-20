#!/bin/bash

mkcert \
    -cert-file amber.pem \
    -key-file amber-key.pem \
    localhost \
    amber.dev \
    api.amber.dev \
    image.amber.dev \
    admin.amber.dev

# source: https://devblogs.microsoft.com/aspnet/configuring-https-in-asp-net-core-across-different-platforms/
