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
        
                <div class="flex w-full">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </span>
                <TextInput type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="091580097--"/>
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
    <><div className="text-center rounded-lg py-2 text-4xl font-sans mt-20 bg-gray-400 w-1/3 mx-auto">
        New member registration
        </div></>
   )
} 
