cd ..
git pull
git add . --all
git commit -m "automatic commit"
echo "Sauvegarde du code ..."
git push -u origin
cd site_web
hugo
cd public
git pull
git add . --all
git commit -m "automatic publish"
echo "Publication du site"
git push -u origin
