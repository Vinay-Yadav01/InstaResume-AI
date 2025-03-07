# AI Resume Maker

A modern web application that helps users create professional resumes with AI assistance.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Components](#components)
- [Pages](#pages)
- [Services](#services)
- [Architecture](#architecture)
  - [Authentication](#authentication)
  - [State Management](#state-management)
  - [Styling](#styling)
  - [API Integration](#api-integration)
- [Development](#development)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- AI-powered resume content generation
- Multiple resume templates
- Real-time resume preview
- Custom theme colors
- Authentication with Clerk
- Save and edit resumes
- Responsive design

## Tech Stack

- React
- Tailwind CSS
- Clerk Authentication
- Strapi Backend
- Google Gemini AI API
- Vite
- React Router DOM

## Project Structure

```
ai-resume-maker/
├── src/
│   ├── components/
│   │   ├── custom/
│   │   └── ui/
│   ├── pages/
│   ├── context/
│   └── assets/
├── services/
├── public/
└── backend/
```

### Components

Located in [`src/components/`](src/components/):

#### Custom Components

1. **Header** [`src/components/custom/Header.jsx`](src/components/custom/Header.jsx)

   - Main navigation header
   - Handles authentication state
   - Logo and navigation links

2. **Form Components** [`src/components/custom/form/`](src/components/custom/form/)

   - `PersonalDetail.jsx` - Personal information form
   - `Experience.jsx` - Work experience form
   - `Education.jsx` - Educational background form
   - `Skills.jsx` - Skills rating form
   - `Summary.jsx` - AI-assisted summary generation

3. **Preview Components** [`src/components/custom/preview/`](src/components/custom/preview/)

   - `PersonalDetailPreview.jsx` - Preview personal info
   - `ExperiencePreview.jsx` - Preview work experience
   - `EducationalPreview.jsx` - Preview education
   - `SkillsPreview.jsx` - Preview skills
   - `SummaryPreview.jsx` - Preview summary

4. **Resume Management**

   - `AddResume.jsx` - Create new resume
   - `AllResume.jsx` - Display all resumes
   - `ResumeCardItem.jsx` - Individual resume card
   - `ResumePreview.jsx` - Complete resume preview

5. **UI Elements**
   - `ThemeColor.jsx` - Theme color selector
   - `RichTextEditor.jsx` - Rich text editing
   - `FormSection.jsx` - Form section wrapper

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-resume-maker.git
cd ai-resume-maker
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env.local`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_STRAPI_API_KEY=your_strapi_key
VITE_GOOGLE_AI_API_KEY=your_gemini_key
VITE_IMG_PATH=your_image_path
VITE_IMG2_PATH=your_logo_path
```

4. Start the development server:

```bash
npm run dev
```

5. Set up Strapi backend:

```bash
cd backend
npm install
npm run develop
```

## Pages

Located in [`src/pages/`](src/pages/):

1. **Home** [`src/pages/Home.jsx`](src/pages/Home.jsx)

   - Landing page
   - Public access

2. **Dashboard** [`src/pages/Dashboard.jsx`](src/pages/Dashboard.jsx)

   - Resume management
   - Protected route
   - Shows all user resumes

3. **EditResume** [`src/pages/EditResume.jsx`](src/pages/EditResume.jsx)

   - Resume editor interface
   - Split view with form and preview
   - Protected route

4. **SignInPage** [`src/pages/SignInPage.jsx`](src/pages/SignInPage.jsx)
   - Authentication page
   - Clerk integration

## Services

Located in [`services/`](services/):

1. **AI Modal** [`services/aiModal.js`](services/aiModal.js)

   - Google Gemini AI integration
   - Handles AI content generation

2. **Global API** [`services/globalAPI.js`](services/globalAPI.js)
   - Strapi API integration
   - Resume CRUD operations

## Architecture

### Authentication

- **Clerk Integration**
  - Handles user authentication and management
  - Protected routes using `useUser` hook
  - Custom sign-in and sign-up pages
  - User profile management
  - Email verification

### State Management

1. **Context API**

   - `ResumeInfoContext` manages global resume state
   - Provides real-time updates across components
   - Handles form data persistence

   ```jsx
   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
   ```

2. **Local State**
   - Component-level state using `useState`
   - Form validation states
   - Loading states
   - UI interaction states
3. **Clerk Auth State**
   - User authentication status
   - User profile information
   - Session management

### Styling

1. **Tailwind CSS**

   - Utility-first CSS framework
   - Custom configuration in `tailwind.config.js`
   - Responsive breakpoints
   - Dark mode support

2. **Shadcn UI**

   - Pre-built accessible components
   - Custom theme support
   - Components used:
     - Button
     - Dialog
     - Input
     - Textarea
     - Select
     - Toast

3. **Custom Theming**
   - Dynamic theme colors
   - Color picker for resume customization
   - Responsive design patterns
   ```jsx
   const themes = {
     primary: "#0ea5e9",
     secondary: "#64748b",
     // ... more colors
   };
   ```

### API Integration

1. **Strapi Backend**

   - RESTful API endpoints
   - Content management
   - User data storage
   - Resume CRUD operations

2. **Google Gemini AI**
   - AI-powered content generation
   - Summary suggestions
   - Skills recommendations
   - Job description enhancement

## Development

### Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src",
  "test": "vitest"
}
```

### Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE.md
