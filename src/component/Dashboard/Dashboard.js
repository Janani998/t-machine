import React from 'react';
import "./Dashboard.css";
import ViewCompactRoundedIcon from '@material-ui/icons/ViewCompactRounded';
import ViewStreamRoundedIcon from '@material-ui/icons/ViewStreamRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Card from "../Card/Card";
import Transaction from '../Transactions/Transactions';

const DashBoard = ({showDashboardHandler}) =>{
    const user = {
        userName : "Monirul",
        name : "Masudur Rahman",
        balances : [
            {
                cardNumber : "XXXX-7026-3435-3434",
                currencySymbol : "£",
                expiryDate : "03/26",
                currentAmount : 3435.34
            },
            {
                cardNumber : "xxxx-3435-4546-2454",
                currencySymbol : "$",
                expiryDate : "06/22",
                currentAmount : 5437.34
            },
            {
                cardNumber : "xxxx-3435-7076-3434",
                currencySymbol : "€",
                expiryDate : "08/25",
                currentAmount : 435.34
            },
            {
                cardNumber : "xxxx-8633-7445-3434",
                currencySymbol : "CHF",
                expiryDate : "04/22",
                currentAmount : 235.65
            }
        ],
    transactions : [
        {
            name : "Pateron Membership",
            date : "20 May 2020",
            status : "Subscribe",
            amount : "250.00"
        },
        {
            name : "UI GEEK INC",
            date : "10 March",
            status : "Received",
            amount : "4350.00"
        },
        {
            name : "Hitam Labou",
            date : "20 May 2020",
            status : "Sent",
            amount : "250.00"
        },
        {
            name : "Slava Kornilov",
            date : "05 March",
            status : "Pending",
            amount : "150.00"
        },  {
            name : "iMac 5k",
            date : "20 May 2020",
            status : "Purchase",
            amount : "6350.00"
        },
    ]
    }

    const currentBalance = user.balances.reduce(function(prev, cur) {
        return prev + cur.currentAmount;
      }, 0);
    return (
        <div className = "modal">
            <aside className = "aside-container">
                <div className = "icons-container">
                    <button className = "remove-decoration-button" onClick = {() => showDashboardHandler()}>
                        <div className = "red-box"> X </div>
                    </button>
                    <ViewCompactRoundedIcon color = 'primary'/>
                    <ViewStreamRoundedIcon color = 'primary'/>
                    <AccountCircleRoundedIcon color = 'primary'/>
                    <SecurityRoundedIcon color = 'primary'/>
                    <PieChartRoundedIcon color = 'primary'/>
                    <ExitToAppRoundedIcon color = 'primary'/>
                </div> 
                <div>
                    <img src= {process.env.PUBLIC_URL + '/images/avatar3.jpg'} alt = "avatar3" className = "avatar"/>
                </div>
            </aside>
            <section className = "section-container">
                <div className = "header-container spaces">
                    <div className = "heading">
                        <h2>Banking Dashboard</h2>
                        <h4>Welcome Back, {user.userName} </h4>
                    </div>
                    <div className = "current-balance">
                        <div className = "text">Current balance</div>
                        <h1 style = {{color : "#004225", margin: "0px"}}>{currentBalance}</h1>
                    </div>
                    <div className = "red-box">5</div>
                </div>
                <div className = "balances-container spaces">
                    <div className = "balance-header">
                        <h3>Your Current Balances ({user.balances.length})</h3>
                        <div className = "balance-header">
                            <div className = "move-button">
                                <ChevronLeftIcon/><div>Back</div> 
                            </div>
                            <div className = "move-button">
                                <div>Next</div> <ChevronRightIcon/>
                            </div>
                        </div>
                    </div>
                    
                    <div className = "card-container">
                        {user.balances.map(balance => <Card cardDetails ={balance} name = {user.name} />)}
                    </div>
                    
                </div>
                <div className = "transactions-container">
                    <div className = "first-section">
                        <div className = "transaction-header">
                            <h3>My Transaction</h3>
                            <button>See All</button>
                        </div>
                        <div className = "transaction-content">
                            {user.transactions.map(transaction => <Transaction transaction = {transaction} />)}
                        </div>
                    </div>
                    <div className = "second-section">
                        <div className = "secend-section-header">
                            <h3>Send Money</h3>
                            <MoreHorizIcon className = "card-text"/>
                        </div>
                        <div className = "send-money-container">
                            <div className = "avatar-container">
                                <img src= {process.env.PUBLIC_URL + '/images/avatar1.jpg'} alt = "avatar1" className = "avatar"/>
                                <img src= {process.env.PUBLIC_URL + '/images/avatar2.jpg'} alt = "avatar2" className = "avatar"/>
                                <img src= {process.env.PUBLIC_URL + '/images/avatar3.jpg'} alt = "avatar3" className = "avatar"/>
                                <img src= {process.env.PUBLIC_URL + '/images/avatar4.jpg'} alt = "avatar4" className = "avatar"/>
                            </div>
                            <div className = "amount-container">
                                <div>
                                    <div className = "date-content">Amount</div>
                                    <div style = {{fontSize : "12px"}}>2345.00</div>
                                </div>
                                <h5 >GBP</h5>
                            </div>
                            <button className = "send-money-button">Send Money</button>
                        </div>
                        <div>
                        <img src = {process.env.PUBLIC_URL + '/images/travelloan.png'} alt = "traveloan" className = "add-image"/>
                        </div>
                        
                    </div>
                    <div className = "third-section">
                        <h3>This Month</h3>
                        <div className = "month-data-container">
                            <div className = "limit-container">
                                <div>
                                    <div>
                                        <h5>Credit Limit</h5>
                                        <div >$2304/5054</div>
                                    </div>
                                    <div className = "progress">
                                        <div><span className = "card-text">Goal:</span>$30.000</div>
                                    </div>
                                </div  >
                                <div>
                                    <div>
                                        <h5>Online Limit</h5>
                                        <div>$4204/5054</div>
                                    </div>
                                    <div className = "progress">
                                        <div><span className = "card-text">Duration:</span>3years</div>
                                    </div>
                                </div>
                            </div> 
                            <div className = "limit-details-container">
                                <div>
                                    <h5><span>$ </span> 7,685</h5>
                                    <div style = {{color:"rgb(67, 190, 93)"}} className = "space-ellipses">Income</div>
                                    <MoreHorizIcon className = "card-text space-ellipses" />
                                </div>
                                <div>
                                    <h5><span>$ </span> 1,455</h5>
                                    <div style = {{color : "rgb(255, 117, 117)"}} className = "space-ellipses">Hold</div>
                                    <MoreHorizIcon className = "card-text space-ellipses" />
                                </div>
                                <div>
                                <h5><span>$ </span> 4,455</h5>
                                    <div style = {{color :"rgb(83, 83, 255)"}} className = "space-ellipses">Expense</div>
                                    <MoreHorizIcon className = "card-text space-ellipses" />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DashBoard;