/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 27/06/2024 - 20:01:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
import { HiOutlineLockClosed } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai"; 
const Connexion = () => {
    return (
        <div className='bg-white flex-1 h-[100vh] '>
            <h1 className="text-[#19192C] w-[514px] sm:justify-center sm:items-center sm:text-[2.2rem] sm:ml-[-4rem] h-[60px] font-[poppins] xl:text-[3rem] xl:ml-[2rem] xl:mt-[4rem] text-[3rem] text-center ">Connexion à blue ocean</h1>
            <form className="space-y-6 mx-4 sm:justify-center md:justify-center lg:justify-center py-1 " >
              <div>
                <label htmlFor="email" className="block xl:mt-[2rem] text-[1.5rem] font-[poppins]  font-medium leading-6 text-blue">Email </label>
                <div className="mt-2 flex bg-white gap-2 rounded-[1.5rem] border-[0.1rem] border-gray hover:border-blue-ciel">
                <AiOutlineMail className=" my-6 mx-4  text-gray-black hover:cursor-pointer"/>
                  <input id="email" name="email"  type="email" placeholder="Exemple@7gmail.com" required className="block border-0 w-full h-[4rem] px-4 outline-none  py-1.5 font-[poppins]    placeholder:text-gray-400   rounded-[1.5rem] sm:text-sm sm:leading-6"/>
                </div>
              </div>
        
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block xl:mt-[2rem] text-[1.5rem] font-[poppins]  font-medium leading-6 text-blue">Password</label>
                </div>
                <div className="mt-2 flex bg-white gap-2 rounded-[1.5rem] border-[0.1rem] sm:max-w-full  border-gray hover:border-blue-ciel">
                <HiOutlineLockClosed className=" my-6 mx-4  text-gray-black hover:cursor-pointer"/>
                  <input id="password" name="password"  type="password" placeholder="*******************" required className="block border-0 w-full h-[4rem] px-4 outline-none  Py-3 sm:max-w-full   placeholder:text-gray-400   rounded-[1.5rem] sm:text-sm sm:leading-6"/>
                </div>
                
                <div className="text-[1rem] pl-[14rem] py-4 flex sm:justify-end sm:ml-[-2rem] sm:pl-[0]  md:justify-end lg:justify-end ">
                    <a href="#" className="font-semibold  text-blue-ciel hover:text-blue-violet font-[poppins]  text-[1.5rem] ml-[12rem] "><u>Mot de passe oublié?</u></a>
                  </div>
              </div>
        
              <div className="md:justify-center flex md:items-center sm:justify-center sm:items-center lg:justify-center lg:items-center">
                <button type="submit" className="flex w-[285px] xl:mt-[2rem] sm:ml-[2rem] mt-[-1rem] h-[70px] ml-[10rem] font-[poppins]  duration-500 hover:animation-ping text-center text-[1.5rem] justify-center rounded-[20px] bg-blue-violet px-3 py-5  font-semibold leading-6 text-white shadow-sm hover:bg-[ #7286D3 ] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Connexion</button>
              </div>
            </form>
            <div className="flex xl:mt-[2rem] justify-center gap-2 py-10 sm:justify-center ">
                <hr className="w-[10rem] h-[0.1rem] bg-gray-500 mt-3"/>
                <h1>ou avec</h1>
                <hr className="w-[10rem] h-[0.1rem] bg-gray-500 mt-3"/>
            </div>
            <div className="flex xl:mt-[2rem] justify-center w-full gap-[6rem] py-4 sm:justify-center md:justify-center">
                <div className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-white"> <a href="#"><img src="./src/assets/logo-google.svg" alt="logo google" className="w-[3rem] pt-2 ml-2"/></a></div>
                <div className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-white"> <a href="#"><img src="./src/assets/logo-facebook.svg" alt="logo facebook" className="w-[3rem] pt-2 ml-2"/></a></div>
                <div className="w-[4rem] h-[4rem] rounded-[100%] bg-gray-white"> <a href="#"><img src="./src/assets/logo-github.svg" alt="logo github" className="w-[3rem] pt-3 ml-2"/></a></div>  
            </div>
          </div>
    );
};

export default Connexion;