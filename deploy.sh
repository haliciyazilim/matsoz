#!/bin/bash

git checkout master
git merge development
RAILS_ENV=production bundle exec rake assets:precompile
git add public/assets/
git commit -m "Autocommit of precompiled assets"
git push heroku master
git push
git checkout development
