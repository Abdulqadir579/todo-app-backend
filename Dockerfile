# Stage 1: Build the application
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./


# Copy the rest of the application code
COPY . .

# Build the application (if using TypeScript)
RUN npm run build

# Stage 2: Run the application
FROM gcr.io/distroless/base AS runner

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=base /app/dist ./dist
COPY --from=base /app/package*.json ./

# Install only production dependencies
RUN npm install

# Expose the application port
EXPOSE 8000

# Run the application
CMD ["node", "dist/main"]







