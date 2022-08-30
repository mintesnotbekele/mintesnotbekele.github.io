import NavBar from "../Header/navbar";
import { Label, TextInput } from "flowbite-react";
import RegistrationForm from "./registrationform";
import {RegistrationHeader} from './registrationform';
const NewMembers=()=>{
      return(
        <>
        <div>
        <NavBar/>
        <RegistrationHeader/>
        <RegistrationForm/>
        </div>
        </>
      )
}
export default NewMembers;