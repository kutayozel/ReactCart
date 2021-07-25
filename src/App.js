import React from 'react';
import {useGlobalContext} from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
  const {loading} = useGlobalContext()
  
  return(
    <main>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
 
  


export default App;
