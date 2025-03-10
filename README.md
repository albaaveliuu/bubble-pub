# BUBBLE Pub Website

A modern, colorful website for BUBBLE Pub, a queer bar based in Prishtinë. Built with React and Material-UI.

## Features

- 🎨 Modern and colorful design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 📅 Event calendar
- 🍽️ Menu with food and drinks
- 🪑 Table reservation system
- 🌈 LGBTQ+ friendly atmosphere

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bubble-pub.git
cd bubble-pub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add any necessary environment variables:
```env
REACT_APP_API_URL=your_api_url
```

## Running the Application

1. Start the development server:
```bash
npm start
# or
yarn start
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be created in the `build` directory.

## Project Structure

```
bubble-pub/
├── public/
│   ├── images/
│   │   ├── cocktails/
│   │   └── food/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Events.js
│   │   ├── Reservations.js
│   │   └── Menu.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React
- Material-UI
- Framer Motion
- React Router
- date-fns
- Styled Components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 