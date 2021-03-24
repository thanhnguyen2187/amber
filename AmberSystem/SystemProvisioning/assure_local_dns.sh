#!/bin/bash

function append () {
    LINE=$1
    FILE=$2
    echo "Appending \"$LINE\" to \"$FILE\" if it does not exist..."
    sudo grep -xqF -- "$LINE" "$FILE" \
        || echo "$LINE" \
        | sudo tee -a "$FILE" \
        >> /dev/null
}

append '# Amber development DNS assurance' '/etc/hosts'
append '127.0.0.1 amber.dev api.amber.dev image.amber.dev admin.amber.dev' '/etc/hosts'
