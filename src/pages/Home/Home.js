import React from 'react'

import Header from "../../components/Header/Header";
import Search from '../../components/Search/Search';
import SpecialCompo2 from '../../components/Special/Special_compo2/SpecialCompo2';
import SpecialCompo1 from '../../components/Special/Special_compo1/SpecialCompo1';
import Body from '../../components/Body/Body';

export default function Home() {
  return (
    <div>
    <Header /> 
    <Search /><br/><br/>
    <Body />

    </div>
  )
}
