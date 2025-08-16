# Travlr – Module Seven: Secure Admin SPA

This project is the Module Seven version of the Travlr full stack web application.  
It adds **a single layer of security** to the admin side using **JWT authentication**.  
Think of JWT as a backstage pass — only those with the token get through the door.

---

## Features

- **HTML Admin Login Form** (in `/admin`) — like the lock on the front door
- **JWT Authentication** — issues a signed token to verified users
- **Protected Admin Endpoints** — CRUD operations on trips require the token
- **User-Class Endpoint** — `GET /api/users/me` returns current user details
- **Seed Data** — preloaded admin account and example trips for testing
- **Postman Collection** — quick verification of public vs protected routes

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
