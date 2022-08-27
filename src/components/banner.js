
import banner from '../asset/banner.jpg'

const Banner =()=>{
    return (
      <>
    <div style={{backgroundImage: `url("${banner}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'  }} className="w-full">
    <p className='text-9xl text-left text-gray-50 w-1/2 mt-12 pt-12'>Push harder than yesterday if you want a different tomorrow.</p>  
    </div>
    </>
    )
}

export default Banner;