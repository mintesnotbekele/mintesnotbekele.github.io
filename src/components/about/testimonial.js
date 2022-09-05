import avatar from '../../asset/avatar.jpg';
const Testimonial=()=>{
    return(
        <>
         <div className="text-6xl text-center font-bold my-10">Trainee Testimonials</div>
        <div className="w-full pt-10 text-gray-700 mt-10 grid grid-cols-3 gap-4">
           <div className="mx-24">
             <div className="font-sans text-2xl text-justify">
                "Sol Fitness center has given me everything i need to know
                on how i can defend my self my nutrition, it has a big input 
                on the good personality i had now. it is the best and 
                affordable place with good staff members". 
             </div>
             <div className="grid grid-cols-6 gap-2 mt-5">
               <div className='col-span-2'>
                <img className='rounded-full h-50' src={avatar} alt="testimony "/>
               </div>
               <div className='col-span-4 mt-5 '>Mintesnot Bekele</div>
             </div>
           </div>
           <div className="mx-24">
           <div className="font-sans text-2xl text-justify">
                "Sol Fitness center has given me everything i need to know
                on how i can defend my self my nutrition, it has a big input 
                on the good personality i had now. it is the best and 
                affordable place with good staff members". 
             </div>
             <div className="grid grid-cols-6 gap-2 mt-5">
               <div className='col-span-2'>
                <img className='rounded-full' src={avatar} alt="testimony"/>
               </div>
               <div className='col-span-4 mt-5 '>Kalkidan Behailu</div>
             </div>
           </div>
           <div className="mx-24">
           <div className="font-sans text-2xl text-justify">
                "Sol Fitness center has given me everything i need to know
                on how i can defend my self my nutrition, it has a big input 
                on the good personality i had now. it is the best and 
                affordable place with good staff members". 
             </div>
             <div className="grid grid-cols-6 gap-2 mt-5">
               <div className='col-span-2'>
                <img className='rounded-full' src={avatar} alt="testimony"/>
               </div>
               <div className='col-span-2 mt-5 '>Mintesnot Bekele</div>
             </div>
           </div>
        </div>
        
        </>
    )
}
export default Testimonial;