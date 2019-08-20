run in linux
git init
git checkout -b gh-pages
git add .
git commit -m 'initial commit'
git remote add origin https://github.com/Albert-W/cool-panda.git
git push origin gh-pages

git commit -m 'description'
git tag v1.1.0 
git push origin v1.1.0


bundle exec jekyll serve
bundle exec jekyll serve --incremental
