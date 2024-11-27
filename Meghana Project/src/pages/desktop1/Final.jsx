import React, { Component } from 'react';
import Page1 from './Page1';
import CarShowcase from './CarShowCase';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Page1 />
        <div className="flex flex-col lg:flex-row">
          <Section2 />
          <Section2 />
        </div>

        <CarShowcase />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    );
  }
}

export default App;
