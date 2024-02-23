import React, { Component } from 'react';
import Logo from '/Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm/app_tolv/src/images/tolv.png';
import { Nav, Navbar, FormControl, Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//import Home from './Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Home.jsx';
//import Activities from './Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Activities.js';
//import  FoodBeverage from './Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Food & beverage.js';
//import Hotel from './Pages/Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Hotel.js/Hotel';
//import CorporateEvents from './Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Corporate events.js';
//import BookingAndContact from './Users/tetyana/Documents/Date/react/Projects/Tolv-Stockholm1/app_tolv/src/Pages/Booking and Contact.js';


//const Header = () => {
//return (
// <div>
//<a class="site-branding" href="https://tolvstockholm.se/en/" rel="home"><h1 class="site-title sprite">Tolv Stockholm</h1><h2 class="site-description">12.000 m2 mat och nöjen på nya sätt.</h2> </a>
//<a href="https://tolvstockholm.se/en/activities/">Activities</a>
//<a href="https://tolvstockholm.se/en/food-drink/">Food &amp; beverage</a>
//<a href="https://tolvstockholm.se/en/at-tolv/bohotel/">Hotel</a>
//<a href="https://tolvstockholm.se/en/for-foretag-2/">Corporate events</a>
//<a href="https://tolvstockholm.se/en/booking-and-contact/">Booking and Contact</a>
//<a target="_blank" href="https://www.facebook.com/tolvsthlm"><i class="_mi fa fa-facebook-square" aria-hidden="true"></i><span class="visuallyhidden">Facebook</span></a>
//<a target="_blank" href="https://www.instagram.com/tolvstockholm/"><i class="_mi fa fa-instagram" aria-hidden="true"></i><span class="visuallyhidden">Instagram</span></a>
//<Search/>
//<Language/>
//</div>
//);
//}

export default class header extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top'collapseOnSelect extend='md' bg='dark' variant='dark' >
          <Container>
            <Navbar.Brand href='https://tolvstockholm.se/en/'>
              { 
              <img className="d-inline-block align-top"
                src={Logo}
                height='40'
                width='70'   
                alt='Logo'
    /> }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' />
            <Nav className='mr-auto'>
              <Nav.Link href='https://tolvstockholm.se/en/activities/' >Activities</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/food-drink/' >Food &amp; beverage</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/at-tolv/bohotel/' >Hotel</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/for-foretag-2/' >Corporate events</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/booking-and-contact/' >Booking and Contact</Nav.Link>
              <Nav.Link target="_blank" href="https://www.facebook.com/tolvsthlm">
                <i class="_mi fa fa-facebook-square" aria-hidden="true"></i>
                <span class="visuallyhidden">Facebook</span >
              </Nav.Link>
              <Nav.Link target="_blank" href="https://www.instagram.com/tolvstockholm/">
                <i class="_mi fa fa-instagram" aria-hidden="true"></i>
                <span class="visuallyhidden">Instagram</span>
              </Nav.Link>
            </Nav>
            <Form inline >
              <Button variant='outline-info'> Search </Button>
            </Form>
            <Button variant='outline-info'> Language </Button>
          </Container>
        </Navbar>

        {/*<Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/activities' element={<Activities/>} />
            <Route path='/food & beverage' element={<FoodBeverage/>} />
            <Route path='/hotel' element={<Hotel/>} />
            <Route path='/corporate events' element={<CorporateEvents/>} />
            <Route path='/booking and contact' element={<BookingAndContact/>} />

          </Routes>
        </Router>*/ }
      </>
    )
  }
}
