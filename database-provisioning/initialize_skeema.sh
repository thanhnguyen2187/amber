#!/bin/bash

# mysqldef \
#     --host=127.0.0.1 \
#     --port=3306 \
#     --user=amber \
#     --password=amber \
#     --file=./schema/${FILENAME} \
#     amber
skeema init \
    --host=127.0.0.1 \
    --port=3306 \
    --user=amber \
    --password=amber \
    --schema=amber \
    --dir=schemas
