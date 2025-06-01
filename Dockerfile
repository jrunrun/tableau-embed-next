# Step 1: Build the app
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/my-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 