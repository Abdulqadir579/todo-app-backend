# Stage 1: Build the application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Run the application
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules/ ./
COPY --from=build /app/. .

# Expose the application port
EXPOSE 5000

# Run the application
CMD ["npm", "start"]
