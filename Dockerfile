FROM node:16 as build-deps

WORKDIR /usr/src/app
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .
RUN node buildMultipageApp.js

FROM nginx:alpine

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/frontend
COPY default.conf /etc/nginx/conf.d/default.conf