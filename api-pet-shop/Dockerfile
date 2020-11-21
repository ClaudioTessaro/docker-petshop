FROM node:12.16-alpine
WORKDIR /usr/src/app
COPY . .
ENV PORT=3000
ENV MONGO_USERNAME=admin
ENV MONGO_PASSWORD=admin
RUN yarn install
EXPOSE $PORT
ENTRYPOINT [ "yarn", "start" ]