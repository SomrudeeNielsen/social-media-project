import { BrowserRouter, Routes, Route} from "react-router-dom";


import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import NewAccount from "./components/NewAccount";
import PhotoGallery from "./components/PhotoGallery";




function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/newaccount" exact element={<NewAccount />} />
          <Route path="/userpage" exact element={<UserPage />} />
          <Route path="Photogallery" exact element={<PhotoGallery />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;