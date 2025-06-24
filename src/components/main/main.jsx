{/* 1)Make help, settings , activity page
    2) manage media and mic buttons
    3)on clicking the example make them go in the input to give result */}

import React,{useContext} from 'react'
import './main.css'
import assets  from "../../assets/assets/assets";
import {Context} from '../../context/context.jsx';


const Main = () =>{
    const mediaPage=()=>{
        alert("We are working on the media option. Thank you for your patience.");
    }
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input}= useContext(Context);

    return(
        <div className='main'>
           <div className='nav'>
            <p>Gemini</p>
            <img src={assets.myuser_icon} alt='' />
           </div>
           <div className='main-container'>
            {!showResult
            ? 
            <>

            <div className='greet'>
                <p><span>Hello, Sushi</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p>urban planning</p>
                    <img src={assets.bulb_icon} alt=" "/>
                </div>
                <div className='card'>
                    <p>Team bonding activities</p>
                    <img src={assets.message_icon} alt=" "/>
                </div>
                <div className='card'>
                    <p>Imporve the code</p>
                    <img src={assets.code_icon} alt=" "/>
                </div>
                <div className='card'>
                    <p>Suggest beautiful places for upcoming roadtrip</p>
                    <img src={assets.compass_icon} alt=" "/>
                </div>
            </div>
            </> 
            :
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentPrompt}</p>
                </div>
                <div className='result-data'>
                    <img src={assets.gemini_icon} alt=""/>
                    {loading ? 
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
               
                    }
             </div>
            </div>
            }

            <div className='main-bottom'>
                <div className='search-box'>
                    <input placeholder="Enter a prompt" onChange={(e)=>setInput(e.target.value)} value={input} type='text'/> 
                    {/*not getting placeholder*/}
                    <div>
                        <img src = {assets.gallery_icon} alt = '' onClick={()=>mediaPage()}/>
                        <img src = {assets.mic_icon} alt = ''/>
                       {input ? <img onClick={() => onSent()} src={assets.send_icon} alt='' /> : null}

                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                </p>
            </div>
           </div>
        </div>
    );
}
export default Main;