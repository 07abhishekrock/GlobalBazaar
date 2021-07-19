import styles from '../styles/specialBanner.module.scss';

const StrikedPriceWithTime = ()=>{
    return(
        <div className={styles["striked-price"]}>
            <span className={styles["old-price"]}>Rs 1,00,000</span>
            <span className={styles["new-price"]}>Rs 90,000</span>
            <span className={styles["time-remaining"]}>21:10:00</span>
        </div>
    )
}

const StrikedPrice = ()=>{
    return(
        <div className={styles["striked-price"]}>
            <span className={styles["old-price"]}>Rs 1,00,000</span>
            <span>Rs 90,000</span>
        </div>
    )
}

export {StrikedPrice , StrikedPriceWithTime};