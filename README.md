# Capstone-Project
EduConnect Africa
A platform I built to help Nigerian students discover university opportunities across Africa. After seeing how many qualified students struggle to find information about studying in other African countries, I decided to create something that could actually solve this problem.
What I Built
This is a full-stack web application that lets Nigerian students:

Search through African universities with smart filtering
Convert their WAEC/NECO grades to different country standards
Get personalized university recommendations
Book counseling sessions with education experts
Save and compare universities

I also built an admin dashboard where administrators can manage the university database, track user analytics, and handle the counseling services.
Tech Stack
I chose these technologies based on what would work best for Nigerian users and what I could realistically build in the timeframe:

# EduConnect Africa

A full-stack platform for African students to discover, apply to, and manage university admissions, with counseling and scholarship support. This project consists of:
- **Frontend:** Next.js (React, TypeScript, Tailwind CSS)
- **Backend:** FastAPI (Python, SQLModel, JWT Auth)

---

## 🚀 Features
- University search, filtering, and details
- Student registration, login, and profile management
- Application tracking and document upload
- Scholarship listings
- Counseling session booking
- Admin dashboard for user and university management
- Secure authentication (JWT, OAuth, role-based access)
- Mock user/demo accounts for testing

---

## 🗂️ Project Structure
```
new-project/
  Frontend/      # Next.js app (student/admin portal)
  fastApi-app/   # FastAPI backend (REST API)
  Backend/       # (Legacy/experimental Next.js backend, not primary)
```

---

## 🖥️ Frontend (Next.js)

### Prerequisites
- Node.js 18+
- npm (or yarn)

### Setup & Run
```bash
cd Frontend
npm install
npm run dev
```
- App runs at: http://localhost:3000

### Main Scripts
- `npm run dev` – Start dev server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint and type-check

---

## 🛠️ Backend (FastAPI)

### Prerequisites
- Python 3.7+
- pip

### Setup & Run
```bash
cd fastApi-app
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
- API runs at: http://localhost:8000
- Docs: http://localhost:8000/docs

### Main Endpoints
- `/api/v1/auth/login` – Login
- `/api/v1/auth/signup` – Register
- `/api/v1/auth/me` – Current user
- `/api/v1/universities` – List/search universities
- `/api/v1/applications` – Manage applications

---

## 🧪 Mock User Accounts

Use these demo credentials to log in and test the platform:

| Role      | Email                        | Password        |
|-----------|------------------------------|-----------------|
| Student   | student@example.com          | password123     |
| Admin     | admin@educonnect.africa      | admin123        |


---

## 🗄️ Database Setup (Frontend/Backend)

- **Frontend/Backend (Next.js):** Uses MongoDB via Prisma ORM. See `MONGODB_SETUP.md` for full instructions.
- **FastAPI:** Uses SQLModel (SQLAlchemy) and supports Postgres, SQLite, etc. Configure via `fastApi-app/app/core/config.py` and `.env`.

---

## 🔐 Security Highlights
- JWT authentication (FastAPI)
- NextAuth.js (Frontend, legacy Backend)
- Role-based access: Student, Counselor, Admin
- Passwords hashed (bcrypt)
- Input validation (Zod, Pydantic)
- Rate limiting, session management, and audit logging

---

## 📚 Documentation
- **API Docs:** http://localhost:8000/docs (FastAPI Swagger UI)
- **Frontend:** Modern, responsive UI with React/Next.js
- **Security:** See `SECURITY_GUIDE.md` for full details

---

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch
3. Commit and push your changes
4. Open a pull request

---

## 📝 License
MIT License. See `LICENSE` file.

---



---

## 📣 Contact
For questions or support, open an issue or contact the maintainers. 
**Video Demo Link:** https://drive.google.com/file/d/1HKrOfgT-k2L_Qmu-ETDu0OFJmQu9-6j7/view?usp=sharing
 

👤 Authors
Jubril Abdulazeez
