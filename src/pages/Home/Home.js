import React from 'react'

import Header from "../../components/Header/Header";
import Search from '../../components/Search/Search';
import Body from '../../components/Body/Body';
import BeforeFooter from '../../components/BeforeFooter/BeforeFooter';

export default function Home() {
  return (
    <div>
    <Header /> 
    <Search /><br/><br/>
    <Body />
    <BeforeFooter />
    </div>
  )
}
