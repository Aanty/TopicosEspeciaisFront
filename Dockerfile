# ESTÁGIO 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Definir variáveis de ambiente para o build
ARG VITE_API_URL
ARG PORT=80
ENV VITE_API_URL=${VITE_API_URL}
ENV PORT=${PORT}

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ESTÁGIO 2: Produção
FROM nginx:alpine

# Expor variáveis de ambiente para o runtime
ENV PORT=80
ENV VITE_API_URL=${VITE_API_URL}

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta
EXPOSE ${PORT}
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]