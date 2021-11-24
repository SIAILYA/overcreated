FROM node:16.13.0 as builder

WORKDIR /app

COPY frontend /app/frontend

RUN cd frontend && npm i

RUN cd frontend && npm run build

FROM node:16.13.0-alpine3.13

WORKDIR /app

COPY --from=builder /app/dist /app/dist

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY views /app/views

RUN npm i

EXPOSE 5088

CMD ["node", "index.js"]
