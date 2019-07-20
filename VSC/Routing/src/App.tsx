import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Route } from 'react-router';
import FirstPage from './components/firstComponent/firstComponent';
import SecondPage from './components/secondComponent/secondComponent';

class App extends React.Component {
  public render() {
    return (
      <div>
        <div>
          <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link  href="/page1">page1</Nav.Link>
              <Nav.Link href="/page2">page2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </div> 
       
        <div>
          <Route path="/page1" component={FirstPage} />
          <Route path="/page2" component={SecondPage}   />
        </div>
        </div>
    );
  }
}

export default App;
