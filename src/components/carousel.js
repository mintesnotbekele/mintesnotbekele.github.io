import first from '../asset/first.jpg';
import { Carousel } from 'flowbite-react';

const CarauselPage =()=>{
  return (
    <>
 
<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 m-10">
  <Carousel slideInterval={5000}>
    <img
      src={first}
      alt="..."
    />
    <img
      src={first}
      alt="..."
    />
    <img
     src={first}
      alt="..."
    />
    <img
      src={first}
      alt="..."
    />
    <img
      src={first}
      alt="..."
    />
  </Carousel>
</div>         </>
  )
}
export default CarauselPage;