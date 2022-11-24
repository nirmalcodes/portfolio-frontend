import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./components";
import { About, Contact, Home, PageNotFound } from "./pages";
import { Route, Routes } from "react-router-dom";

const navLinksList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function App() {
  return (
    <div className="app">
      <Layout navLinks={navLinksList}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
