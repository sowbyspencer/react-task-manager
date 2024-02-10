import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


const App = () => {
  return (
    <div className="App" style={style.body}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const style = {
  margin: '0',
  padding: '0',
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
}

export default App;