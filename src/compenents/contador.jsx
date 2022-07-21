import React, { useState } from "react";
import styles from '../styles/styles.module.scss'

const Contador = () => {

    const [cuento, setCuento] = useState(0);

    //console.log(cuento)

    return(
        <div className={styles.contenedor}>
        <p className={styles.textoArriba}>Escribe una palabra y te dire cuantas letras tiene: </p>
        
        <input className={styles.input} type='text' onChange={(event)=>setCuento(event.target.value.length)}/>
        
        <span className={styles.result}>Esta palabra contiene {cuento} letras </span>
        </div>
        
    )
}

export default Contador;