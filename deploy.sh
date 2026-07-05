#!/bin/sh

hugo && rsync -va --delete -e ssh public/ mikrus:/var/www/html/
