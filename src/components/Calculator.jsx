"use client";
import React from 'react'
import Monitor from './features/Monitor'
import Keyboard from './features/Keyboard'
import useCalculatorStore from '@/stores/useCalculatorStore';
const Calculator = () => {
   // const{expression,display,result,setExpression,setDisplay,setResult}=useCalculatorStore()
   //  const Calc=()=>{
   //     if(expression.length!==0){
   //      try{
   //         let compute=eval(expression)
   //         compute = parseFloat(compute.toFixed(4));
   //         setResult(compute);
   //      }
   //      catch(error){
   //            setResult("An error has occured")
   //      }
   //     }
   //     else{
   //      setResult("An error has occured");
   //     }
   //  }
   //  const sinFunc={
   //      sin:"Math.sin",
   //      cos:"Math.cos",
   //      tan:"Math.tan",
   //      ln:"Math.log",
   //      log:"Math.log10",
   //      e:"Math.E",
   //      π:"Math.PI",
   //      "√":"Math.sqrt",
   //      "^":"**",
   //  }
   //  const handleButton=(value)=>{
   //    switch (value) {
   //       case "AC":
   //         setExpression("");
   //         setDisplay("");
   //         setResult(0);
   //         break;
 
   //       case "DEL":
   //          setExpression(expression.slice(0,-1));
   //          setDisplay(display.slice(0,-1));
   //         break;
 
   //       case "=":
   //         Calc();
   //         break;
 
   //       case "+/-":
   //          setExpression((expression*(-1)));
   //          setDisplay((display*(-1)));
   //         break;
 
   //       case "!":
   //         const lastnum = extractLastNum(expression);
   //         if (lastnum != null) {
   //           const num = parseFloat(lastnum);
   //           setDisplay(prev => prev + value);
   //           setExpression(prev => prev.replace(lastnum, factorial(num)));
   //         }
   //         break;
   //       default:
   //         if (sinFunc.hasOwnProperty(value)) {
   //          setDisplay(display+value)
   //           setExpression(expression+sinFunc[value])
   //         } else {
   //          setExpression(expression+value)
   //          setDisplay(display+value)
   //         }
   //     }
   //  }
   //  const factorial = (n) => 
   //    Array.from({ length: n }, (_, i) => i + 1)
   //      .reduce((acc, val) => acc * val, 1);
      
   //  const extractLastNum=(exp)=>{
   //    const number=exp.match(/\d+/g)
   // return   number ? number[number.length-1]:null

   //  }
  return (
   <section className="lg:flex lg:justify-center md:flex md:justify-center  h-screen lg:items-end sm:w-full   " >
    <div className=" w-full   h-[100%] ">
    <Monitor />
    <Keyboard/>
    </div>
      
   </section>
  )
}

export default Calculator