FROM alpine:3.18

RUN apk add --no-cache nginx

RUN mkdir -p /run/nginx /var/www/html

# Copy site files from build context (run `docker build` from repo root)
COPY index.html /var/www/html/index.html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
