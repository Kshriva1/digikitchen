import React from 'react';
import kitchenLogo from './kitchenLogo.jpg';
import './App.css';
import Menu from './Components/Menu';
import ModifyOrder from './Components/ModifyOrder';
import Kitchen from './Components/Kitchen';
import Register from './Components/Register';
import SignIn from './Components/SignIn';
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
      route: 'register',
      isSignedIn: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onRouteChange = (route) => {
  	if(route === "signout") {
      this.setState({
        isSignedIn: false,
        route: 'register'
      })
    } else if(route === "home") {
      this.setState({
        isSignedIn: true,
        route: 'menu'
      })
    } else {
      this.setState({route: route})
    }
  }


  render() {
  return (
    <div>
      {this.state.isSignedIn === true ?
        <div>
    <Navbar color="light-red" light expand="md">
          <NavbarBrand style={{cursor: 'pointer'}}>Welcome to Chef!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
               <NavItem>
                <NavLink style={{cursor: 'pointer',paddingRight:'15px',textDecoration:'underline'}} onClick={() => this.onRouteChange('signout')}>Sign Out</NavLink>
              </NavItem>
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
    {this.state.route==='menu' ?
    <div>
    <div className='selectMenu'> 
    SELECT YOUR MENU
    </div>
    <Menu />
    </div> :
    (this.state.route==='modify_order' ?
    <div>
    <div className='selectMenu'> 
    MODIFY YOUR ORDER
    </div>
    <ModifyOrder />
    </div> : <div>
    <div className='selectMenu'> 
    KITCHEN AREA
    </div>
    <Kitchen />  
    </div>)}
    </div>
     : 
     <div>
     <Navbar color="light-red" light expand="md">
          <NavbarBrand style={{cursor: 'pointer'}}>Welcome to Chef!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
               <NavItem>
                <NavLink style={{cursor: 'pointer',paddingRight:'15px',textDecoration:'underline'}} onClick={() => this.onRouteChange('signin')}>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{cursor: 'pointer',paddingRight:'15px',textDecoration:'underline'}} onClick={() => this.onRouteChange('register')}>Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    <div className='pa3'>
    <div className='navigation pa3  bg-light-red' style={{height:'100px',width:'100px'}}>
        <img src={kitchenLogo} className="pointer App-logo" alt="logo" />
    </div>
    </div>
     {this.state.route === 'register' ?
      <div>Register</div> : <div>SignIn</div>
     }
     </div>
      }
    </div>
  );
 }
}

export default App;
