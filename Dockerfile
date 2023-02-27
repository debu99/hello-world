FROM node:16.14-alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

FROM node:16.14-alpine as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY package.json .
COPY app.js .

CMD ["npm", "start"]
