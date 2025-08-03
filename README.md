# Thomas Carsello - Portfolio Website

A modern, responsive personal portfolio website built with React and Vite, showcasing my software development skills and experience.

## 🌟 Features

- **Modern Design**: Dark theme with orange and teal accent colors
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Professional Resume**: Downloadable PDF resume
- **Contact Information**: Easy ways to get in touch

## 🛠️ Tech Stack

- **Frontend**: React 19, CSS3
- **Build Tool**: Vite
- **Linting**: ESLint
- **Deployment**: Ready for Netlify, Vercel, or GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/thomas-carsello-portfolio.git
   cd thomas-carsello-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # About section component
│   ├── Contact/        # Contact information
│   ├── Experience/     # Professional experience timeline
│   ├── Footer/         # Site footer
│   ├── Header/         # Navigation header
│   ├── Hero/           # Main hero section with photo
│   └── Projects/       # Projects showcase
├── App.jsx             # Main app component
├── App.css            # Global styles and CSS variables
├── index.css          # Base styles
└── main.jsx           # React entry point
```

## 🎨 Customization

The design system uses CSS custom properties for easy theming. Key colors are defined in `src/App.css`:

- `--accent-orange`: Primary accent color
- `--accent-mint`: Secondary accent color
- `--bg-primary`: Main background color
- `--text-primary`: Primary text color

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

The site is ready to deploy to:

- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions workflow

## 📞 Contact

Thomas Carsello  
📧 tkcarsello@gmail.com  
📍 Chicago, IL

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.