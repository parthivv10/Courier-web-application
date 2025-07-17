# Courier App Monorepo

A professional, full-stack courier management platform for real-time shipment tracking, user management, and automated logistics. This repository contains both the backend (FastAPI) and frontend (React) applications.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Security Best Practices](#security-best-practices)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)

---

## Overview

Courier App is a robust platform designed to streamline shipment management, automate logistics, and provide real-time tracking for businesses and individuals. The system supports user authentication, address management, payment integration, and a modern dashboard for both suppliers and importers/exporters.

---

## Features
- Real-time shipment tracking and status updates
- User authentication and role-based access
- Address and package management
- Payment integration (Razorpay)
- Email notifications (SMTP)
- Analytics dashboard with charts
- Responsive, modern UI (React + Tailwind CSS)

---

## Architecture

- **Backend:** FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, SMTP, Razorpay
- **Frontend:** React, Vite, Tailwind CSS, React Router, Recharts

---

## Folder Structure

```
Courier_App/
├── backend/   # FastAPI backend (APIs, DB, Auth, Alembic, etc.)
├── frontend/  # React frontend (Vite, Tailwind, Dashboard, etc.)
└── README.md  # Project documentation (this file)
```

---

## Getting Started

### Backend Setup
1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create and activate a virtual environment:
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Configure environment variables:
   - Copy `.env.example` to `.env` and fill in your database, JWT, SMTP, and Razorpay credentials.
5. Run the backend server:
   ```sh
   uvicorn main:app --reload
   ```
   - The API will be available at `http://localhost:8000/`

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the frontend app:
   ```sh
   npm run dev
   ```
   - The app will be available at `http://localhost:5173/` (default Vite port)
   - Ensure the backend is running at `http://localhost:8000/` (or update the API URL in `src/utils/axiosInstance.jsx`)

---

## Environment Variables

**Backend:**
- `environment`, `db_user`, `db_pass`, `db_host`, `db_name`, `db_port`
- `secret_key`, `algorithm`, `access_token_expire_minutes`, `refresh_token_expire_days`
- `razorpay_key_id`, `razorpay_key_secret`
- `smtp_from_email`, `smtp_user`, `smtp_password`, `smtp_host`, `smtp_port`
- `APP_HOST`, `FORGET_PASSWORD_URL`

**Frontend:**
- API URLs and other public configuration (do not store secrets in frontend `.env`)

---

## Security Best Practices
- **Never commit secrets (API keys, passwords, etc.) to the repository.**
- Use `.env` files for all sensitive configuration and ensure they are listed in `.gitignore`.
- If a secret is accidentally committed:
  1. Revoke and rotate the secret immediately.
  2. Remove the secret from all files and git history (using BFG Repo-Cleaner or similar tools).
  3. Force-push the cleaned repository.
  4. Notify all collaborators to re-clone the repository.
- For more information, see [GitHub's secret scanning documentation](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning).

---

## Contribution Guidelines

We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes and add tests if applicable
4. Submit a pull request with a clear description of your changes

---

## License

This project is licensed under the MIT License. 