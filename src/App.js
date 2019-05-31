import React from 'react';
import kitchenLogo from './kitchenLogo.jpg';
import './App.css';
import Menu from './Components/Menu'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class App extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      route: 'menu'
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onRouteChange = (route) => {
  	this.setState({
      route: route
  	});
  }

  render() {
  	console.log(this.state.route);
  return (
    <div>
    <Navbar color="light-red" light expand="md">
          <NavbarBrand style={{cursor: 'pointer'}}>Welcome to Chef!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{cursor: 'pointer'}} onClick={() => this.onRouteChange('menu')}>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{cursor: 'pointer'}} onClick={() => this.onRouteChange('modify_order')}>Modify Your Order</NavLink>
              </NavItem>
               <NavItem>
                <NavLink style={{cursor: 'pointer'}} onClick={() => this.onRouteChange('kitchen')}>Kitchen</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    <div className='pa3'>
    <div className='navigation pa3  bg-light-red' style={{height:'100px',width:'100px'}}>
        <img src={kitchenLogo} className="pointer App-logo" alt="logo" />
    </div>
    </div>
    <Menu />
    </div>
  );
 }
}

export default App;
