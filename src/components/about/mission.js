import split from '../../asset/babysplit.jpg';
import  gym from '../../asset/train.jpg';
const Mission=()=>{
    return(
        <>
         <div className="w-full pt-10 text-gray-700 mt-10 grid grid-cols-2 gap-4">
        <div className='w-3/4 m-auto'>
        <h1 className='text-6xl my-10 font-bold w-3/4'>Our Mission</h1>
            
            <p className='text-2xl'>To enhance the quality of life in the communities we serve 
                through our fitness philosophy, facilities, programs, and products 
                and to instill in the lives of people everywhere the value of health and fitness</p>
        </div>
        <div className='grid grid-cols-2 gap-2 '>
            <div ><img alt='split' src={split}/></div>
            <div><img src={gym}/></div>
        
        </div>
      </div>
        </>
    )
}
export default Mission;