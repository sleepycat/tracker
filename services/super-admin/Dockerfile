FROM node:alpine

ENV NODE_ENV production

WORKDIR /app
COPY src ./src
COPY index.js ./index.js
COPY package* ./
COPY migrations.js ./migrations.js
RUN npm ci

USER node
CMD ["npm", "start"]