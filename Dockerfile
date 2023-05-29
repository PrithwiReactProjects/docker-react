# Use an official Node.js image as the base
FROM node:14.17.0-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the entire app directory to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use an official NGINX image as the base
FROM nginx:1.21.0-alpine

# Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the NGINX server
EXPOSE 80

# Start NGINX server when the container starts
CMD ["nginx", "-g", "daemon off;"]


