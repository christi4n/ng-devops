### STAGE 1: Build ###
FROM node:14.19-alpine as BUILD
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 1: Run ###
FROM nginx:1.22.0-alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ng-devops /usr/share/nginx/html
EXPOSE 80