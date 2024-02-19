import React, { Component } from 'react';
import { Button, Container, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Logo from './Logo.png'
import Background from './Background.png'
import Localization from './Localization.png'
import Social from './Social.png'
export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand='md' style={{backgroundImage: `url(${Background})`}}>
                    <Container>
                        <Navbar.Brand style={{marginLeft: '-80px'}} href='/'>
                            <img
                                src={Logo}
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse style={{marginRight: '-80px'}} id='responsive-navbar-nav'>
                            <Nav className='me-auto'>
                                <Nav.Link style={{ marginLeft: '350px', fontSize: '14px', color: '#253659'}} href='/'> Главная  </Nav.Link >
                                <Nav.Link style={{ fontSize: '14px', color: '#253659'}} href='/about'> О Компании </Nav.Link>
                                <Nav.Link style={{ fontSize: '14px', color: '#253659'}} href='/contacts'> ЖК – Байтик </Nav.Link>
                                <Nav.Link style={{ fontSize: '14px', color: '#253659'}} href='/blog'> Выбрать дом </Nav.Link>
                            </Nav>
                            <Nav.Link href='/localization'>
                                    <img src={Localization} alt='Localization' style={{marginLeft: '-100px'}}/>
                                </Nav.Link>
                                <Nav.Link href='/social'>
                                    <img src={Social} alt='Social' style={{marginRight: '30px'}}/>
                                </Nav.Link>
                                <div>
                                    <Nav.Link href='tel:0550012208'>0550 01 22 08</Nav.Link>
                                    <Nav.Link href='tel:0777329546'>0777 32 95 46</Nav.Link>
                                </div>
                            <Form className='d-flex'>
                                {/* <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='me-2'
                                /> */}
                                <Button style={{border: 'none'}} variant='outline-success'></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                    </Routes>
                </Router>
            </>
        );
    }
}

