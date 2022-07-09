#!/bin/bash

[ $# -eq 0 ] && {
    echo "Use: $0 file.c"
    exit 1
}

sed "s;';\\\';g ; s;    ;#t;g ; s;$;#n'\ +; ; s;^;\';" "$@" \
    | sed "s/#include\([ \t]\+\)<\([a-zA-Z.-_0-9]\+\)>/#include\1\&lt;\2\&gt\;/"
