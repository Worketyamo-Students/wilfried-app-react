/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 27/06/2024 - 16:21:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
// import { BrowserRouter ,Routes , Route } from 'react-router-dom';
// import './App.css';
// import Acceuil from './pages/acceuil';
// import Services from './pages/services';
import './index.css';
import Logo from './pages/logo';
import Connexion from './pages/connexion';
// import Input from './composants/input';
// import { AiOutlineMail } from "react-icons/ai";
// import Buton from './composants/buton';
function App() {
  return (
    <div className='bg-green-600 h-[100vh]  flex sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row'>
      <Logo/>
      <Connexion/>
      {/* <Buton type="buton" buton="manger"/>
      <Buton type="buton" buton="boire"/>
      <Buton type="buton" buton="dormir"/> */}
      {/* <Input placeholder="*********" htmlFor="password" label="password" icon ={ <AiOutlineMail className=" my-6 mx-4  text-gray-black hover:cursor-pointer"/>}/>
      <Input placeholder="*********" htmlFor="password" label="password" icon ={ <AiOutlineMail className=" my-6 mx-4  text-gray-black hover:cursor-pointer"/>}/> */}
    </div>
    // <BrowserRouter>
    // <Routes>
    //  <Route path ="/acceuil" element = {<Acceuil/>}/>
    //  <Route path ="/services" element = {<Services/>}/>
    //  <Route path ="error" element = {<Error/>}/>
    // </Routes>
    // </BrowserRouter>
  )
};

export default App
