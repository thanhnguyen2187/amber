FROM caddy:2.4.0-alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY dist/end-user /var/www/amber
RUN sed -i \
    's/api.amber.dev/amber-api.nguyenhuythanh.com/g' \
    /var/www/amber/environment.js
COPY dist/administration /var/www/amber-admin
RUN sed -i \
    's/api.amber.dev/amber-api.nguyenhuythanh.com/g' \
    /var/www/amber-admin/environment.js
