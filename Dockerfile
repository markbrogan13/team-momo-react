FROM node:latest

RUN mkdir -p /corona/src

WORKDIR /corona/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

