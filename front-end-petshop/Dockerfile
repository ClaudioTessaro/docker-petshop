FROM node:13 AS builder
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_URL_BACKEND=http://localhost:3000
RUN npm run build

FROM nginx
COPY --from=builder build /usr/share/nginx/html 