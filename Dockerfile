FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY dist dist
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --production=true

CMD [ "node", "./dist/index.js" ]

