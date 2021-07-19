import styles from '../styles/specialBanner.module.scss';


const SpecialBanner = (props)=>{
    return(
        <div className={styles['special-banner-wrapper']}>
            <h1>{props.heading}</h1>
            <div className={`${styles['special-banner']} ${props.isLeft === true ? styles['left-align'] : ''}`}>
                    <div className={styles['banner-grid']}>
                        {Array.from(props.children).slice(1)}
                    </div>
                {/* add optional params for background */}
                <div className={styles['special-banner-highlight']}>
                    <h1>{props.highlight_heading}</h1>
                    {Array.from(props.children)[0]}
                </div>
            </div>
        </div>
    )
}

export default SpecialBanner;