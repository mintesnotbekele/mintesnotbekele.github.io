import addressimage from '../../asset/address.jpg'
const Address=()=>{
   return(
    <>
    <div className="grid grid-cols-2 gap-4">
        <div className='w-1/2 m-auto'>
         <img src={addressimage} alt="contact"/>
        </div>
        <div className='w-1/2 m-auto'>
        <div>Address: France embassy around Omedla st</div>

        <div>hours: Mon-sun 5:00AM – 9:00PM</div>
         <div>phone: 123-456-7890</div>
         <div>Email: info@solfitnesscenter.com</div>
        </div>
    </div>
    </>
   )
}
export default Address;