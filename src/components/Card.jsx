import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Card1=styled.div`
    height: 80px;
    width: 450px;
    background-color: #0e0e26;
    border-radius: 10px;
    color: white;
    font-size: 40px;
    padding: 15px;
    font-weight: 600;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;
    span{
        margin: 0 10px;
    }
`
const Card2=styled.div`
    
    display: flex;
    align-items: center;
    background-color: #1e1e34;
    border-radius: 10px;
    margin-top: 20px;
`
const CalculatorKeys=styled.div`
height: 400px;
    width: 450px;
    padding: 15px;
    display: grid;
    gap: 15px;
    box-sizing: border-box;
    grid-template-columns: repeat(4, 1fr);
    button{
        border-radius: 10px;
        font-size: 20px;
        opacity: 0.8;
        &:hover{
            opacity: 1;
            cursor: pointer;
        }
    }
`
const Resetbtn=styled.button`
    grid-column: 1/span 2;
    background-color: hsl(222, 26%, 31%);
    color: white;
`
const Equaltobtn=styled.button`
     grid-column: 3/span 2;
     background-color: red;
    color: white;


`
const Deletebtn=styled.button`
    color: white;
    background-color: hsl(222, 26%, 31%);
    
`

const Card = () => {
    const [currentValue,setCurrentValue]=useState('')
    const [prevValue,setPrevValue]=useState('')
    const [operator,setOperator]=useState('')
    const [res,setRes]=useState('')
    const setDigit=(digit)=>{
        if(!currentValue && digit!=='.'){
        setCurrentValue(currentValue+digit)

        }
        else if(currentValue && (digit==='.' && !currentValue.includes('.'))){
            setCurrentValue(currentValue+digit)

        }
        else if(currentValue && digit!=='.'){
            setCurrentValue(currentValue+digit)
        }
        // if(!operator){
        //     setCurrentValue(currentValue+digit)
        // }
        // else{
        //     setPrevValue(prevValue+digit)
        // }
    }
    const del=()=>{
        setCurrentValue(currentValue.slice(0,currentValue.length-1))
    }
    const oper=(value)=>{
        if(!prevValue && currentValue){
            setOperator(value)
            setPrevValue(currentValue)
            setCurrentValue('')
        }
    }
    const result=()=>{
        console.log({operator,prevValue,currentValue})
        if(operator==='+'){
            setRes(Number(prevValue)+Number(currentValue))
            
        }
    }
    const reset=()=>{
        setCurrentValue('')
        setPrevValue('')
        setOperator('')
        setRes('')
    }
  return (
      <div>
          <Card1>
             <div> {prevValue}
              <span>{operator}</span>
            {currentValue}</div>
            <div>{res&&<span>=</span>}
            {res}
            </div>
          </Card1>
          <Card2>
              <CalculatorKeys>
                  <button onClick={()=>setDigit('7')}>7</button>
                  <button onClick={()=>setDigit('8')}> 8</button>
                  <button onClick={()=>setDigit('9')}>9</button>
                  <Deletebtn onClick={()=>del()}>DEL</Deletebtn>
                  <button onClick={()=>setDigit('4')}>4</button>
                  <button onClick={()=>setDigit('5')}>5</button>
                  <button onClick={()=>setDigit('6')}>6</button>
                  <button onClick={()=>oper('+')}>+</button>
                  <button onClick={()=>setDigit('1')}>1</button>
                  <button onClick={()=>setDigit('2')}>2</button>
                  <button onClick={()=>setDigit('3')}>3</button>
                  <button onClick={()=>oper('-')}>-</button>
                  <button onClick={()=>setDigit('.')}>.</button>
                  <button onClick={()=>setDigit('0')}>0</button>
                  <button onClick={()=>oper('/')}>/</button>
                  <button onClick={()=>oper('*')}>*</button>
                  <Resetbtn onClick={reset}>Reset</Resetbtn>
                  <Equaltobtn onClick={()=>result()}>=</Equaltobtn>

                  
              </CalculatorKeys>
      
      </Card2>

      </div>
    
  );
}

export default Card;
