# Modern Portfolio Website

![Portfolio Preview](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)

## 🚀 Overview

A modern, responsive portfolio website built with React and TypeScript. This portfolio showcases skills, projects, experience, and education with smooth animations and a sleek design. The site features interactive elements, a contact form, and a particle background effect for an engaging user experience.

## ✨ Live Demo

[View Live Demo](https://flourishing-mousse-bec8d6.netlify.app)

## 🛠️ Technologies Used

### Core Technologies
- **React 18**: For building the user interface with functional components and hooks
- **TypeScript**: For type safety and better developer experience
- **Vite**: For fast development and optimized production builds

### Styling & UI
- **Tailwind CSS**: For utility-first styling and responsive design
- **Framer Motion**: For smooth animations and transitions
- **Lucide React**: For modern, customizable icons

### Performance & User Experience
- **React Intersection Observer**: For triggering animations when elements come into view
- **Custom Particle System**: For interactive background effects
- **Responsive Design**: Fully responsive across all device sizes

## 🌟 Features

- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark Theme**: Modern dark theme with blue and purple accents
- **Particle Background**: Interactive particle system that responds to mouse movement
- **Section-Based Layout**: Organized sections for about, experience, skills, projects, education, and contact
- **Contact Form**: Functional contact form with validation
- **Animated Skill Cards**: Visual representation of skills with hover effects
- **Project Showcase**: Highlighted projects with descriptions and links
- **Social Media Integration**: Links to GitHub, LinkedIn, and email

## 📋 Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form section
│   ├── Education.tsx   # Education & certifications
│   ├── Experience.tsx  # Work experience
│   ├── Footer.tsx      # Page footer
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Particles.tsx   # Interactive background
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills & expertise
├── App.tsx             # Main application component
├── index.css           # Global styles
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Customization

### Changing Personal Information
- Update personal details in respective component files
- Modify project information in `Projects.tsx`
- Update skills in `Skills.tsx`
- Edit experience details in `Experience.tsx`
- Modify education information in `Education.tsx`

### Styling
- Global styles are in `index.css`
- Tailwind configuration is in `tailwind.config.js`
- Component-specific styles are within each component

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in the `components` folder
2. Import and add the component to `App.tsx`
3. Add a navigation link in `Navbar.tsx`

### Changing Colors
- Modify the color scheme in `tailwind.config.js`
- Update gradient colors in `index.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Laptops
- Desktop screens

## 🌐 Deployment

This project is configured for easy deployment on Netlify, Vercel, or GitHub Pages.

### Netlify Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for stock images

---

Made with ❤️ by Singupurapu Sai Charan