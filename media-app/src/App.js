import Header from "./Header.js"
import Home from "./Home.js";
import Newpost from "./Newpost.js";
import Postpage from "./Postpage.js";
import About from "./About.js";
import Missing from "./Missing.js";
import Footer from "./Footer.js";
import { Routes, Route } from "react-router-dom";
import EditPost from "./EditPost.js";
import SideBar from "./SideBar.js";
import { DataProvider } from "./Context/DataContext.js";

function App() {


  return (
    <div className="App">
   <DataProvider>
      
    
        <Header title="PostWave" />
        
         <SideBar  />

      <Routes>
        <Route path="/" element={<Home  />} />

       <Route path="/post">
            
             <Route index element={ <Newpost/> }/>

             <Route path="viewpage/:id" element={<Postpage />} />
            
             <Route path="viewpage/edit/:id" element={<EditPost />} />
            
        </Route>

         <Route path="/about" element={<About />} />

          <Route path="*" element={<Missing />} />
          
      </Routes>

        <Footer />
    </DataProvider>  
    </div>
  );
}

export default App;


