import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/animate.css';
import './css/flexslider.css';
import './css/magnific-popup.css';
import './css/style.css';
import {Navbar, Nav, NavDropdown, Card, Carousel} from 'react-bootstrap';
//import {MyPDF} from './martin's_Resume.pdf';


function App() {
  return (
    <div className="App">
   

  <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">

  <Navbar fixed="top" class="justify-content-center" collapseOnSelect expand="lg"  bg="light">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown.Item href="#section-home">Home</NavDropdown.Item>
        <NavDropdown.Item href="#section-portfolio">Portfolio</NavDropdown.Item>
        <NavDropdown.Item href="#section-cv">CV</NavDropdown.Item>
        <NavDropdown.Item href="#section-about">About</NavDropdown.Item>
        <NavDropdown.Item href="#section-contact">Contact</NavDropdown.Item>
    
    </Nav>
  </Navbar.Collapse>
</Navbar>


<section class="site-hero" style={{backgroundImage: 'url(' + require('./images/image_1.jpg') + ')'}} id="section-home" data-stellar-background-ratio="0.5">
  <div class="container">
    <div class="row intro-text align-items-center justify-content-center">
      <div class="col-md-10 text-center pt-5">

        <h1 class="site-heading site-animate">I'm <strong class="d-block">Tumwine Martin</strong></h1>
        <strong class="d-block text-white text-uppercase letter-spacing">Welcome to my domain</strong>
        <strong class="d-block text-white text-uppercase letter-spacing"> "Am a Full Stack Developer"</strong>

      </div>
    </div>
  </div>
</section>

<section class="site-section" id="section-portfolio">
  <div class="container">
    <div class="row justify-content-center">
     <h2 className="App-headings"> Technologies </h2>
    </div>
 

  <div class="filters">
				<ul>
					<li>All</li>
					<li>Frontend</li>
					<li>Backend Scripting</li>
					<li>DataBases</li>
					<li>FrameWorks</li>
					<li>CMS</li>
					<li>SmartPhone Apps</li>
				</ul>
			</div>

      <div class="filters-content">
				<div class="row grid">

        <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/java.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">Frontend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/javascript.jpg')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 5 years experience
    </Card.Text>
    <Button variant="primary">Frontend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/html5.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">Frontend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/android-studio-logo.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">frontend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/css.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">frontend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ width: '18rem', height:180 }} src={require('./images/nodejs.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">backend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/php.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Intermediate Level</Card.Title>
    <Card.Text>
      Over 2 years experience
    </Card.Text>
    <Button variant="primary">backend</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ height:170 }} src={require('./images/mongodb.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 5 years experience
    </Card.Text>
    <Button variant="primary">databases</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ height:170 }} src={require('./images/mysql.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 5 years experience
    </Card.Text>
    <Button variant="primary">databases</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>
            
            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ height:170 }} src={require('./images/angular.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 5 years experience
    </Card.Text>
    <Button variant="primary">frameworks</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ height:170 }} src={require('./images/react.jpg')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Intermediate Level</Card.Title>
    <Card.Text>
      Over 1 years experience
    </Card.Text>
    <Button variant="primary">frameworks</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" style={{ height:170 }} src={require('./images/ionic.jpeg')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Intermediate Level</Card.Title>
    <Card.Text>
      Over 3 years experience
    </Card.Text>
    <Button variant="primary">frameworks</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

<div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/wordpress.png')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Expert Level</Card.Title>
    <Card.Text>
      Over 6 years experience
    </Card.Text>
    <Button variant="primary">CMS</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

            <div  class="single-portfolio col-sm-4">
							<div class="relative">
							<Card style={{ width: '18rem', height:'23rem' }}>
  <Card.Img variant="top" src={require('./images/drupal.jpg')} />
  <Card.Body className="App-card-coloring">
    <Card.Title>Intermediate Level</Card.Title>
    <Card.Text>
      Over 1 years experience
    </Card.Text>
    <Button variant="primary">CMS</Button>
  </Card.Body>
</Card>                              
							</div>                                       
						</div>

        
     
 
      
				

          </div>
          </div>


          </div>
</section>
  

</div>

<section class="site-section" id="section-cv">
  <div class="container">
    <div class="row justify-content-center">
     <h2 className="App-headings"> CV </h2>
    </div>


  <a href="./martinsResume.pdf" download> <button class="btn btn-danger"> Download CV </button> </a>


</div>
  </section>


  <section class="site-section" id="section-contact">

  <div class="container">
    <div class="row justify-content-center">
     <h2 className="App-headings"> Contact me </h2>
    </div>


    <p> martintumwine@gmail.com </p>
<p> +256-753202248 </p>
<p> +256-788721247 </p>

</div>


    </section>
    </div>


  );
}

export default App;
