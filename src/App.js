import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './components/DishdetailComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES
      };
    }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <DishDetail dishes={this.state.dishes} />
      </div>
    );
  }
}



// function App() {
//   return (
//     <div>
//     <Navbar dark color="primary">
//       <div className="container">
//         <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//       </div>
//     </Navbar>
//     <Menu />
//   </div>
//   );
// }

export default App;
