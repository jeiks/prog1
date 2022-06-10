#!/bin/bash

[ $# -ne 2 ] && {
    echo "Use: $0 filename title"
    exit 1
}

TEMPLATE="---
title:  $2
date:   $(date +'%Y-%m-%d %H:%M:%S %z')
layout: post
---
"

TARGET=$(date +"_posts/%Y-%m-%d-$1.md")

echo "Header:
$TEMPLATE
to -> '$TARGET'
"
read -p 'Press ENTER to create or CTRL+C to cancel.'

echo "$TEMPLATE" > "$TARGET"
