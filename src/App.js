import './App.css';
import Todos from './pages/Todos';
import Surprise from './pages/Surprise';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos/>} />
            <Route path="/surprise" element={<Surprise/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
