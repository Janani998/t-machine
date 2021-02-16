import React from 'react';
import "./Card.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

const Card = ({cardDetails,name}) =>{
    const [selected,setselected] = React.useState(false);
    const handleBackgroundChange = () =>{
        setselected(!selected);
    }
    return(
        <div className = {selected ? "card-background" : "card-white" } >
            <div className ={selected ? "card-text-white card-header" : "card-text card-header"}>
                <div>{cardDetails.cardNumber}</div>
                <MoreVertRoundedIcon/>
            </div>
            <div className = {selected ?  "amount-text-white" :"amount-text"} >
                <span style = {{marginRight : "8px", fontSize : "20px"}}>{cardDetails.currencySymbol}</span>
                <span>{cardDetails.currentAmount}</span>
            </div>
            <div className = "card-footer">
                <div className ={selected ? "card-text-white" :  "card-text" }>
                    <div>{name}</div>
                    <div>{cardDetails.expiryDate}</div>
                </div>
                <button className = "right-arrow" onClick = {handleBackgroundChange}>
                    <ChevronRightIcon />
                </button>     
            </div>
        </div>
    );
}

export default Card;