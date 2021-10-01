import React from 'react';

import { Header } from '../Header';
import { Footer } from '../Footer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <section className='background'>
        <div className='container'>
          <Header />
          <Footer />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
