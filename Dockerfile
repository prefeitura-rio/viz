FROM node:lts-alpine as build-stage
RUN apk update && apk add --no-cache --virtual build-deps git
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM python:3.9-slim as modify-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
COPY .github/workflows/scripts/fix_imports.py .
# RUN python3 fix_imports.py

FROM nginx:stable-alpine as production-stage
COPY --from=modify-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /temp/nginx.conf
RUN envsubst /app < /temp/nginx.conf > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
