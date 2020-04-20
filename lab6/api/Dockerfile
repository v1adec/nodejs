FROM node:12.16.1

WORKDIR /usr/src/app

RUN mkdir config

COPY api ./api
COPY config/api.json config/
COPY config.js ./
COPY package*.json ./

EXPOSE 3000

RUN npm install
CMD npm run start:api
