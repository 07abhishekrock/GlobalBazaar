import styles from '../styles/FlexBanner.module.scss';

const FlexBanner = (props)=>{
    return (
        <div className={styles.flexBanner}>
            {props.children}
        </div>
    )
}

export default FlexBanner;