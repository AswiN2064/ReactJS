import React from 'react';
import './App.css';

function SocialLink({ href, icon, label }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={icon}></i> {label}
      </a>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <div className="background-image">
        <div className="details-section">
          <div className="details-content">
            <h2 className="name-box">Naga Hari Priyan M</h2>
            <hr />
            <p>
              I'm a Web Developer, Diploma Graduate, Artificial Intelligence and Data Science Student
            </p>
            <hr />
            <p>Social Media:</p>
            <ul className="social-icons">
              <SocialLink href="https://www.instagram.com/mr.smart.solver_official/" icon="fab fa-instagram" label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/naga-hari-priyan-m-373804215" icon="fab fa-linkedin" label="Linkedin" />
              {/* Add more social media links here */}
            </ul>
            <hr />
            <p>Hobbies: Reading, Painting</p>
            <hr />
            <p>
              Introduction:
              <hr />
              Enthusiastic and results-driven AI & Data Science student with a passion for leveraging cutting-edge technologies to solve real-world challenges.
              Currently pursuing a <b><i>B.Tech[Artificial Intelligence and Data Science]</i></b> at <b><i>Kumaraguru College of Technology, Coimbatore, Tamilnadu</i></b>, with a focus on acquiring expertise in AI, machine learning, and data analysis.
              Proficient in Python, R, and various data manipulation libraries, along with a strong foundation in statistical analysis and data visualization.
              Eager to contribute my skills and knowledge to innovative projects and collaborate with teams to drive data-driven insights and solutions.
              Committed to continuous learning and staying abreast of the latest advancements in the field of AI and Data Science.
            </p>
            <hr />
            <h4>Full Stack Workshop:</h4>
            <p style={{ position: "unset" }}>here is the practiced file page in which we worked out with HTML, CSS, JS.
              <a href="linkwithjs.html"><i>click here to view it</i></a>
            </p>
          </div>
        </div>
        <div className="name-box">
          <h1 style={{ fontFamily: "cursive" }}>M Naga Hari Priyan Dipl.,B.Tech'</h1>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
