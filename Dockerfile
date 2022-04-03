FROM node:17 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/