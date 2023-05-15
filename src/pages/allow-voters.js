import React,{useState, useEffect, useCallback , useContext} from 'react'
import {useRouter, useeRouter} from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

// internal import
import { VotingContext } from 'context/Voter';
import Style from '../styles/allowedVoter.module.css';
import images from 'assets';
import Button from 'Components/Button/Button';
import Input from 'Components/Input/Input';

const allowedVoter = ()=>{
  const [fileUrl, setfileUrl] = useState(null);
  const [formInput, setformInput] = useState({
    name:"",
    address :"",
    position :"",
  });
const router = useRouter();
const{uploadToIPFS} = useContext(VotingContext);

//VOTER IMAGE DROP
const onDrop = useCallback(async(acceptedfil)=>{
  const  url= await uploadToIPFS(acceptedfil[0]);
  setfileUrl(url);
});

const {getRootProps, getInputProps} = useDropzone({
  onDrop,
  accept : "image/*",
  maxSize : 5000000,
});

// JSX

// return (
// <div className={Style.createVoter}>
//   <div>
//     {{fileUrl  && (
//       <div className={Style.voterInfo}>
//        <img src = {fileUrl} alt = "Voter Image"></img>
//        <div className={Style.voterInfo_paragraph}></div>
//       </div>
//     )}}
//   </div>
//   </div>
// )

  return <div></div>;

};


export default allowVoters;