import { TextInput, Label, Select, Button } from "flowbite-react";
const RegistrationForm =()=>{
    return (
        <>
         <form>
            <div className="mt-20 mx-auto w-1/3 flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="small"
                        value="name"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                    <TextInput
                    id="small"
                    type="text"
                    sizing="sm"
                    placeholder="First Name"
                    />
                     <TextInput
                    id="small"
                    type="text"
                    sizing="sm"
                    placeholder="Fathers Name"
                    />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Subscription Type"
                    />
                  </div>
                    <Select>
                        <option>Monthly - 1000 birr/person</option>
                        <option>Yearly - 1000 birr/person</option>
                        <option>Daily - 1000 birr/person</option>
                        <option>three Month - 1000 birr/person</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="need a trainer"
                    />
                  </div>
                  <Select>
                        <option>Yes</option>
                        <option>No</option>
                       </Select>
                </div>
                <div className="md-2 block">
                <Button type="submit" color="purple">
                    Register
                </Button>
                </div>
            </div>
            </form>

        </>
    )
}
export default RegistrationForm;

export const RegistrationHeader=()=>{
   return (
    <><div className="text-center text-4xl font-sans mt-20 bg-gray-400 w-1/3 mx-auto">
        New member registration
        </div></>
   )
} 
