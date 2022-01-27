#A lightweight node image
FROM node:16-alpine3.14

WORKDIR .

COPY package.json /app/package.json

WORKDIR /app

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]