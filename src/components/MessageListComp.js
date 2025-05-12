import { useContext } from "react";
import HomePageContext from "../context/HomePageContext";
import MessageComp from "./MessageComp";


const MessageListComp = ()=>{
    const {
        messages
    } = useContext(HomePageContext)
    return (
        <div className="mt-3">
        {
            messages.length > 0?(
                messages.map((message,idx)=>(
                    <MessageComp key={`message-${idx}`} message={message}/>
                ))
            ):(
                <div className="notification">
                    <p>展示没有消息</p>
                </div>
            )
        }
        </div>
    )
}

export default MessageListComp;