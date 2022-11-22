import React from 'react';
import '../Styles/AllLockers.css';
import Heading from '../components/Heading'

const AllLockers = () => {
  return (
    <div className='all_lockers'>
      <Heading text="All Locked Tokens & LP's"/>
      <p>Lock your token/LP to earn magical unicorn that poop out money. Be aware that might bite. </p>
    </div>
  )
}

export default AllLockers;
