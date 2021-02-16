import React,{useEffect,useState} from 'react';
import "./Transactions.css";

const Transaction = ({transaction}) =>{
    const [status,setStatus] = useState("");
    useEffect(()=>{
        if(transaction.status === "Received"){
            setStatus("received");
        }else if(transaction.status === "Pending"){
            setStatus("pending") ;
        }else{
            setStatus("sent");
        }
    },[])
    
    
    return(
        <div className = "transaction-box">
            <div className = "logo"></div>
            <div className = "name-box">
                <h5>{transaction.name}</h5>
                <div className= "date-content">{transaction.date}</div>
            </div>
            {console.log(status)}
            <div className = {`${status} box-content box`}>{transaction.status}</div>
            <div className = "box amount-data">{transaction.status === "Received" ? <span>+</span> : ""}${transaction.amount}</div>
        </div>
    );
}

export default Transaction;