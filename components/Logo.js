import styles from '../styles/FlexBanner.module.scss';

const LogoWithImage = (props)=>{
    return(
        <div className={`${styles.mainLogo} ${styles['with-image']}`}>
            <div></div>
            <h1>Global<i>Bazaar</i></h1>
            <span>Your Online Bazaar</span>
        </div>
    )
}

const Logo = (props)=>{
    return(
        <div className={styles.mainLogo}>
            <h1>Global<i>Bazaar</i></h1>
            <span>Your Online Bazaar</span>
        </div>
    )
}

export default Logo;
export {LogoWithImage};