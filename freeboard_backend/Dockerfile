FROM node:14.16.0

WORKDIR /codecamp_backend/

COPY ./package.json /codecamp_backend/
COPY ./yarn.lock /codecamp_backend/
RUN yarn install

COPY . /codecamp_backend/
CMD yarn start:dev