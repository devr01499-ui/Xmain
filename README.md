# AdmirerX Website

A modern, responsive website for AdmirerX BPO services with contact form functionality.

## Features

- 🎨 Modern Material-UI design with glass effect header
- 📱 Fully responsive across all devices
- 🚀 React Router for smooth navigation
- 📧 Contact form with email notifications
- 🎯 6 complete pages: Home, About Us, Services, Careers, Partner With Us, Contact
- 💼 Professional BPO service showcase

## Quick Start

### Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start backend server
npm start
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Services.jsx
│   │   ├── Career.jsx
│   │   ├── PartnerWithUs.jsx
│   │   └── Contact.jsx
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   └── index.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
└── public/
    └── index.html
```

## Email Configuration

The contact form sends emails to: **devr01499@gmail.com**

- Gmail App Password: `dtgx rton ntaq gwqf`
- All form submissions are forwarded to your email
- Automatic confirmation emails sent to customers

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Deploy from the main branch
3. No additional configuration needed

### Backend (Railway/Heroku)
1. Deploy the `backend` folder
2. Set environment variables:
   - `GMAIL_USER=devr01499@gmail.com`
   - `GMAIL_APP_PASSWORD=dtgx rton ntaq gwqf`

## Technologies Used

- **Frontend**: React, Material-UI, React Router
- **Backend**: Node.js, Express, Nodemailer
- **Styling**: Material-UI with custom theme
- **Email**: Gmail SMTP

## Contact Form Features

- ✅ Real-time validation
- ✅ Email notifications to admin
- ✅ Customer confirmation emails
- ✅ Professional email templates
- ✅ Service interest selection
- ✅ Mobile-responsive design

## Pages Overview

1. **Home** - Hero section, services overview, why choose us
2. **About Us** - Company story, values, mission & vision
3. **Services** - Detailed service descriptions with features
4. **Careers** - Job openings and company benefits
5. **Partner With Us** - Partnership types and advantages
6. **Contact** - Contact form and company information

## Development

```bash
# Start both frontend and backend
npm start          # Frontend on port 3000
cd backend && npm start  # Backend on port 5000
```

## Support

For any issues or questions, contact: devr01499@gmail.com

---

**AdmirerX** - Empowering businesses with smart BPO solutions
