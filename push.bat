git pull
git add . --all
git commit -m "automatic commit"
git push -u origin
hugo
cd public
surge --domain mano-test.surge.sh

