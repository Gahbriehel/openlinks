# OpenLinks WebApp

## Project Overview
OpenLinks is a React-based e-commerce platform that connects users with high-quality laptops, accessories, and technology solutions. The project emphasizes efficiency, modern design, and seamless user experience, leveraging cutting-edge technologies and best practices.

This project was initially created using Create React App (CRA) but has been successfully migrated to Vite for faster builds and a better development experience.

## Features
- **Product Management:** Browse a diverse catalog of laptops with detailed descriptions and pricing.
- **Search Functionality:** Quickly find products using the search bar.
- **Responsive Design:** Fully optimized for desktop, tablet, but not for mobile devices.
- **Dynamic FAQ Section:** Clear and helpful answers for common queries.
- **Test Checkout:** No payment processing has been implemented, only a test checkout feature.

## Technologies Used
### Frontend
- [React](https://reactjs.org/) for building the user interface.
- [React Router](https://reactrouter.com/) for navigation.
- [React Icons](https://react-icons.github.io/react-icons/) for consistent iconography.

### Development Tools
- [Vite](https://vitejs.dev/) for fast builds and hot module replacement.
- [JSON Server](https://github.com/typicode/json-server) for simulating APIs during development. - For testing before backend APIs were ready
- [CSS Modules](https://github.com/css-modules/css-modules) for styling components.
- [OpenLinks Backend] (https://github.com/donumeh/open_link-backend) - All APIs are hosted here

## Deployment
- This project has been temporarily deployed on [Vercel] (https://openlinks-git-main-gahbriehels-projects.vercel.app/)

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or higher, recommended Node 18)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/openlinks-webapp.git
   cd openlinks-webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the development server using Vite:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Simulating an API with JSON Server
1. Install JSON Server globally if not already installed:
   ```bash
   npm install -g json-server
   ```
2. Start the JSON Server:
   ```bash
   json-server --watch db.json --port 3001
   ```
3. Update API calls in the application to point to `http://localhost:3001`.

### Building for Production
To create an optimized build for production:
```bash
npm run build
```
The build artifacts will be output to the `dist` folder.

### Deploying the App
You can deploy the app using services like [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or [AWS Amplify](https://aws.amazon.com/amplify/). Simply upload the contents of the `dist` folder.

## Folder Structure
```
openlinks-webapp/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── assets/           # Images and icons
│   ├── styles/           # Global and component-specific CSS
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Vite entry point
├── db.json               # Mock database for JSON Server
├── package.json          # Project metadata and dependencies
└── vite.config.js        # Vite configuration
```

## Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build locally.

## API Endpoints (JSON Server)
Here are some sample endpoints provided by the JSON Server:
- **GET** `/laptops`: Fetch all laptops.
- **GET** `/laptops/:id`: Fetch a specific laptop by ID.
- **POST** `/laptops`: Add a new laptop.
- **PUT** `/laptops/:id`: Update an existing laptop.
- **DELETE** `/laptops/:id`: Delete a laptop by ID.

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments
- The Vite team for their exceptional tooling.
- JSON Server for making API simulation effortless.
- React Icons for their extensive library of icons.

---
Feel free to reach out with any questions or feedback. Happy coding!

