import React ,{useState} from "react";
import { Link} from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { CgCloseR } from "react-icons/cg";
import "./header.css";

function Header() {
    const [menuStatus,setMenuStatus] = useState(false)
    const [cars,setCars] = useState([
      { model:"Model S", id:"section1"},
      { model:"Model 3", id:"section2"},
      { model:"Model X", id:"section3"},
      { model:"Model Y", id:"section4"},
      { model:"CYBERTRUCK", id:"section5"},
    ])

    const handleScroll = (sectionId) => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <nav className="navContainer">
      <Link to="/">
        <img className="teslaIcon" alt="" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Tesla%2C_Inc._-_Logo_%28black_script_version%29.svg" />
        </Link>
      <div className="navbarItems">
            <Link to="/" onClick={() => handleScroll('section1')}><p>Energy</p></Link>
            <Link to="/" onClick={() => handleScroll('section2')}><p>Perfomance</p></Link>
            <Link to="/" onClick={() => handleScroll('section3')}><p>Safty</p></Link>
            <Link to="/products"><p>Vehicles</p></Link>
      </div>
      
      <div className="navEndItems">
        <BsGlobe style={{ height:'30px',width:'25px',marginRight:"10px",cursor:"pointer"}} />
        <MdAccountCircle style={{ height:'30px',width:'30px',marginRight:"10px",cursor:"pointer"}} />
        <IoIosMenu onClick={() => setMenuStatus(true)} style={{ height:'30px',width:'30px',marginRight:"10px",cursor:"pointer"}} />
      </div>
      { menuStatus && (
      <div className="menudrop">
        <div style={{display:"flex",justifyContent:"flex-end"}}>
            <CgCloseR onClick={()=>setMenuStatus(false)} className="closeIcon" />
        </div>
            { cars.map((car, i)=><Link to="/products" onClick={() => handleScroll(car.id)}><li>{car.model}</li></Link>)}
      </div>)}
    </nav>
  );
}

export default Header;
