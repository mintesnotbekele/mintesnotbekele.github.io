import Address from "./address";
const ContactBody=()=>{
    return(
        <>
          <div className="grid grid-cols-2 gap-10 mt-40">
            <div>
                <div className="text-6xl font-bold w-1/2 m-auto">Contact Us</div>
                <div className="w-1/2 mx-auto my-10"><p>We would love to hear from you.</p>

                <p>     Feel free to reach out using the below details. 
                     or send us your feedback directly</p></div>
            </div>
            <div>
               <div className="font-bold text-4xl ">Send us Feedback</div>
               <form className="my-40 w-1/2">
               <div className="grid grid-cols-4 gap-1"> 
                <label className="col-span-1">Email:</label>
                <input className="col-span-3" type='text' placeholder="email"/>
                </div>
                <div className="grid grid-cols-4 gap-1 my-5"> 
                <label className="col-span-1">Message:</label>
                <textarea placeholder="message Body"rows="4" className="col-span-3"></textarea>
                </div>
                <div>
                    
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type='button' value='send' name="send"/>
                </div>
               </form>
            </div>
          </div>
          <Address/>
        </>
    )
}
export default ContactBody;