import { useContext } from "react";
import HomePageContext from "../context/HomePageContext";


const UserProfileComp = ()=>{
    const {
        user
    } = useContext(HomePageContext);
    return (
        <>
         {user? (<article className="media" >
            <figure className="media-left">
                <p className="image is-48x48 is-1by1">
                <img className="is-rounded" src={user.iconUrl}  alt={user.name}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                <p>
                    <strong>{user.name}</strong> 
                    <br />
                    {user.description}
                </p>
                </div>
                
            </div>
            <div className="media-right">
                <button className="delete"></button>
            </div>
        </article>):(
            <div className="notifiction is-warning">
                <p>没有找到任何用户，请登录</p>
            </div>
        )}
        </>
    )
}

export default  UserProfileComp;