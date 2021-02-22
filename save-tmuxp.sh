#!/bin/bash

(
    echo "yaml"
    echo "y"
    echo "/tmp/.tmuxp.yml"
    echo "y"
) | tmuxp freeze > /dev/null
echo "tmuxp freezed to /tmp/.tmuxp.yml"

mv /tmp/.tmuxp.yml .
echo "The freezed file got moved back to the current location."
