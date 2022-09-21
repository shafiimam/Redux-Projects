import { useState } from 'react';
import Blogs from './Components/Blogs';
import Header from './Components/Header';
import Hero from './Components/Hero';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Hero />
        <Blogs />
      </div>
    </Provider>
  );
}

export default App;
