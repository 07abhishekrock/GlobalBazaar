import styles from '../styles/misc.module.scss';

const Loader = ()=>{
    return null;
    return <div className={styles['loader-wrapper']}>
        <div className={styles['loader']}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
}

export default Loader;