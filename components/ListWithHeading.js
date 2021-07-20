import styles from '../styles/misc.module.scss';
import Link from 'next/link';

const ListWithHeading = (props)=>{
    return(
        <div className={styles['list-with-heading']}>
            <h3>{props.list_heading}</h3>
            <ul>
                {props.listItems.map((element , index)=>{
                    return <Link href={element.linkURL} key={index}>{element.linkName}</Link>
                })}
            </ul>
        </div>
    )
}

export default ListWithHeading;