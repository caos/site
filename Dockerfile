FROM node:10-alpine 

LABEL version="1.0.0"
LABEL repository="https://github.com/caos/site"
LABEL homepage="https://github.com/caos"

LABEL com.github.actions.name="Github Action Site Generator"
LABEL com.github.actions.description="Generates a doc site out of md files"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="gray-dark"

WORKDIR /app
COPY package.json /app
RUN npm install
COPY rollup.config.js /app
COPY cypress.json /app
COPY config.js /app
COPY appveyor.yml /app

RUN ls -la

ENTRYPOINT ["npx"]
CMD ["--help"]