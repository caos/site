FROM node:10-alpine

WORKDIR /app

COPY package.json .
COPY rollup.config.js .
COPY cypress.json .
COPY config.js .
COPY appveyor.yml .
COPY entrypoint.sh .
COPY static/ /static/
COPY src/ /src/
COPY cypress/ /cypress/

RUN npm install
RUN echo dockerlog && ls -la
RUN chmod 777 node_modules

ENTRYPOINT ["entrypoint.sh"]
CMD ["--help"]
