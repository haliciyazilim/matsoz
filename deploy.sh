#!/bin/bash

if [ -d "public/assets" ]; then
    # Control will enter here if $DIRECTORY exists.
	git rm -rf public/assets
	git commit -m "Auto-deletion of precompiled assets"
fi
git checkout master
git merge development
rm -rf public/assets
RAILS_ENV=production bundle exec rake assets:precompile
git add public/assets/
git commit -m "Autocommit of precompiled assets"
git push heroku master
git push
git checkout development
