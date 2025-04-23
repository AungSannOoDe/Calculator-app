"use client";
import React from 'react'
import Monitor from './features/Monitor'
import Keyboard from './features/Keyboard'
import {useState} from "react"
const Calculator = () => {
    const[expression,setExpression]=useState("")
    const[display,setDisplay]=useState("")
    const[result,setResult]=useState(0)
    const Calc=()=>{
       if(expression.length!==0){
        try{
           let compute=eval(expression)
           compute = parseFloat(compute.toFixed(4));
           setResult(compute);
        }
        catch(error){
              setResult("An error has occured")
        }
       }
       else{
        setResult("An error has occured");
       }
    }
    const sinFunc={
        sin:"Math.sin",
        cos:"Math.cos",
        tan:"Math.tan",
        ln:"Math.log",
        log:"Math.log10",
        e:"Math.E",
        π:"Math.PI",
        "√":"Math.sqrt",
        "^":"**",

    }
    const handleButton=(value)=>{
      console.log(value);
       if(value==="AC"){
        setExpression("")
        setDisplay("")
        setResult(0)
       }
       else if( value=="DEL"){
          setExpression(expression.slice(0,-1))
          setDisplay(display.slice(0,-1))
       }
       else if(value==="="){
       Calc()
       }
       else if(value==="+/-"){
          setExpression((expression*(-1)))
          setDisplay((display*(-1)))
       }
       else if(sinFunc.hasOwnProperty(value)){
          setDisplay(display+value)
          setExpression(expression+sinFunc[value])
       }
       else if(value==="!"){
          const lastnum=extractLastNum(expression)
          if(lastnum !=null){
            const num=parseFloat(lastnum)
            setDisplay(display+value)
            setExpression(expression.replace(lastnum,factorial(num)));
          }
       }
       else{
        setExpression(expression+value)
        setDisplay(display+value)
       }
    }
    function factorial(n) {
        let result = 1;
        for (let i = 1; i <= n; i++) result *= i;
        return result;
      }
    const extractLastNum=(exp)=>{
      const number=exp.match(/\d+/g)
   return   number ? number[number.length-1]:null

    }
  return (
   <section className="lg:flex lg:justify-center sm:items-center h-screen lg:items-end sm:w-full   " >
    <div className=" lg:w-full  md:w-full lg:border-0 md:border-0  sm:w-full sm:h-[100%]  rounded-sm lg:h-[100%] md:h-[100%] ">
    <Monitor result={result} display={display} />
    <Keyboard handleButton={handleButton}/>
    </div>
      
   </section>
  )
}

export default Calculator