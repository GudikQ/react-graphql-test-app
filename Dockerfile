FROM node:15.8-alpine3.11 AS build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

ENTRYPOINT ["npm"]
CMD ["start"]