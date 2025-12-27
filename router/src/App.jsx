import './App.css'

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

/* Pages */
import { Home } from './pages/Home';
import { About } from './pages/About';

/* Help Section */
import { Help } from './pages/Help';
import { Faq } from './pages/help/Faq';
import { Contact } from './pages/help/Contact';

import { Header } from './Hearder';

/* Router tree */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='help' element={<Help />}>
          <Route path='faq' element={<Faq />}/>
          <Route path='contact' element={<Contact />}/>
      </Route>
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
