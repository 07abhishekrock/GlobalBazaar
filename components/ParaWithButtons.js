import styles from '../styles/FlexBanner.module.scss';


const ParaWithButtons = (props)=>{
    return (
        <div className={styles.briefDiv}>
            <p>{props.paraText}</p>
            <div className={styles['btn-group']}>
                <button className={styles.special}>Signup</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default ParaWithButtons;
