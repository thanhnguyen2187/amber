#!/bin/bash

function seed() {
    FILENAME=$1
    mysql amber \
        --host=127.0.0.1 \
        --port=3306 \
        --user=amber \
        --password=amber \
        < "${FILENAME}"
}

seed "seeds/id_generating_function.sql"

INPUT=$1

shopt -s nullglob
if [ "${INPUT}" = "all" ] || [ -z "${INPUT}" ]
# the input is "all" or nothing
then
    for FILENAME in seeds/*.sql
    do
        seed ${FILENAME}
    done
else
    seed "seeds/${INPUT}.sql"
fi
shopt -u nullglob
