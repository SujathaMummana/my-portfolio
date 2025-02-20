import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
    <h1 data-aos="fade-up">Hi, I'm Sujatha Mummana</h1>
    <p data-aos="fade-right">Java Developer</p>
    <p data-aos="fade-left">I'm a passionate frontend developer with experience in JavaScript, React.js, and Web development. I enjoy building interactive applications with functionality. My expertise includes modern UI/UX design, responsive web development, and performance optimization.</p>
  </section>
);

const About = () => (
  <section className="about" data-aos="zoom-in">
    <SectionHeader title="About Me" />
    <img src={profilePic} alt="Sujatha Mummana" className="profile-pic" />
    <p>I am a dedicated frontend developer with experience in JavaScript, React.js, and Web development. I love creating interactive applications with functionality.</p>
  </section>
);

const Education = () => (
  <section className="education" data-aos="fade-up">
    <SectionHeader title="Education" />
    <ul>
      <li><strong>Bachelor of Technology</strong> - Bapatla Women’s Engineering College (2022 - 2025) - 7.5 CGPA</li>
      <li><strong>Polytechnic</strong> - Welfare Institute of Science Technology and Management (2019 - 2022) - 74.8%</li>
      <li><strong>SSC</strong> - Government High School (2018 - 2019) - 8.5%</li>
    </ul>
  </section>
);

const Skills = () => (
  <section className="skills" data-aos="fade-right">
    <SectionHeader title="Technical Skills" />
    <div className="skill-bar">
      <p>Java <span>70%</span></p>
      <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
      <p>C <span>60%</span></p>
      <div className="bar"><div className="fill" style={{ width: "60%" }}></div></div>
      <p>Python <span>60%</span></p>
      <div className="bar"><div className="fill" style={{ width: "60%" }}></div></div>
      <p>HTML <span>50%</span></p>
      <div className="bar"><div className="fill" style={{ width: "50%" }}></div></div>
      <p>CSS <span>50%</span></p>
      <div className="bar"><div className="fill" style={{ width: "50%" }}></div></div>
      <p>DSA <span>60%</span></p>
      <div className="bar"><div className="fill" style={{ width: "60%" }}></div></div>
      <p>React.js <span>50%</span></p>
      <div className="bar"><div className="fill" style={{ width: "50%" }}></div></div>
    </div>
  </section>
);

const Projects = () => (
  <section className="projects" data-aos="fade-left">
    <SectionHeader title="Projects" />
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
