FROM node:10-alpine

WORKDIR /app

COPY package.json /app
COPY rollup.config.js /app
COPY cypress.json /app
COPY config.js /app
COPY appveyor.yml /app
COPY entrypoint.sh /app
COPY static/ /app/static/
COPY src/ /app/src/
COPY cypress/ /app/cypress/

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["--help"]
