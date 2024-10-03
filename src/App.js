import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<>
        <Navbar/>
        <Home/>
        <Footer/>
      </>
    },
    {
      path:'/about',
      element:<>
        <Navbar/>
        <About/>
        <Footer/>
      </>
    },
    {
      path:'/services',
      element:<>
        <Navbar/>
        <Services/>
        <Footer/>
      </>
    },
    {
      path:'/experience',
      element:<>
        <Navbar/>
        <Experience/>
        <Footer/>
      </>
    },
    {
      path:'/portfolio',
      element:<>
        <Navbar/>
        <Portfolio/>
        <Footer/>
      </>
    },
    {
      path:'/contact',
      element:<>
        <Navbar/>
        <Contact/>
        <Footer/>
      </>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
