run in linux
git init
git checkout -b gh-pages
git add .
git commit -m 'initial commit'
git remote add origin https://github.com/Albert-W/cool-panda.git
git push origin gh-pages

bundle exec jekyll serve
