import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <nav id="nav-bar">
          <div id="nav-items-left">
            Howdy world :)
            </div>

            {/* scroll snapping */}
            {/* https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type */}

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


  {/* HOME SECTION --------------------------------------- */}

          <section id="home-section">
            <div id="banner"></div>

          </section>

  {/* HOME SECTION --------------------------------------- */}

          <div id="pfp-box">
              <div id="page-banner-bg1"></div>
              <div id="page-banner-bg2"></div>
              <img id="profile-picture" src="https://cdn.drawception.com/drawings/fvtBh78Xbg.png" alt="beautiful person who works hard and does well" />
            </div>


{/* ABOUT SECTION --------------------------------------- */}
          <section className="section-box" id="about-section">
            <div id="pfp-spacer"></div>

            <h1>Howdy</h1>
            <p>how are you</p>



            </section>
{/* ABOUT SECTION --------------------------------------- */}

{/* SKILLS SECTION --------------------------------------- */}

          <section className="section-box" id="skills-section">
            {/* <div id="triangle-cutout"></div> */}

            <div className='skills-grid'>
            
            <div id="skills-col">
              </div>      
            
            <div id="skills-col">
              </div>


            </div>



          </section>


{/* SKILLS SECTION --------------------------------------- */}

{/* PORTFOLIO SECTION --------------------------------------- */}

          <section className="section-box" id="portfolio-section">
          {/* <div id="triangle-cutout"></div> */}

          </section>

{/* PORTFOLIO SECTION --------------------------------------- */}


{/* CONTACT SECTION --------------------------------------- */}

          <section className="section-box" id="contact-section">

            
          </section>

{/* CONTACT SECTION --------------------------------------- */}


      </div>


    </div>
  );
}

export default App;








