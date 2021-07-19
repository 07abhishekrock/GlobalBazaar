import styles from '../styles/specialBanner.module.scss';

const ItemBlock = (props)=>{
    return(
        <div className={styles['item-block']}>
            <div className={styles['item-image']}></div>
            <h3>{props.itemName}</h3>
            <span>{props.itemOldPrice}<i>{props.itemNewPrice}</i></span>
        </div>
    )
}

export default ItemBlock;