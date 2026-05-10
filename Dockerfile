# --- Build stage -------------------------------------------------------------
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first for layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# --- Serve stage -------------------------------------------------------------
FROM nginx:1.27-alpine AS serve

# Cloud Run injects $PORT (default 8080). Use a template + envsubst at start.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Drop the built site into nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# nginx:alpine includes a docker-entrypoint that runs envsubst over
# /etc/nginx/templates/*.template into /etc/nginx/conf.d/ before launch.
ENV PORT=8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
