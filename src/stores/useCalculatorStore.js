import { create } from "zustand";

 const useCalculatorStore=create((set,get)=>(
    {
         sciKeys:["sin","cos","ln","log","tan","π","e","^","!","√","(",")"],
         basicKeys:["DEL","+/-","%","/","7","8","9","*","4","5","6","-","1","2","3","+","AC","0",".","="],
         expression:"",
         display:"",
         result:"0",
         sinFunc:{
            sin:"Math.sin",
            cos:"Math.cos",
            tan:"Math.tan",
            ln:"Math.log",
            log:"Math.log10",
            e:"Math.E",
            π:"Math.PI",
            "√":"Math.sqrt",
            "^":"**"
         },
         Calc:()=>{
            const{expression}=get();
            !expression ? set({result:"An error is occured"}):(()=>{
                try{
                    set({
                        result: parseFloat(eval(expression).toFixed(4))
                      });
                }
                catch(error){
                  set({result:"An error is ocuured"})
                }
            })()
         },
         extractNum:(exp)=>exp.match(/\d+/g)?.pop()|| null,
         //  "?." operator if + &&

         factorial:(n)=>{
            Array.from({length:n},(_,index)=>index++)
            .reduce((acc,curr)=>acc*curr,1)
         },
         handleClick:(value)=>{
            const{expression,display,result,setExpression,setDisplay,setResult}=get()
             switch(value){
                case "AC":
                    set({expression:"",display:"",result:0});
                    break;
                case "DEL":
                    set({expression:expression.slice(0,-1),
                        display: display.slice(0, -1)
                    });
                    break;
                case "=":
                    get().Calc()
                    break;
                case "+/=":
                    set({expression:expression*(-1),
                        display:expression*(-1)
                    });
                    break;
                 case "!":
                    set(
                        extractNum(expression) ? {
                        display:display+value,
                        expression:expression.replace(extractNum(expression),factorial(parseFloat(extractNum(expression))))
                        }:{}
                    );
                    break;
                    default:
                        const{sinFunc}=get()
                        set({
                            display:display+value,
                            expression:expression+(sinFunc[value]|| value)
                        })
             }
         }
    }
 ))
export default useCalculatorStore;