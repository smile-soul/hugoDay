FROM nginx

MAINTAINER smilesoul

COPY public /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80