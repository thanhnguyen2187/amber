#!/bin/bash

mysql amber \
    --host=127.0.0.1 \
    --port=3306 \
    --user=amber \
    --password=amber \
    --execute="select 1;"
