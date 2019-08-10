FROM node:8.11.3

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

RUN cd client && npm install && npm build

COPY . .

EXPOSE 3000

CMD ["npm", "start"]