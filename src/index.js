import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Credits from './Credits';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    element: <Viewport />,
    children: [
      { path: "/",        element: <Home />    },
      { path: "/Credits", element: <Credits /> },
      { path: "/Contact", element: <Contact /> }
    ]

  }
])
function Viewport() {
  return (
    <div className="App">
    <header>
      <NavLink to="/">Maxine Sophia Wolff</NavLink>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Credits">Credits</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>Copyright 2024 Maxine Sofia Wolff</p>
      <p>Font is         <a
        className="App-link"
        href="https://velvetyne.fr/fonts/karrik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Karrik
      </a> by         <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jean-Baptiste Morizot
      </a> and <a
        className="App-link"
        href="https://velvetyne.fr/authors/jean-baptiste-morizot/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lucas Le Bihan
      </a>, from <a
        className="App-link"
        href="https://velvetyne.fr/authors/lucas-le-bihan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Velvetyne Type Foundry
      </a>.</p>
    </footer>
  </div>
  )
}

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
