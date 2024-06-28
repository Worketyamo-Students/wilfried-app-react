/**
import Buton from './buton';
import Buton from './buton';
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 28/06/2024 - 18:43:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
const Buton = (props:any) => {
    return (
        <div className="w-[30rem] h-[4rem] justify-center items-center bg-blue-ciel text-gray-black">
            <button type={props.Buton}>{props.buton}</button>
        </div>
    );
};

export default Buton;