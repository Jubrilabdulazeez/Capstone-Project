# 🎓 EduConnect Africa

A comprehensive platform connecting African students with university opportunities across the continent. Built with modern web technologies to provide seamless university discovery, application management, and counseling services.

## 🌟 Project Overview

EduConnect Africa addresses the challenge of information accessibility for African students seeking higher education opportunities. The platform provides:

- **University Discovery**: Browse and search universities across Africa
- **Application Management**: Track applications and manage documents
- **Counseling Services**: Book sessions with education experts
- **Admin Dashboard**: Comprehensive management system for administrators
- **Grade Calculator**: Convert grades between different education systems

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context + Custom hooks
- **Authentication**: NextAuth.js with role-based access
- **Deployment**: Ready for Vercel/Netlify deployment

### Backend (FastAPI) - **Deployed**
- **Framework**: FastAPI with Python
- **Database**: PostgreSQL with SQLModel ORM
- **Authentication**: JWT tokens with role-based permissions
- **API Documentation**: Auto-generated Swagger UI
- **Status**: ✅ **Already deployed and running**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Frontend Setup (Local Development)

1. **Clone the repository**
```bash
git clone https://github.com/Jubrilabdulazeez/Capstone-Project.git
cd Capstone-Project
```

2. **Install dependencies**
```bash
cd Frontend
npm install
```

3. **Environment Setup**
Create a `.env.local` file in the Frontend directory:
```bash
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Backend API (Deployed)
NEXT_PUBLIC_API_URL=https://your-deployed-backend-url.com

# Optional: Google OAuth (if using)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Demo Accounts

Use these accounts to test different user roles:

| Role | Email | Password | Features |
|------|-------|----------|----------|
| **Student** | `student@example.com` | `password123` | Browse universities, manage applications |
| **Admin** | `admin@educonnect.africa` | `admin123` | Full system access, user management |
| **Counselor** | `sarah.johnson@educonnect.africa` | `counselor123` | Counseling sessions, student support |

## 🎯 Key Features

### For Students
- **University Search**: Browse universities with advanced filtering
- **Application Tracking**: Manage applications and required documents
- **Grade Calculator**: Convert grades between different education systems
- **Counseling Booking**: Schedule sessions with education experts
- **Profile Management**: Complete academic and personal information

### For Administrators
- **User Management**: View and manage all users
- **University Database**: Add and manage university information
- **Analytics Dashboard**: View system statistics and user activity
- **Application Oversight**: Monitor and manage student applications
- **Counselor Management**: Assign and manage counseling staff

### For Counselors
- **Student Support**: View assigned students and applications
- **Session Management**: Schedule and conduct counseling sessions
- **Resource Sharing**: Provide guidance and resources to students

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Context + Custom Hooks
- **Authentication**: NextAuth.js
- **Forms**: React Hook Form + Zod validation
- **UI Components**: Radix UI primitives

### Backend (Deployed)
- **Framework**: FastAPI (Python)
- **Database**: PostgreSQL with SQLModel
- **Authentication**: JWT tokens
- **Documentation**: Auto-generated Swagger UI
- **Deployment**: Cloud platform (production ready)

## 📁 Project Structure

```
Capstone-Project/
├── Frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # Reusable UI components
│   │   ├── lib/            # Utilities and services
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── fastApi-app/            # FastAPI backend (deployed)
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── models/        # Database models
│   │   └── services/      # Business logic
│   └── requirements.txt
└── README.md
```

## 🔧 Development Scripts

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🌐 API Endpoints

The backend is deployed and provides these endpoints:

### Public Endpoints
- `GET /api/v1/universities` - List universities
- `GET /api/v1/universities/{id}` - Get university details
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User authentication

### Protected Endpoints
- `GET /api/v1/users/profile` - User profile
- `POST /api/v1/applications` - Create application
- `GET /api/v1/applications` - List user applications

### Admin Endpoints
- `GET /api/v1/admin/users` - List all users
- `GET /api/v1/admin/analytics` - System analytics
- `POST /api/v1/admin/universities` - Create university

## 🔐 Security Features

- **Role-based Access Control**: Student, Counselor, Admin roles
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive form validation with Zod
- **Route Protection**: Protected routes with middleware
- **Password Security**: bcrypt hashing with salt rounds

## 🎨 UI/UX Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark/Light Mode**: Theme switching capability
- **Accessibility**: WCAG compliant components
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages

## 🚀 Deployment

### Frontend Deployment
The frontend is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

### Backend Status
✅ **Already deployed and running** - No additional setup required


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jubril Abdulazeez**
- GitHub: [@Jubrilabdulazeez](https://github.com/Jubrilabdulazeez)
- Project: [EduConnect Africa](https://github.com/Jubrilabdulazeez/Capstone-Project)

---

**Note**: This is a capstone project demonstrating full-stack web development skills with modern technologies. The backend is deployed on render and ready to use, so you only need to run the frontend locally for development. 