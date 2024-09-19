# FROM node:latest

# # Set working directory
# WORKDIR /portfolio_frontend

# # Copy the package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install the dependencies
# RUN npm install

# # Copy the rest of the application source code
# COPY . .

# # Build the React app
# RUN npm run build

# Stage 1: Build the React application
FROM node:latest AS build

# Set working directory
WORKDIR /portfolio_frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:latest

# Copy the built React app from the previous stage
COPY --from=build /portfolio_frontend/build /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

