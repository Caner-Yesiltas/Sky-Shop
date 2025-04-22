<!-- LinkedIn Preview -->
<!-- ![Sky Shop Preview](https://github.com/Caner-Yesiltas/Sky-Shop/blob/main/assets/preview.png?raw=true) -->


<div align="center">
  <h1>⛈️ Sky Shop</h1>
  
  <h3>
    👉 <a href="https://sky-shop-swart.vercel.app/">Live Demo</a> 👈
  </h3>
</div>

<div align="center">
  <img src="/assets/Sky-Shop.gif" alt="Sky Shop Demo" width="800"/>
</div>

## 📌 About The Project

Sky Shop is a modern e-commerce management dashboard built with React and Tailwind CSS. The application features a secure authentication system with session storage, product management capabilities, and a responsive interface for managing an online store. With real-time search capabilities, context-based state management, and lazy loading for optimal performance, Sky Shop provides an excellent admin experience.

### ✨ Key Features

- 🔐 Secure authentication system with session storage
- 🔍 Real-time product search functionality
- 📱 Fully responsive Tailwind design
- 📊 Dashboard with statistics
- 👥 Team management page
- 🎯 Context API for state management
- 🛒 Product detail views with image gallery
- 💫 Smooth page transitions
- 🔄 Protected routes for authenticated users
- 🚀 Lazy loading for improved performance
- 📦 Session storage for persistent login
- 🖼️ Lazy image loading with fallbacks
- 🎨 Custom CSS with Tailwind utilities
- 🔒 Private routing system

### 🛠️ Built With

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/) - For routing and navigation
- [Context API](https://reactjs.org/docs/context.html) - For state management
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Axios](https://axios-http.com/) - For API requests
- [DummyJSON API](https://dummyjson.com/) - For mock data
- [Session Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) - For persistent auth
- [React Lazy & Suspense](https://reactjs.org/docs/code-splitting.html#reactlazy) - For code splitting

## 💻 Getting Started

```bash
# Clone the repository
git clone https://github.com/Caner-Yesiltas/Sky-Shop

# Navigate to project directory
cd sky-shop

# Install dependencies
npm install

# Start the development server
npm start
```

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
│   ├── logo.png
│   ├── logo2.jpg
│   ├── logo3.png
│   └── scrollup.png
├── components/       # UI components
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ScrollToTop.jsx
│   ├── SearchInput.jsx
│   ├── Stats.jsx
│   └── Testimonial.jsx
├── context/         # Context providers
│   ├── AuthProvider.jsx  # Authentication context
│   └── ProductProvider.jsx  # Products context
├── helper/          # Utility functions and data
│   ├── data.js     # Mock data
│   └── icons.js    # SVG icons
├── pages/          # Page components
│   ├── About.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── ProductDetail.jsx
│   └── Products.jsx
├── router/         # Routing configuration
│   ├── AppRouter.jsx
│   └── PrivateRouter.jsx
└── styles/         # CSS styling
    └── App.css     # Global styles & Tailwind
```

## 🔍 Core Features

### Authentication System
- Session storage based authentication
- Protected routes with PrivateRouter
- User session persistence
- Secure login/logout flow
- Route guards for unauthorized access

### Product Management
- Real-time search with Axios
- Lazy loaded product images
- Responsive product grid
- Detailed product views
- Image gallery with thumbnails
- Dynamic filtering system

### State Management
- Context API implementation
- Authentication context
- Products context with search state
- Loading states
- Error handling

### Performance Optimizations
- Lazy loading for routes
- Image lazy loading
- Code splitting
- Session storage for persistence
- Optimized re-renders
- Efficient state updates

### UI/UX Features
- Responsive navigation
- Search functionality
- Loading indicators
- Error boundaries
- Scroll to top
- Toast notifications
- Testimonial carousel
- Team member profiles
- Statistics dashboard

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation menu
- Flexible grid system
- Adaptive layouts
- Touch-friendly interface
- Dynamic breakpoints
- Consistent spacing
- Responsive typography

## 🔒 Security Features

- Protected routes
- Session storage encryption
- Authentication guards
- Secure routing
- Error handling
- Input validation
- Route protection
- Session management

## 📫 Contact

Caner Yesiltas - [caneryesiltas1@gmail.com](mailto:caneryesiltas1@gmail.com)

Project Link: [https://sky-shop-swart.vercel.app/](https://sky-shop-swart.vercel.app/)

<div align="center">
  Made with ⛈️ by Caner Yesiltas
</div>
