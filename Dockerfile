FROM node:10-alpine 

LABEL version="1.0.0"
LABEL repository="https://github.com/caos/site"
LABEL homepage="https://github.com/caos"

LABEL com.github.actions.name="Github Action Site Generator"
LABEL com.github.actions.description="Generates a doc site out of md files"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="gray-dark"

COPY package.json /
COPY rollup.config.js /
COPY cypress.json /
COPY config.js /
COPY appveyor.yml /
COPY entrypoint.sh /

RUN ls -la

ENTRYPOINT ["/entrypoint.sh"]
CMD ["--help"]