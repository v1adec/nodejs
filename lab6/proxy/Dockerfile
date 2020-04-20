FROM node:12.16.1

WORKDIR /usr/src/app

RUN mkdir config

COPY proxy ./proxy
COPY config/proxy-container.json config/
COPY config.js ./
COPY package*.json ./

EXPOSE 3001

RUN npm install
RUN apt update && apt -y install mysql-client
CMD npm run start:proxy-container
