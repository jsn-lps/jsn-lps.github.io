import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <nav id="nav-bar">
          <div id="nav-items-left">
            Howdy world :)
            </div>

            <ul id="nav-items-right">
              <li><a href="#home-section" targe="_blank">Home</a></li>
              <li ><a href="#about-section">About</a></li>
              <li ><a href="#skills-section">Skills</a></li>
              <li ><a href="#portfolio-section">Portfolio</a></li>
              <li ><a href="#contact-section">Contact</a></li>

            </ul>
          </nav>
      </header>


      <div id="page-wrapper">


          <section id="home-section">
            <div id="banner"></div>

          </section>

          <div id="pfp-box">
              <div id="page-banner-bg1"></div>
              <div id="page-banner-bg2"></div>
              <img id="profile-picture" src="https://cdn.drawception.com/drawings/fvtBh78Xbg.png" alt="beautiful person who works hard and does well" />
            </div>

          <section id="about-section">
            <div id="pfp-spacer"></div>

            <h1>Howdy</h1>
            <p>how are you</p>

            <div className='about-grid'>
            
            <div id="about-col">
              </div>      
            
            <div id="about-col">
              </div>
              

            </div>

            </section>

          <section id="skills-section"></section>

          <section id="portfolio-section"></section>

          <section id="contact-section"></section>


      </div>


    </div>
  );
}

export default App;








