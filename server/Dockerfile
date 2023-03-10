FROM node:16.19.1-alpine3.17 as builder

WORKDIR /app

COPY . /app/.

RUN yarn && yarn server:build

FROM node:16.19.1-alpine3.17

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/package.json

RUN yarn install --production

EXPOSE 5000

CMD ["yarn", "server:start:prod"]
