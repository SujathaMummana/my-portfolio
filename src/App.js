import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import profilePic from "./profile.jpg";

const SectionHeader = ({ title }) => <h2 className="section-header">{title}</h2>;

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/education">Education</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);
const Home = () => (
  <section className="home">
    <h1 data-aos="fade-up">
      <span className="animated-text">Hi, I'm</span> 
      <span className="color-changing-name"> Sujatha Mummana</span>
    </h1>
    <p data-aos="fade-right">Java Developer</p>
    <p data-aos="fade-left">
   I am a passionate frontend developer with experience in JavaScript, React.js, and web development. I enjoy building interactive and user-friendly websites, combining creativity with functionality. My expertise includes modern UI/UX design, responsive web development, and performance optimization.</p>
  </section>
);




const About = () => (
  <section className="about" data-aos="zoom-in">
    <SectionHeader title="About Me" />
    <img src={profilePic} alt="Sujatha Mummana" className="profile-pic" />
    <p>I am a passionate frontend developer with experience in JavaScript, React.js, and web development. I enjoy building interactive and user-friendly websites, combining creativity with functionality. My expertise includes modern UI/UX design, responsive web development, and performance optimization.</p>
  </section>
);

const Education = () => (
    <section className="education" data-aos="fade-up">
      <SectionHeader title="Education" />
      <div className="education-container">
        <div className="education-card">
          <h3>Bachelor of Technology</h3>
          <p><strong>College:</strong> Bapatla Women’s Engineering College</p>
          <p><strong>Year:</strong> 2022 - 2025</p>
          <p><strong>CGPA:</strong> 7.5</p>
        </div>
        <div className="education-card">
          <h3>Polytechnic</h3>
          <p><strong>College:</strong> Welfare Institute of Science Technology and Management</p>
          <p><strong>Year:</strong> 2019 - 2022</p>
          <p><strong>Percentage:</strong> 74.8%</p>
        </div>
        <div className="education-card">
          <h3>SSC</h3>
          <p><strong>School:</strong> Government High School</p>
          <p><strong>Year:</strong> 2018 - 2019</p>
          <p><strong>Percentage:</strong> 8.5%</p>
        </div>
      </div>
    </section>
  
);

const skillsData = [
  { name: "Java", level: 70 },
  { name: "C", level: 60 },
  { name: "Python", level: 60 },
  { name: "React.js", level: 50 },
  { name: "HTML", level: 50 },
  { name: "CSS", level: 50 },
  { name: "DSA", level: 60 }
];

const Skills = () => (
  <section className="skills" data-aos="fade-right">
    <SectionHeader title="Technical Skills" />
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={skillsData} layout="vertical" margin={{ top: 10, right: 30, left: 50, bottom: 10 }}>
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis dataKey="name" type="category" width={80} />
        <Tooltip />
        <Bar dataKey="level" fill="#8884d8" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  </section>
);
const Projects = () => (
  <section className="projects" data-aos="fade-left">
    <SectionHeader title="Projects" />
    <div className="projects-container">
      <div className="project-card">
        <h3 className="pdf-chat">Chat with PDFs</h3>
        <p>An AI-powered tool that allows users to interact with PDFs using natural language queries.</p>
      </div>
      <div className="project-card">
        <h3 className="web-chat">Chat with Website</h3>
        <p>A web scraping chatbot that fetches information from websites and provides real-time responses.</p>
      </div>
      <div className="project-card">
        <h3 className="sheets-integration">Google Sheets Integration</h3>
        <p>Automates data management in Google Sheets using JavaScript, making workflow more efficient.</p>
      </div>
      <div className="project-card">
        <h3 className="cinema-api">Cinema Connect API</h3>
        <p>A RESTful API that provides movie-related information, reviews, and real-time cinema updates.</p>
      </div>
    </div>
  </section>
);


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xgvorgwa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setResponseMessage(result.ok ? "Message sent successfully!" : "Error sending message.");
    } catch (error) {
      setResponseMessage("Error sending message.");
    }
  };

  return (
    <section className="contact" data-aos="fade-right">
      <SectionHeader title="Contact Me" />
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>{responseMessage}</p>
      <p className="contact-details">
        📧 sujathamummana212@gmail.com | 📞 9391833286 | 🔗 <a href="https://github.com/SujathaMummana" target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>
    </section>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <button className="toggle-btn" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;