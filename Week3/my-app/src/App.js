import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import GitCRUD from './componenet/GitCRUD';
import CreateUser from './componenet/PostCRUD';
import Header from './componenet/Header'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Header />
    </ChakraProvider>
    {/* <GitCRUD/> */}
    <CreateUser/>
    </div>
  );
}

export default App;
