# MAB Judiciary Platform

A premium judiciary exam preparation and law resource platform for Pakistani students and overseas Pakistanis.

## Features
- **Laws & PDFs**: Access to bare acts, ordinances, and rules.
- **Case Laws**: Upload and search decided cases.
- **Video Gallery**: Curated YouTube videos for exam prep.
- **Personal Vault**: Private storage for user notes and documents.
- **Services**: Legal services overview.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Setup

### Prerequisites
- Node.js (v14+)
- MongoDB

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd MAB
    ```

2.  **Backend Setup**
    ```bash
    cd server
    npm install
    cp .env.example .env
    # Update .env with your credentials
    npm run dev
    ```

3.  **Frontend Setup**
    ```bash
    cd client
    npm install
    npm run dev
    ```

## Environment Variables

See `.env.example` for required environment variables.
