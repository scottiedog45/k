FROM node:12.6 as builder

COPY ./package*.json ./

RUN npm install && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

RUN npm run ng build -- --prod=true

FROM nginx:1-alpine

WORKDIR /etc/nginx
COPY ./nginx.conf ./

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
