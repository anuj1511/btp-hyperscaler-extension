# Use Node.js version 14 as base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port (if needed)
EXPOSE 3000

# Run the application using npm run dev command
CMD ["npm", "run", "dev"]
