import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from '@/pages/Home';
import Latest from '@/pages/Latest';
import Men from '@/pages/Men';
import Women from '@/pages/Women';
import Contact from '@/pages/Contact';
import Child from '@/pages/Child';
import NotFound from '@/pages/NotFound';
import { StrictMode } from 'react';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/child" element={<Child />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>

  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* <App />, */}
    </RouterProvider>
  </StrictMode>,
)


// Referce Website 

// https://www.redwolf.in/?srsltid=AfmBOorI3JK9_ufWg6NfbHump6qMXbKbqA1MHqVJHWj8JUkIR8fmXBCj