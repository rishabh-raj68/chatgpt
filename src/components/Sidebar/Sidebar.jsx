import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";


function Sidebar(){
    const[extend,setExtend] = useState(false)
    return(
        <div className="sidebar">
            <GiHamburgerMenu  id="ham" onClick={() => {
                setExtend(prev=>!prev)
               // console.log(extend);
                
        }}/>
            <div className="newchat">
              <FaPlus />
             {extend?<p>New Chat</p>:null} 
            </div>
            <div className="recent">
                <FaRegMessage />
                <p>who are you</p>
            </div>


        </div>
    )
}

export default Sidebar;