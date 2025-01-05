# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy all the source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the service
CMD ["npm", "run", "start:prod"]
