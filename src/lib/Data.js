export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    fees: 500,
    specialist: "Cardiologist",
    hospital: "City Hospital",
    gender: "Female",
    rating: 4.5,
    experience: 10, 
    offers: "Advanced medical treatments for heart disease, ensuring personalized care for every patient.",
    availability: [
      { day: "Monday - Friday", time: "8:00 AM - 4:00 PM" },
      { day: "Saturday", time: "10:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 123 456 7890",
      email: "sarah.ahmed@cityhospital.com"
    },
    certifiedFrom: "American Board of Cardiology",
    image: "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" // Add the image path here
  },
  {
    id: 2,
    name: "Dr. John Smith",
    fees: 700,
    specialist: "Orthopedic",
    hospital: "HealthCare Clinic",
    gender: "Male",
    rating: 4.0,
    experience: 12,
    offers: "Specializes in orthopedic care, offering treatments for fractures, joint replacement, and sports injuries.",
    availability: [
      { day: "Monday - Friday", time: "10:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 234 567 8901",
      email: "john.smith@healthcareclinic.com"
    },
    certifiedFrom: "American Academy of Dermatology",
    image: "https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww" // Add the image path here
  },
  {
    id: 3,
    name: "Dr. Ayesha Khan",
    fees: 600,
    specialist: "Dermatologist",
    hospital: "Skin Care Hospital",
    gender: "Female",
    rating: 4.8,
    experience: 8,
    offers: "Comprehensive dermatological services, including treatments for skin conditions, acne, and anti-aging procedures.",
    availability: [
      { day: "Monday - Friday", time: "9:30 AM - 5:30 PM" },
      { day: "Saturday", time: "11:00 AM - 3:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 345 678 9012",
      email: "ayesha.khan@skincarehospital.com"
    },
    certifiedFrom: "American Board of Neurology",
    image: "https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww" // Add the image path here
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    fees: 800,
    specialist: "Neurologist",
    hospital: "City Hospital",
    gender: "Male",
    rating: 4.3,
    experience: 15,
    offers: "Advanced neurology care, treating conditions like epilepsy, stroke, and chronic headaches.",
    availability: [
      { day: "Monday - Friday", time: "8:30 AM - 4:30 PM" },
      { day: "Saturday", time: "10:30 AM - 2:30 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 456 789 0123",
      email: "michael.brown@cityhospital.com"
    },
    certifiedFrom: "American Academy of Pediatrics",
    image: "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww" // Add the image path here
  },
  {
    id: 5,
    name: "Dr. Emily Davis",
    fees: 650,
    specialist: "Pediatrician",
    hospital: "Green Valley Medical Center",
    gender: "Female",
    rating: 4.6,
    experience: 9, 
    offers: "Specializes in pediatric care, offering vaccinations, developmental screenings, and care for common childhood illnesses.",
    availability: [
      { day: "Monday - Friday", time: "9:00 AM - 3:00 PM" },
      { day: "Saturday", time: "12:00 PM - 4:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 567 890 1234",
      email: "emily.davis@greenvalleymedical.com"
    },
    certifiedFrom: "American Medical Association",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww" 
  
  },
  {
    id: 6,
    name: "Dr. Omar Ali",
    fees: 550,
    specialist: "General Physician",
    hospital: "Central Clinic",
    gender: "Male",
    rating: 3.9,
    experience: 7, 
    offers: "General medical consultations, focusing on preventive care, routine check-ups, and the treatment of common illnesses.",
    availability: [
      { day: "Monday - Friday", time: "10:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:30 AM - 1:30 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 678 901 2345",
      email: "omar.ali@centralclinic.com"
    },
    certifiedFrom: "American College of Obstetricians and Gynecologists",
    image: "https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww"
  },
  {
    id: 7,
    name: "Dr. Linda Williams",
    fees: 900,
    specialist: "Gynecologist",
    hospital: "Women's Health Center",
    gender: "Female",
    rating: 4.7,
    experience: 14, 
    offers: "Specializes in women's health, offering services such as routine gynecological exams, pregnancy care, and menopause management.",
    availability: [
      { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
      { day: "Saturday", time: "10:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 789 012 3456",
      email: "linda.williams@womenshealthcenter.com"
    },
    certifiedFrom: "American Psychiatric Association",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww"
  },
  {
    id: 8,
    name: "Dr. Faisal Rehman",
    fees: 750,
    specialist: "Psychiatrist",
    hospital: "MindCare Clinic",
    gender: "Male",
    rating: 4.2,
    experience: 6, 
    offers: "Provides psychiatric care, including treatments for depression, anxiety, and stress-related disorders.",
    availability: [
      { day: "Monday - Friday", time: "11:00 AM - 7:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    contact: {
      phone: "+1 890 123 4567",
      email: "faisal.rehman@mindcareclinic.com"
    },
    certifiedFrom: "American Board of Cardiology",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add the image path here
  }
];
