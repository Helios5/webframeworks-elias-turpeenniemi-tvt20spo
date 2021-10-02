import React from 'react'
import styles from './Headers.module.css';
export default function Headers() {


    return (
            <div className={ styles.headerBackground }>
            <div className={ styles.container }>
            <div className={ styles.brand }> HELSINGIN SANOMAT</div>
            <div className={ styles.container2}> Uutiset </div>
            <div className={ styles.container2}> Lehdet </div>
            <div className={ styles.container3}> Tilaa </div> 
            <div className={ styles.container6}> Kirjaudu <img src="/images/ukkokuva.png"alt=""style={{marginBottom: -7}}/> </div>
            <div className={ styles.container4}> Hae <img src="/images/suurilasi.png"alt=""style={{marginBottom: -7}}/>  </div>
            <div className={ styles.container4}> Valikko <img src="/images/viivat.png"alt=""style={{marginBottom: -7}}/>  </div> 

            
             
            </div>
            
        </div>
    )
}
