import styles from '../styles/misc.module.scss';

const DesignerHeading = (props)=>{
    return (
        <h1 className={styles['designer-heading']}>{props.heading_text}</h1>
    )
}

export default DesignerHeading;