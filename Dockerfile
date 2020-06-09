FROM node:10-slim

LABEL version="1.0.0"
LABEL repository="https://github.com/caos/site"
LABEL homepage="https://github.com/caos"

LABEL com.github.actions.name="Github Action Site Generator"
LABEL com.github.actions.description="Generates a doc site out of md files"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="gray-dark"

# RUN npm install

COPY README.md /
COPY package.json /
COPY rollup.config.js /
COPY cypress.json /
COPY config.js /
COPY appveyor.yml /
COPY /static /static
COPY /src /src

COPY "entrypoint.sh" "/entrypoint.sh"

RUN npm install

RUN ls -la src
RUN ls -la

ENTRYPOINT ["/entrypoint.sh"]
CMD ["--help"]