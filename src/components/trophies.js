import trophie from '../asset/trophie.jpg';
const Trophies=()=>{
  return(
    <>
    <div className="text-center text-6xl font-bold my-10">Lisence and Recognitions</div>
    <div className="grid grid-cols-3 gap-2">
         <div className="text-center">
           <img alt="trophie image" src={trophie}/>
         </div>
         <div>
         <img alt="trophie image" src={trophie}/>
         </div>
         <div>
         <img alt="trophie image" src={trophie}/>
         </div>
    </div>
    </>
  )
} 
export default Trophies;