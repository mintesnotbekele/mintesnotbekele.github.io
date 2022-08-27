import serviceBanner from '../../asset/service.jpg'
const ServiceBody=()=>{
    return (
        <>
        <div>
            <div>
               <img src={serviceBanner} alt="Service Banner"/>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-20">
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Teakwon-Do
                 </div>
                 <hr/>
                 <div>
                 we have a weekly sessions with best masters in the country for taekwondo
                 </div>
              </div>
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Gym-Training
                 </div>
                 <hr/>
                 <div>
                 we have a weekly sessions with best masters in the country for taekwondo
                 </div>
              </div>
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Gym-Training
                 </div>
                 <hr/>
                 <div>
                 we have a weekly sessions with best masters in the country for taekwondo
                 </div>
              </div>
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Personal Trainers
                 </div>
                 <hr/>
                 <div>
                 we give personalized trainings for customers including nutrition plans and professional courses
                 </div>
              </div>
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Sport Full Gear
                 </div>
                 <hr/>
                 <div>
                 we have mini shop for sports wearing and clothes ,with some additional helper tools 
                 </div>
              </div>
              <div className='w-1/2 mx-auto my-10'>
                 <div className='text-5xl font-bold my-5'>
                   Sanitation
                 </div>
                 <hr/>
                 <div>
                 Clean And Friendly Shower And Locker Rooms
                  for male and female with a hot shower option
                 </div>
              </div>
            </div>
        </div>
        </>
    )
}
export default ServiceBody;