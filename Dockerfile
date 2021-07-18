# syntax=docker/dockerfile:1

FROM node:14.17.0-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --production --silent

COPY . ./

CMD [ "npm", "start" ]
