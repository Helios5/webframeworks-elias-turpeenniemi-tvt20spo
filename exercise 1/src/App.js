import React from 'react';
import './App.css';
import Headers from './components/Headers';
import MainSection from './components/MainSection';
import NewsNotifications from './components/NewsNotifications';
import SideSection from './components/SideSection';
import UnderHeaders from './components/UnderHeaders';


function App() {
//... API Call and response
//as a result the data would availble

  return (
    <div 
    className= "appBackground">

      <Headers />
      <UnderHeaders />
      <NewsNotifications topic='ULKOMAAT' body='Britannian brexit-henkisin kaupunki ei saanutkaan onnelaa: EU-ero toi pulan työväestä ja jopa tyhjät hyllyt' />
      <NewsNotifications topic='PÄIVÄN TIMANTTI' body='Reima Launonen kiipesi työväenluokasta yliopistoon, mutta huomasi pian olevansa kuin norsu posliinikaupassa – Kolme luokkahypyn tehnyttä kertoo, millainen kokemus yliopisto oli' />


      <img src="/images/koronapsykoosi.webp"alt=""style={{marginTop: 30 , marginLeft: 190}}/>
      <MainSection topic='Koronatestaus' body ='Kahdesti rokotettujen testaamisesta luovutaan laajalti - Hallitus kertoo uusista linjauksista kello 13.45' />
      <img src="/images/norjapsykoosit.webp"alt=""style={{marginTop: 30 , marginLeft: 190}}/>
      <MainSection topic='HS-analyysi' body ='Vauras Norja harppasi vasemmalle, ja hurjasti vahvistunut äärivasemmisto vaati öljyntuotannon lakkauttamista'/>
      <img src="/images/eupsykoosit.webp"alt=""style={{marginTop: 30 , marginLeft: 190}}/>
      <MainSection topic='EU' body ='Suomi lähti mukaan EU-maiden kirjeeseen, jossa vaaditaan velkakuria - Sdp:ssä hermostuttiin, Saarikko kuvailee ennakkovaikuttamiseksi'/>
      <SideSection />
    <div>

    </div>
    </div>
  );
}

export default App;
