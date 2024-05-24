# Utiliza Node.js 18 basado en Alpine para la construcción
FROM node:18-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de definiciones de paquetes y su lockfile
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Ejecuta el script de construcción que genera los archivos estáticos
RUN npm run build

# Inicia una nueva etapa con Nginx para servir el contenido estático
FROM nginx:stable-alpine

# Copia los archivos estáticos del stage de construcción al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración específica del servidor Nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para acceder al servidor Nginx
EXPOSE 80

# Comando para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
