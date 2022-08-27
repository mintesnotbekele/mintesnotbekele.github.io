import CarauselPage from "./carousel";
import Package from "./package";
import Trophies from "./trophies";
const InfoPage=()=>{
return (
  <>
  <h1 className="text-5xl text-center mt-24">
  Come visit us before deciding your fitness center
  </h1>
  <h1 className="text-9xl text-center">Our Services</h1>
   <CarauselPage/>
   <Package/> 
   <Trophies/>
  </>
);
}
export default InfoPage;