# Kevin's Personal Portfolio

A modern and responsive personal portfolio website built by **Guild-Code**. This portfolio is designed to showcase Kevin's professional experience, projects, skills, and achievements in an elegant and organized layout.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)

---

## Demo

🌐 **Live Demo:** Yet for Deployment.

---

## Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Dynamic Sections**:
  - **Hero**: Highlight personal information and bio.
  - **Skills**: Display technical skills with visuals or animations.
  - **Experience**: A timeline of work history and accomplishments.
  - **Volunteering**: A timeline of volunteering history and accomplishments.
  - **Projects**: Showcasing key projects with live links and details.
  - **Contact Me**: Integrated contact form or email links.
  - **Testimonials**: Testimonials from clients or colleagues.
- **Theme Customization**: Easily change colors and fonts to match your personal branding.
- **Social Media Integration**: Links to LinkedIn, GitHub, and other platforms.
- **Animations**: Smooth transitions and interactions for an engaging user experience.
- **SEO Optimized**: Optimized for search engines.
- **Contact Emailing**: Integrated contact form to respond to the user inquiries.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Python Django
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/icons/) / [React Icons](https://react-icons.github.io/react-icons/)

---

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/h3nrk/kevin.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd kevin
   ```
3. **Navigate to the Backend directory**:
   ```bash
   cd backend
   ```
4. **Install dependencies**:
   ```bash
   pip install django djangorestframework django-cors-headers
   ```
5. **Setup Email Settings**
   ```bash
   # backend/settings.py

   # Email settings
   EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
   EMAIL_HOST = ''  # Your outgoing mail server
   EMAIL_PORT = 465  # SMTP Port for secure SSL
   EMAIL_USE_SSL = True  # Since you're using SMTP with SSL
   EMAIL_HOST_USER = ''  # Your email address
   EMAIL_HOST_PASSWORD = ''  # Email account's password  # Your email password or app-specific password
   DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
   CONTACT_EMAIL = ''  # Where you want to receive contact form messages
   ```
6. **Start the development server**:
   ```bash
   python manage.py runserver
   ```
7. **Navigate to the Frontend directory**:
   ```bash
   cd ../frontend
   ```
8.  **Install dependencies**:
   ```bash
   npm install  or yarn 
   ```
9. **Start the development server**:
   ```bash
   npm run dev or yarn dev
   ```
10. **Open your browser**:
   Visit [http://localhost:5173](http://localhost:5173) to view the portfolio.

---

Thank you for checking out this project! I hope you find it useful and inspiring. Feel free to contribute, provide feedback, or reach out with any questions. 😊