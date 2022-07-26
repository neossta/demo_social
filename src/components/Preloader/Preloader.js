import React from 'react';
import loader from '../loader.svg';
import styles from "./Preloader.module.css"

let Preloader = () => {
    return (<div className={styles.preloader}>
        <img src={loader} alt='loading'/>
        </div>
    )
};

export default Preloader;