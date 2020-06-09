import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
import './styles.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}
