import React , {useState} from 'react';
//Style
import styles from "./MainContainer.module.css";

//InitialValue for timer
let interval ; 
let start = true ;

const MainContainer = ({text}) => {

    const [userInput , setUserInput] = useState("");
    const [time , setTime]=useState(0);
    //correct/incorrect checker
  
    const check = (character ,index ,userInput)=>{
       const userInputArray = userInput.split("");
       
       if ( userInputArray[index]===character){
         
          return styles.correct ;
        } else{
           return styles.incorrect;
        }
      }
      //timer
  
    const timer =()=>{
        if(start){
          interval = setInterval(()=>{
              setTime(prevTime => prevTime+1)
            },1000)
          start = false ;
        }
      }
      //changHandler
  
    const changeHandler= event =>{
            
        setUserInput(event.target.value);
     }
     //clearInterval
    if(userInput === text){
      clearInterval(interval)
      alert(`Your time : ${time} seconds.
      Please reload to get new text.`)
    }

    return (
        <div className={styles.container}>
      <div className={styles.timer} >{time}</div>
      <div className={styles.textContainer} >          
          <p className={styles.textDisplay} >        
            { text && userInput ?
                text.split("").map(
                  (char , index) => 
                    <span 
                      key={index} 
                      className={userInput.split("")[index] && check(char , index, userInput)}
                    >
                      {char}
                    </span>
                ):
              text}
          </p>
          <textarea 
              className={styles.textInput}
              autoFocus 
              onChange={changeHandler} 
              value={userInput} 
              onKeyDown={timer}
          ></textarea>
      </div>   
  </div>
    );
};

export default MainContainer;