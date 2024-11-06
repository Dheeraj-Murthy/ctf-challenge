# Vault Heist Web App with Docker

## Prerequisites

- **Docker**: [Install Docker](https://www.docker.com/get-started)
- **Git**: [Install Git](https://git-scm.com/)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vault-heist.git
   cd vault-heist
   ```

2. **Build the Docker image**:
   ```bash
   docker build -t vault-heist .
   ```

3. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 vault-heist
   ```

4. Open your browser and go to `http://localhost:3000`.

## Project Structure

- **src/**: Contains React components (`Home.js`, `HiddenImage.js`).
- **public/**: Static assets (e.g., `index.html`, `logo.png`).
- **Dockerfile**: Configuration to build the app in Docker.

