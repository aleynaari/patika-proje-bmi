import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Sonuclar from "./components/Sonuclar";
import Bminedir from "./components/Bminedir";
import Form from "./components/Form";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
 <Routes>
     <Route path="/" element={<App />}>
       <Route path="/bminedir" element={<Bminedir />} />
       <Route path="/sonuclar" element={<Sonuclar />} />
       
           
        
        <Route
         path="*"
         element={
           <main style={{ padding: "1rem" }}>
             <p>There's nothing here!</p>
           </main>
          }
        />
     </Route>
  </Routes>
</BrowserRouter>,
  rootElement
);
