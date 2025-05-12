import Markdown from 'react-markdown'

import { useContext } from 'react';
import HomePageContext from '../context/HomePageContext';



const MessageComp = ({ message }) => {

    const {
        user,
        currentAgent
    } = useContext(HomePageContext)

    const iconUrl = message.role === "user" ? `${user?.iconUrl}` : `${currentAgent?.iconUrl}`
    const name = message.role === "user" ? `${user?.name}` : `${currentAgent?.name}`
    return (
        <div className='columns'>
        {message.role === "user"?(
            <>
            <div className="column is-four-fifths">
                {message.role === "user" && <div className='box'><article className="media">
                    
                    <figure className="media-left">
                        <p className="image is-64x64 is-1by1">
                            <img className='is-rounded' src={iconUrl} alt={name} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name}</strong> <small></small> <small></small>
                                <br />
                                {message.content}
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                </div>
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                </div>
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </article></div>}
            </div>
            <div className='column'></div>
                    </>
        ):(
            <>
                <div className="column is-one-fifths">
                    
                </div>
                <div className='column is-four-fifths'>
                {message.role === "assistant" && 
                
                <div className='box'>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64 is-1by1">
                            <img className='is-rounded' src={iconUrl} alt={name} />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{name}</strong> <small></small> <small></small>
                                <br />
                                {message.content}
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                </div>
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                </div>
                                <div class="level-item">
                                    <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </article>
                    </div>
                }
            </div>
                </>
        )}
        
            
            
        </div>
    )
}

export default MessageComp