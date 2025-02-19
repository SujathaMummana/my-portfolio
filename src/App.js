import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import profilePic from "./profile.jpg";

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
    <h1 data-aos="fade-up">Hi I'm Sujatha Mummana</h1>
    <p data-aos="fade-right">Java Developer</p>
    <p data-aos="fade-left">I'm Sujatha Mummana, a passionate Java developer with a strong background in AI and web development. I love building interactive applications and continuously learning new technologies.</p>
  </section>
);

const About = () => (
  <section className="about" data-aos="zoom-in">
    <h2>About Me</h2>
    <img src={profilePic} alt="Sujatha Mummana" className="profile-pic" />
    <p>I'm Sujatha Mummana, a Java developer with experience in AI projects. I have a Bachelor’s of technology in Electronics and Communication Engineering from Bapatla Women’s Engineering College. My expertise lies in web development, cloud computing, and AI-driven applications.</p>
  </section>
);

const Education = () => (
  <section className="education" data-aos="fade-up">
    <h2>Education</h2>
    <ul>
      <li><strong>Bachelor of Technology</strong> - Bapatla Women’s Engineering College (2022 - 2025) - 7.5 CGPA</li>
      <li><strong>Polytechnic</strong> -            Welfare Institute of Science Technology and Management (2019 - 2022) - 74.8%</li>
      <li><strong>SSC</strong> -                    Government High School(2018 - 2019) - 8.5%</li>
    </ul>
  </section>
);

const Skills = () => (
  <section className="skills" data-aos="fade-right">
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Languages:</strong>       HTML, CSS, JavaScript, C, C++, SQL, Java, Python</li>
      <li><strong>Web Development:</strong> AWS, MongoDB, Docker, Kubernetes, Azure, SQL</li>
      <li><strong>Technologies:</strong>    Git, GitHub, VS Code, Visual Studio, Linux, Windows</li>
    </ul>
  </section>
);

const Projects = () => (
  <section className="projects" data-aos="fade-left">
    <h2>Projects</h2>
    <ul>
      <li>Chat with PDF's</li>
      <li>Chat with Website</li>
      <li>Google Sheets Integration</li>
      <li>Cinema Connect API</li>
    </ul>
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
    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setResponseMessage(response.ok ? "Message sent successfully!" : "Error sending message.");
  };

  return (
    <section className="contact" data-aos="fade-right">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>{responseMessage}</p>
    </section>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Router>
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
