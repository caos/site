FROM node:10-alpine

WORKDIR /app

COPY package.json /app
COPY rollup.config.js /app
COPY cypress.json /app
COPY config.js /app
COPY appveyor.yml /app
COPY entrypoint.sh /app
COPY static /app
COPY src /app
COPY cypress /app

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["--help"]