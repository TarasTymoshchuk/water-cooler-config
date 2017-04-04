FROM nginx:stable
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./ /var/www
WORKDIR /var/www

RUN apt-get update && apt-get -y install git curl bzip2 && \
    curl -sL https://deb.nodesource.com/setup_6.x | bash && apt-get install -y nodejs && \
    npm i && npm run prod

#
# Remove the packages that are no longer required after the package has been installed
RUN DEBIAN_FRONTEND=noninteractive apt-get autoremove --purge -q -y
RUN DEBIAN_FRONTEND=noninteractive apt-get autoclean -y -q
RUN DEBIAN_FRONTEND=noninteractive apt-get clean -y
#
# Remove all non-required information from the system to have the smallest
# image size as possible
RUN rm -rf /usr/share/doc/* /usr/share/man/?? /usr/share/man/??_* /usr/share/locale/* /var/cache/debconf/*-old /var/lib/apt/lists/* /tmp/*
#