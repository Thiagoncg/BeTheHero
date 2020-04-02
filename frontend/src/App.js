import React from 'react';

import './global.css';

import Routes from './routes';

  function App() {
    return (
      <Routes />

    );
  }

  //exemplo de estado e imutabilidade do contador
//   const[counter, setCounter]  = useState(20);

//   function incrementCounter() {

//     setCounter(counter + 1);  

//   }

//   return (
//     <div>
//        <Header>Contador: {counter}</Header>
//        <button onClick={incrementCounter}>Incrementar</button>

//     </div>
  
//   );
// }

export default App;