
import {createContext, useState} from 'react';
import runChat from '../config/gemini'

export const Context = createContext();
const ContextProvider = (props) => {
   const [input, setInput]=useState(""); //to save input data
    const [recentPrompt, setRecentPrompt] = useState(" "); //saves input in recent prompt
    const [prevPrompt, setPrevPrompt] = useState([]); //input history
    const [showResult, setShowResult] = useState(false); //to show result
    const [loading, setLoading]=useState(false); //displays loading animation
    const[resultData, setResultData]=useState(""); //show result on webpage

    const delayPara = (index, nextWord) =>{
        setTimeout(function (){
            setResultData(prev=>prev+nextWord);
        }, 75*index)
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt)=>{

        setResultData("")
        setLoading(true)
        setShowResult(true)
        let finalPrompt = prompt !== undefined ? prompt : input;

    setRecentPrompt(finalPrompt);
    setPrevPrompt(prev => [...prev, finalPrompt]);

    let response = await runChat(finalPrompt);


        await runChat(input)
        let responseArray = response.split("*");
        let newResponse="";
        for (let i=0; i<responseArray.length; i++)
        {
            if (i===0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
    /*typing effect*/
        for (let i = 0; i<newResponseArray.length;i++)
        {
            const nextWord= newResponseArray[i];
            delayPara(i, nextWord+" ")
        }
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};
export default ContextProvider;