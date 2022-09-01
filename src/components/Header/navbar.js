import logo from '../../asset/mylogo.webp';
import { Link } from 'react-router-dom'
import {Navbar} from 'flowbite-react';
const NavBar =()=>{
 
    return (
      <>
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
  <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SolGym</span>
          </Link>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      <Link to='/'>Home</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to='/about' >Our Story</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
     <Link to='/service'> Our Services</Link>
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      <Link to ='/service' >Contact us</Link>
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
      </>
    )
}

export default NavBar;