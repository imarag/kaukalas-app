import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery'
import Services from './pages/Services'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/services",
        element: <Services />
      },
    ],
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;