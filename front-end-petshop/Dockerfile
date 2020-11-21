FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .
ENV REACT_APP_URL_BACKEND=http://localhost:3333

RUN npm run build

EXPOSE 3000

CMD npm start