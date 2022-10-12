FROM node:16.14-alpine

WORKDIR /frontend
COPY package* ./

RUN npm install
COPY . .

CMD ["npm", "start"]