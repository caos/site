FROM node:15-alpine

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
# COPY messages/ /app/messages/

RUN npm install
RUN echo dockerlog && ls -la

ENTRYPOINT ["/app/entrypoint.sh"]
# CMD ["npx sapper export","--legacy"]
