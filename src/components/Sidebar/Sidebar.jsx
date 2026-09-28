import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";


function Sidebar(){
    return(
        <div className="sidebar">
            <GiHamburgerMenu  id="ham"/>
            <div className="newchat">
              <FaPlus />
              <p>New Chat</p>
            </div>
            <div className="recent">
                <FaRegMessage />
                <p>who are you</p>
            </div>


        </div>
    )
}

export default Sidebar;