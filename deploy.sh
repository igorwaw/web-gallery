#!/bin/sh

hugo && rsync -va -e ssh public/ mikrus:/var/www/html/
