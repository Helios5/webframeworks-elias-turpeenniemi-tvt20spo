import React from 'react'
import styles from './SideSection.module.css';

export default function SideSection() {
    return (
        <><div className={styles.background}> Luetuimmat </div>
        <div className={styles.underline}> ________________________________ </div>
        <div className={styles.uutiset}> 1 Koronatestaus | Kahdesti rokotettujen testaamisesta luovutaan laajalti - Hallitus kertoo uusista linjauksista kello 13.45 </div>
        <div className={styles.uutiset}> 2 HS-analyysi | Vauras Norja harppasi vasemmalle, ja hurjasti vahvistunut äärivasemmisto vaati öljyntuotannon lakkauttamista </div>
        <div className={styles.uutiset}> 3 EU | Suomi lähti mukaan EU-maiden kirjeeseen, jossa vaaditaan velkakuria - Sdp:ssä hermostuttiin, Saarikko kuvailee ennakkovaikuttamiseksi</div>
        <div className={styles.uutiset}> 4 Yritykset | Björn Wahlroos järjesteli 50 miljoonan euron arvosta Sampo-osakkeitaan perheelleen</div>
        <div className={styles.uutiset}> 5 Arkkitehtuuri | Suomeen syntyy maan suurin arkkitehtitoimisto, kun kolme alan nykyistä toimijaa liittyy yhteen - Tällaisista hankkeista se vastaa</div>
        <div className={styles.uutiset}> 6 Terveys | Onko sinullakin "piparkakkukieli"? Saatat narskutella hampaita tietämättäsi</div>
        <div className={styles.uutiset}> 7 Sijoittaminen | 21-vuotias opiskelija avasi vahingossa kaksi osakesäästötiliä, tuloksena tuhansien eurojen rangaistus</div>
        </>
    )
}
