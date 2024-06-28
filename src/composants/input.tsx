/**
import { Icon } from 'ionicons/dist/types/components/icon/icon';
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 28/06/2024 - 17:58:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/06/2024
    * - Author          : Hp
    * - Modification    : 
**/
const Input = (props:any) => {
    return (
        <div>
           <div><label htmlFor={props.htmlFor}> {props.label} </label></div> 
           <div className="flex rounded w-[50rem] h-[3rem] bg-blue-ciel">
            {props.icon}
            <input type={props.htmlFor} placeholder={props.placeholder} />
           </div>
        </div>
        
    );
};

export default Input;