import 'y/styles/globals.css'

// internal import 
import {VotingProvider} from "../../context/Voter";
import NavBar from "../../Components/NavBar/NavBar";
const MyApp = ({Component,pageProps})=>(
  <VotingProvider>
  <div> 
    <div>
    <Component{...pageProps}/>;
    </div>
  </div>
  </VotingProvider>
);

export default MyApp;
 
