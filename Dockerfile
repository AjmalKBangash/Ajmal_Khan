# # Stage: Build and Serve React App
# FROM node:latest

# # Set working directory
# WORKDIR /portfolio_frontend

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the app
# COPY . .

# # Build the React app
# RUN npm run build

# # Install a static file server
# RUN npm install -g serve

# # Move into the build output directory
# WORKDIR /portfolio_frontend/build

# # Expose port 3000
# EXPOSE 3000

# # Serve the built app
# CMD ["serve", "-s", ".", "-l", "3000"]

FROM nginx:alpine

# Create a non-root user and group
# RUN addgroup -g 1001 nginxgroup && \-
#     adduser -u 1001 -G nginxgroup -D -H -s /bin/false nginxuser

# Change ownership of necessary directories
# RUN mkdir -p /var/cache/nginx/client_temp && \
#     chown -R nginxuser:nginxgroup /var/cache/nginx/client_temp && \
#     chown -R nginxuser:nginxgroup /etc/nginx/conf.d/default.conf && \
#     chown -R nginxuser:nginxgroup /var/cache/nginx && \
#     chown -R nginxuser:nginxgroup /var/run && \
#     chown -R nginxuser:nginxgroup /var/log/nginx && \
#     chown -R nginxuser:nginxgroup /run

# Copy your React app
COPY build/ /usr/share/nginx/html

# Switch to non-root user
# USER nginxuser
USER root

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]











# FROM nginx:alpine

# # Copy your React app
# COPY build/ /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
