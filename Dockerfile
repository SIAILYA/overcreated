FROM node:16.13.0 as builder

WORKDIR /app/client

COPY client /app/client

RUN yarn && yarn build

FROM node:16.13.0-alpine3.13

WORKDIR /app/server

COPY --from=builder /app/client/dist /app/client/dist

COPY server /app/server
RUN yarn && yarn build

EXPOSE 5088

WORKDIR /app/server

CMD ["yarn", "start"]
