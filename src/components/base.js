
import '../App.css';
import NavBar from '../components/Header/navbar';
import Banner from '../components/banner';
import InfoPage from '../components/info';
import FooterContainer from '../components/footer/footercontainer';



function Base() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <InfoPage/>
      <FooterContainer/>
    </div>
  );
}

export default Base;
