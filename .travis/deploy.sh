#!/bin/bash
set -e
ssh worker@159.65.118.249 -v exit

git config --global push.default simple # we only want to push one branch — master
# specify the repo on the live server as a remote repo, and name it 'production'
# <user> here is the separate user you created for deploying
git remote add production ssh://worker@159.65.118.249/web/education-docker
git push production master # push our updates