import './App.css'

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

/* Pages */
import { Header } from './Hearder';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/help/NotFound';


/* Help Section */
import { Help } from './pages/Help';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';
/* Careers Section */
import { CareersLayout } from './pages/careers/CareersLayout';
import { Careers, careersLoader } from './pages/careers/Careers';

/* Router tree */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<Help />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='careers' element={<CareersLayout />}>
        <Route
          index
          element={<Careers />} 
          loader={careersLoader}
          />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
