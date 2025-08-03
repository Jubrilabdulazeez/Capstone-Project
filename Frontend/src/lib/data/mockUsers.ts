import type { User } from "@/lib/types/user";

// Mock users data for testing without backend
export const mockUsers: User[] = [
  {
    id: "user-001",
    email: "student@example.com",
    firstName: "John",
    lastName: "Doe",
    nationality: "Nigeria",
    verified: true,
    role: "Student",
    createdAt: new Date("2024-01-15").toISOString(),
    profilePicture: undefined,
    qualifications: [
      {
        id: "qual-001",
        type: "Secondary Education",
        institution: "Lagos State Model College",
        grade: "A1",
        year: 2023,
        certificate: "WAEC",
        subjects: [
          { name: "English Language", grade: "A1" },
          { name: "Mathematics", grade: "A1" },
          { name: "Physics", grade: "B2" },
          { name: "Chemistry", grade: "A1" },
          { name: "Biology", grade: "B3" }
        ]
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Yoruba", 
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: ["Computer Science", "Engineering", "Business"],
      preferredCountries: ["Ghana", "South Africa", "Kenya"],
      preferredDegreeTypes: ["Bachelor"],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 2000,
        max: 8000
      },
      accommodationPreference: "On-campus",
      startDate: "Fall 2024",
      studyMode: "Full-time",
      scholarshipRequired: true
    },
    savedUniversities: ["univ-001", "univ-002"],
    applications: [
      {
        id: "app-001",
        universityId: "univ-001",
        programId: "prog-001",
        status: "Under Review",
        submittedAt: new Date("2024-02-01").toISOString(),
        documents: ["transcript", "personal-statement", "recommendation-letters"]
      }
    ],
    counselingSessions: [
      {
        id: "session-001",
        counselorId: "counselor-001",
        date: new Date("2024-03-15").toISOString(),
        status: "Completed",
        type: "University Selection",
        notes: "Discussed options in Ghana and South Africa"
      }
    ]
  },
  {
    id: "user-002", 
    email: "admin@educonnect.africa",
    firstName: "Admin",
    lastName: "User",
    nationality: "Nigeria",
    verified: true,
    role: "Admin",
    createdAt: new Date("2023-01-01").toISOString(),
    qualifications: [],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-003",
    email: "sarah.johnson@educonnect.africa", 
    firstName: "Sarah",
    lastName: "Johnson",
    nationality: "South Africa",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2023-06-01").toISOString(),
    qualifications: [
      {
        id: "qual-002",
        type: "Masters",
        institution: "University of Cape Town",
        grade: "Distinction",
        year: 2020,
        certificate: "M.Ed in Educational Psychology"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Afrikaans",
        level: "Advanced"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference", 
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-004",
    email: "michael.okafor@educonnect.africa",
    firstName: "Michael",
    lastName: "Okafor",
    nationality: "Nigeria",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2023-08-20").toISOString(),
    qualifications: [
      {
        id: "qual-003",
        type: "Masters",
        institution: "Lagos Business School",
        grade: "Distinction",
        year: 2019,
        certificate: "MBA Finance"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Igbo",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-005",
    email: "amina.hassan@educonnect.africa",
    firstName: "Amina",
    lastName: "Hassan",
    nationality: "Egypt",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2023-11-10").toISOString(),
    qualifications: [
      {
        id: "qual-004",
        type: "Masters",
        institution: "University of Cairo",
        grade: "Distinction",
        year: 2018,
        certificate: "MD Medicine"
      },
      {
        id: "qual-005",
        type: "Masters",
        institution: "Johns Hopkins University",
        grade: "Distinction",
        year: 2020,
        certificate: "MPH Public Health"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Arabic",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-006",
    email: "david.mensah@educonnect.africa",
    firstName: "David",
    lastName: "Mensah",
    nationality: "Ghana",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2022-01-05").toISOString(),
    qualifications: [
      {
        id: "qual-006",
        type: "PhD",
        institution: "University of Ghana",
        grade: "Distinction",
        year: 2021,
        certificate: "Ph.D Computer Engineering"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Twi",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-007",
    email: "grace.mwangi@educonnect.africa",
    firstName: "Grace",
    lastName: "Mwangi",
    nationality: "Kenya",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2021-09-12").toISOString(),
    qualifications: [
      {
        id: "qual-007",
        type: "Masters",
        institution: "University of Nairobi",
        grade: "Distinction",
        year: 2019,
        certificate: "LLM International Law"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Swahili",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-008",
    email: "john.adebayo@educonnect.africa",
    firstName: "John",
    lastName: "Adebayo",
    nationality: "Nigeria",
    verified: false,
    role: "COUNSELOR",
    createdAt: new Date("2024-01-15").toISOString(),
    qualifications: [
      {
        id: "qual-008",
        type: "Masters",
        institution: "Obafemi Awolowo University",
        grade: "Merit",
        year: 2023,
        certificate: "M.Ed Guidance and Counseling"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Native"
      },
      {
        language: "Yoruba",
        level: "Native"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  },
  {
    id: "user-009",
    email: "fatima.ali@educonnect.africa",
    firstName: "Fatima",
    lastName: "Ali",
    nationality: "Morocco",
    verified: true,
    role: "COUNSELOR",
    createdAt: new Date("2023-03-20").toISOString(),
    qualifications: [
      {
        id: "qual-009",
        type: "Masters",
        institution: "Mohammed V University",
        grade: "Distinction",
        year: 2022,
        certificate: "M.Ed Educational Leadership"
      }
    ],
    languageProficiencies: [
      {
        language: "English",
        level: "Advanced"
      },
      {
        language: "Arabic",
        level: "Native"
      },
      {
        language: "French",
        level: "Advanced"
      }
    ],
    studyPreferences: {
      fieldsOfInterest: [],
      preferredCountries: [],
      preferredDegreeTypes: [],
      preferredLanguages: ["English"],
      budgetRange: {
        min: 0,
        max: 0
      },
      accommodationPreference: "No Preference",
      startDate: "Flexible",
      studyMode: "No Preference",
      scholarshipRequired: false
    },
    savedUniversities: [],
    applications: [],
    counselingSessions: []
  }
];

// Mock authentication credentials
export const mockCredentials = {
  "student@example.com": "password123",
  "admin@educonnect.africa": "admin123",
  "sarah.johnson@educonnect.africa": "counselor123",
  "michael.okafor@educonnect.africa": "counselor123",
  "amina.hassan@educonnect.africa": "counselor123",
  "david.mensah@educonnect.africa": "counselor123",
  "grace.mwangi@educonnect.africa": "counselor123",
  "john.adebayo@educonnect.africa": "counselor123",
  "fatima.ali@educonnect.africa": "counselor123"
};