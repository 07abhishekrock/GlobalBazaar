import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/categories.module.scss';
import DesignerHeading from './DesignerHeading';
const CategoryBlock = (props)=>{
    return (
        <div className={styles['category-block']}>
            <div className={styles['category-block-image']}></div>
            <h2>{props.block_heading} 
                <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </h2>
            <span>Flat 20% Off</span>
            <span>Flat Rs 250 Discount</span>
        </div>
    )
}
const CategoriesSection = (props)=>{
    return (
        <div className={styles['categories-section']}>
            <DesignerHeading heading_text={"Categories"}/>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export {CategoriesSection , CategoryBlock};