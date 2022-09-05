import split from '../../asset/beautysplit.jpg';

const Story=()=>{
  return(
    <>
     <div className="w-full pt-10 text-gray-700 mt-10 grid grid-cols-2 gap-4">
        <div className='mt-24'>
            <img alt="test alt" src={split}/>
        </div>
        <div className='m-10'>
            <h1 className='text-left mt-20 text-xl' style={{fontFamily: 'Monospace'}}>HERE IS EVERYTHING YOU WANT TO KNOW ABOUT US</h1>
            <h1 className='text-6xl my-10 font-bold'>Our story</h1>
            <p className=' w-3/4 text-2xl'>Sol Fitness center started out in the year 1999 with the 
                joint of family with only little equipment and too much passion. 
                through this yer we have helped many youngsters achieve their dreams 
                through martial arts, weight lifting , self defense and many others. 
                we are not just a place where u develop the body but also a place to 
                nurture youg brains and help them concentrate and innovate</p>
        </div>
      </div>
    </>
  )
}
export default Story;