import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Countdown } from '../Countdown/Countdown';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <section className='background'>
        <div className='container'>
          <Header />
          <Countdown />
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
