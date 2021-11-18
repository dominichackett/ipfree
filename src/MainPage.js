import LandingPage from "./LandingPage";
import MainBanner from "./MainBanner";
import {useState} from 'react'
import MyNotification from './MyNotification';
import { useHistory } from 'react-router-dom';
import { useMoralis } from "react-moralis";
export default function MainPage(props) {
    const {authenticate, isAuthenticated ,Moralis} = useMoralis();
    const [openNotification,setOpenNotification]  = useState(false);
    const [notificationHeader,setNotificationHeader]  = useState("");
    const [notificationBody,setNotificationBody]  = useState("");
    const [notificationType,setNotificationType]  = useState();
    const history = useHistory();
    if(isAuthenticated)
    history.push("/home");

  const handleCloseNotification = () =>
  {
     setOpenNotification(false);
  }
  const handleConnect = async () =>
  {
      await Moralis.enableWeb3();
      const chainId = await Moralis.getChainId();
      if(chainId ==80001) //Mumbai Testnet
         authenticate({signingMessage:"Sign in to Interplanetary Freedom."});
      else
      {
          setOpenNotification(true);
          setNotificationHeader("ERROR WRONG NETWORK")
          setNotificationBody("Please connect to the Mumbai Testnet.");
          setNotificationType(2); //Error
      } 
  }
return(<LandingPage handleConnect={handleConnect}><MainBanner handleConnect={handleConnect}></MainBanner>
    <MyNotification type={notificationType} header={notificationHeader} body={notificationBody} open={openNotification} handleClose={handleCloseNotification}/>

</LandingPage>)
}
