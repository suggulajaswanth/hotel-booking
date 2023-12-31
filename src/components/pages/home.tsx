import { ReactElement } from 'react';
import '../../App.css';
import { BodySection } from '../BodySection';
import { HeaderSection } from '../HeaderSection';
import LoginPopup from '../Login';
import { NewsLetter } from '../NewsLetter';
import { FooterSection } from '../FooterSection';
import { Cards } from '../Cards';
import { Test } from '../Test';
import { MobileApp } from '../Mobile';

export const Home= ():ReactElement=> {
  return (
    <>
      {/* <HeaderSection />
      <BodySection></BodySection>
      <LoginPopup></LoginPopup>
      <Cards></Cards>
      <NewsLetter></NewsLetter>
      <FooterSection></FooterSection> */}
      {/* <Test></Test>
      <LoginPopup></LoginPopup> */}
      <MobileApp></MobileApp>
    </>
  );
}

export default Home;