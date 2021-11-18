import React from 'react'
import Dashboard from './Dashboard'
import PriceData from './PriceData'
import {useState,useRef} from 'react'
import MyNotification from './MyNotification';
import { useHistory } from 'react-router-dom';
import { useMoralis } from "react-moralis";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { IPFREE_ABI,IPFREE_CONTRACT } from "./contracts";

export default function Subscribe() {
    const {authenticate,isAuthenticated ,Moralis} = useMoralis();
    const [openNotification,setOpenNotification]  = useState(false);
    const [notificationHeader,setNotificationHeader]  = useState("");
    const [notificationBody,setNotificationBody]  = useState("");
    const [notificationType,setNotificationType]  = useState();
    const [isSubscribed,setIsSubscribed]  = useState(false);
    const [isPurchasing,setIsPurchasing] = useState(false);
    const history = useHistory();
    const loggedIn = useRef(false);
    const ethAddress = useRef();
    const web3 = createAlchemyWeb3(process.env.REACT_APP_ALCHEMY_URL);
    const contract = new web3.eth.Contract(
      IPFREE_ABI,
      IPFREE_CONTRACT
    );
    const handleCloseNotification = () =>
    {
       setOpenNotification(false);
    }
  
    const handlePurchase = async (plan,price) =>
    {
      setIsPurchasing(true);
  
          const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
          const addr = "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada" //Matic USD Price Feed
          const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
          priceFeed.methods.latestRoundData().call()
              .then((roundData) => {
                  // Do something with roundData
                  console.log("Latest Round Data", roundData)
                  let maticPrice = web3.utils.fromWei(roundData.answer+"0000000000");
                  let fee = price/maticPrice; 
                  contract.methods.subscribe(plan.toString()).send({from:ethAddress.current,gasLimit:3000000,value:web3.utils.toWei(fee.toString())})
                  .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                    setIsPurchasing(false);         
                    setOpenNotification(true);
                    setNotificationHeader("ERROR SUBSCRIBING")
                    setNotificationBody("User Cancel transaction or error subscribing.");
                    setNotificationType(2); //Error
                    console.log(error);
   
                   
          }).on('receipt', function(error, receipt) {
              history.push("/home");
                      });          
                  
                }).catch((err)=>{
                  setIsPurchasing(false);
                  setOpenNotification(true);
                  setNotificationHeader("ERROR SUBSCRIBING")
                  setNotificationBody("Subscription Error");
                  setNotificationType(2); //Error
                })
  
         
       }
       
    
    
    return (
        <Dashboard><PriceData handlePurchase={handlePurchase} isPurchasing={isPurchasing}></PriceData>    <MyNotification type={notificationType} header={notificationHeader} body={notificationBody} open={openNotification} handleClose={handleCloseNotification}/>
        </Dashboard>
    )
}
