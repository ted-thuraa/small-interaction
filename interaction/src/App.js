import React from 'react';
import Banner from './components/banner';
import Cases from './components/cases';
import Header from './components/header';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
