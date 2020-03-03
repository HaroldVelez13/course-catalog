############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node

# Información de Metadata
LABEL "hv.app.mongoExpress"="Express Mongo"
LABEL maintainer="haroldvelez13@hotmail.com"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /Projects/course-catalog

# Se estable el directorio de trabajo
WORKDIR /Projects/course-catalog

# Instala los paquetes para express existentes en el package.json
COPY cd /Projects/course-catalog/backend/package.json .
RUN npm install --quiet


# Instala los paquetes existentes en el package.json
COPY cd /Projects/course-catalog/frontend/package.json .
RUN npm install --quiet

