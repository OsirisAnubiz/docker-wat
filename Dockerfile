FROM node:22-slim

# Create app directory
WORKDIR /usr/src/app

COPY some.js .

RUN mkdir tmp

CMD ["node", "some.js"]
