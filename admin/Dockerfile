FROM node:16.19.1-alpine3.17 as builder

WORKDIR /app

COPY . /app/

RUN yarn && yarn run admin:build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /app/static

COPY ./nginx.conf /etc/nginx/nginx.conf
