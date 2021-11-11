import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function NearMeContent() {
    return (
        <>
            <nav class="secondary-nav">

                <div class="nav-menu"><i class="fas fa-bars"></i></div>
        
                <Link to="/">
                    <div className="logo"><img src="images/logo.png" alt="../images/logo.png"></img></div>
                </Link>

                <h4 class="bubble"><i class="fas fa-map-marker-alt"></i>N10 2PD - Now</h4>

                <div className="search-bar-sharp">
                    <i class="fas fa-search"></i>
                </div>
        
            </nav>

            <div className="pad-near-me"></div>

            <section className="charities-showcase">

                <div className="charity-section">
                    <div className="bar">

                        <h1>Nearest To You</h1>

                        <div className="arrows">
                            <h1><i class="far fa-arrow-alt-circle-left"></i></h1>
                            <h1><i class="far fa-arrow-alt-circle-right"></i></h1>
                        </div>

                    </div>

                    <div className="charity-row">
                        <div className="single-charity">
                            <img src="images/shelter.jpeg" alt="" />
                            <h3>Shelter</h3>
                            <p>The Village, 258 Muswell Hill Broadway, London N10 3SH</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/children-in-need.jpeg" alt="" />
                            <h3>Children In Need</h3>
                            <p>73 St James's Ln, Muswell Hill, London N10 3QY</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/Oxfam.svg" alt="" />
                            <h3>Oxfam</h3>
                            <p>111-117 Muswell Hill Rd, Muswell Hill, London N10 3HS</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/al-research.svg" alt="" />
                            <h3>Alzheimer's Research Uk</h3>
                            <p>462-464, Muswell Hill Broadway, Muswell Hill, London N10 1BS</p>
                        </div>

                    </div>
                </div>

                <div className="charity-section">
                    <div className="bar">

                        <h1>Popular Now</h1>

                        <div className="arrows">
                            <h1><i class="far fa-arrow-alt-circle-left"></i></h1>
                            <h1><i class="far fa-arrow-alt-circle-right"></i></h1>
                        </div>

                    </div>

                    <div className="charity-row">
                        <div className="single-charity">
                            <img src="images/shelter.jpeg" alt="" />
                            <h3>Shelter</h3>
                            <p>The Village, 258 Muswell Hill Broadway, London N10 3SH</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/children-in-need.jpeg" alt="" />
                            <h3>Children In Need</h3>
                            <p>73 St James's Ln, Muswell Hill, London N10 3QY</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/Oxfam.svg" alt="" />
                            <h3>Oxfam</h3>
                            <p>111-117 Muswell Hill Rd, Muswell Hill, London N10 3HS</p>
                        </div>

                        <div className="single-charity">
                            <img src="images/al-research.svg" alt="" />
                            <h3>Alzheimer's Research Uk</h3>
                            <p>462-464, Muswell Hill Broadway, Muswell Hill, London N10 1BS</p>
                        </div>

                    </div>
                </div>
                

            </section>
        </>
        );
 }

 export default NearMeContent;