npm run build
ssh root@davidz.cn rm -rf /docker/nginx/www/js/ && rm -rf /docker/nginx/www/css/
scp -BCpr ./dist/* root@davidz.cn:/docker/nginx/www/
