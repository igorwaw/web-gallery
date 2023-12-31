#!/bin/sh

hugo && rsync -va -e ssh content/ mikrus:/var/www/html/
