import medal from '../asset/flagandmedal.jpeg';
import standing from '../asset/standingmedal.jpeg';
import gym from '../asset/gym.jpg';

const Package =()=>{
    return (
        <>
  <div className="grid grid-cols-3 gap-3">
  <div className="text-center text-2xl  " >
    <h1 className='py-10'>Aerobics</h1>
    <img className='m-auto' src={medal}/>
  </div>
  <div className="text-center text-2xl h-24">
    <h1 className='py-10'>
        Gym training
    </h1>
    <img className='m-auto' src={standing}/>
  </div>
  <div className="text-center text-2xl h-24">
    <h1 className='py-10'>
        Taek-wondo 
    </h1>
    <img className='m-auto' src={gym}/>
  </div>
  
</div>
        </>
    );
}
export default Package;