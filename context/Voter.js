import React  from 'react'
import { useState,useEffect } from "react"
import Web3Modal from 'web3modal';
import { ethers } from "ethers";
import {create as ipfsHttpClient} from "ipfs-http-client";
import axios from "axios";
import { useRouter } from "next/router";

// INTERNAL IMPORT
import { VotingAddress,VotingAddressABI } from '../context/constants'; 
 const projectID ='2Pnk78Ho2t7R1xG5hHMAugeI1Iy'
 const projectScret = '0bd5322f357eae44af16574a8251ef30'
 const auth = 'Basic' + Buffer.from(projectID + ":" + projectScret).toString('base64')

const client = ipfsHttpClient({

  host :'ipfs.infura.io',
  port :5001,
  protocole :'https',
  heaader : {
    authorization : auth
  }
});
const fetchContract = (signerOrProvider) => new ethers.Contract(VotingAddress, VotingAddressABI, signerOrProvider);

export const VotingContext = React.createContext();
export const VotingProvider = ({children}) => {
    const votingTitle = "My first smart cotract app";
    const router = useRouter();
    const [currentAccount, setCurrentAccount] =useState('');
    const [candidateLength, setcandidateLength] = useState('');
    const pushCandidate = [];
    const candidateIndex =[];
    const [candidateArray, setcandidateArray] = useState(pushCandidate);


    // END OF CANDIDATE DATA
    const [error, seterror] = useState('');
    const highest = [];
     
    // VOTER SECTION
    const pushVoter  =[];
    const [voterArray, setvoterArray] = useState(pushVoter);
    const [voterLength, setvoterLength] = useState('');
    const [voterAddress, setvoterAddress] = useState([]);


    // CONNECTING WALLET mm

    const checkIfWalletIsConnected = async()=>{
      if (!window.ethereum) return setError("Please Install MetaMask");
      const account = awaitwindow.ethereum.request({method : "eth_account"});
      if (account.length){
        setCurrentAccount(account[0]);
      }
      else {
        setError("Please Install MetaMask & Connect, Reload");

      } 
    };

    //CONNECT WALLET
    const connectWallet = async()=>{
      if(!window.ethereum) return setError("please Install MetaMask");
      const account = awaitwindow.ethereum.request({method : "eth_requestAccounts"});
      setCurrentAccount(account[0]);

    }

    //UPLOAD to  IPFS-- VoterImage

    const uploadToIPFS = async(file)=>{
      try{
            const added = await client .add({content : file});
            const url = 'https://ipfs.infura.io/ipfs/${added.path}';
            return url; 
      } catch (error){
        setError("Error Uploading file to IPFS");
      }
    }


    return 
        <VotingContext.Provider value ={{votingTitle , checkIfWalletIsConnected ,connectWallet, uploadToIPFS}}>{children}</VotingContext.Provider>;

    
}


const Voter = () => {
  return (
    <div>Voter</div>
  )
}

