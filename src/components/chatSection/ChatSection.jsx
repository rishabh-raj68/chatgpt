import "./ChatSection.css"
import Darkmode from "../Darkmode/Darkmode";

function ChatSection(){
    return(
        <div className="chatsection">
             <Darkmode/>  
             <div className="topsection"></div>
             <div className="heading">
                <span>HELLO RISHABH,</span>
                <span>I'm Your Own Assistant</span>
                <span>What Can I help YOU?</span>

             </div>
             <div className="bottomsection"></div>
        </div>
    )
}
export default ChatSection;