import React ,{ useState,useEffect,useContext } from 'react';
import Image from'next/image';
import Countdown from 'react-countdown';

//internal import

import  VotingContext  from '../../context/Voter';
import Style from '/src/styles/index.module.css';
import Card from '/Components/Card/Card.jsx';
//import image from '/assets/kid-luffy-monkey-d-luffy-one-piece-anime-hd-wallpaper-preview.jpeg';

const index = () => {
  const {votingTitle} = useContext(VotingContext)
  return <div>{votingTitle}</div>
};

export default index;