#!/bin/bash

function assure() {
    FILENAME=$1
    mysqldef amber \
        --host=127.0.0.1 \
        --port=3306 \
        --user=amber \
        --password=amber \
        --skip-drop \
        --file="${FILENAME}"
}

INPUT=$1

shopt -s nullglob
if [ "${INPUT}" = "all" ] || [ -z "${INPUT}" ]
# the input is "all" or nothing
then
    for FILENAME in schemas/*.sql
    do
        assure "${FILENAME}"
        # assure every sql file in folder schemas
    done
else
    assure "schemas/${INPUT}.sql"
    # assure the input sql file
fi
shopt -u nullglob
