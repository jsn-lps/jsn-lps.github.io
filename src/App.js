import './App.css';

function App() {
  return (
    <div className="App">
      <div id="page-wrapper">
        <nav id="nav-bar">
          <div id="nav-items-left">
            Howdy world :)
            </div>

            <ul id="nav-items-right">
              <li><a href="#page-wrapper" targe="_blank">Home</a></li>
              <li ><a href="#about-section">About</a></li>
              <li ><a href="#skills-section">Skills</a></li>
              <li ><a href="#portfolio-section">Portfolio</a></li>
              <li ><a href="#contact-section">Contact</a></li>

            </ul>
          </nav>

        <section id="page-banner">
          <div id="page-banner-bg1"></div>
          <div id="page-banner-bg2"></div>
          <img id="profile-picture" src="https://cdn.drawception.com/drawings/fvtBh78Xbg.png" alt="beautiful person who works hard and does well" />
        </section>

        <section id="home-section"></section>

        <section id="about-section"></section>

        <section id="skills-section"></section>

        <section id="portfolio-section"></section>

        <section id="contact-section"></section>
      </div>
    </div>
  );
}

export default App;








