import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import customTheme from './Theme';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import ProjectsCard from './components/ProjectCard';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsCard />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
