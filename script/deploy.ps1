npm run build
ssh root@davidz.cn rm -rf /docker/nginx/www/js/
scp -BCpr ./dist/* root@davidz.cn:/docker/nginx/www/
