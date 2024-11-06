# Use Node.js image to run the backend
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package files
COPY package*.json ./

# Install dependencies
RUN npm install --build-from-source

# Copy the backend code
COPY . .

# Expose the backend port (assuming Express runs on port 3001)
EXPOSE 3001

# Run the backend server
CMD ["node", "server.js"]
