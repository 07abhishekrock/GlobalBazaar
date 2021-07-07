import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft , faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Carousel.module.scss';

const Carousel = ({carouselChildren , remProps})=>{
    let [ total_elements , set_total_elements ] = useState(carouselChildren.length);
    let [ current_selected_index , set_current_selected_index ] = useState(Math.floor(total_elements / 2));
    let [ limit_exceeded , set_limit_exceeded ]  = useState([1 , 1]); 

    function moveNext(target){
        set_limit_exceeded([1 , limit_exceeded[1]]);
        if(total_elements === target + 1){
            set_limit_exceeded([1 , 0]);
        }
        else if(total_elements < target + 1){
            return;
        }
        set_current_selected_index(target);
    }
    function movePrev(target){
        set_limit_exceeded([limit_exceeded[0] , 1]);
        if(target === -1){
            return;
        }
        else if(target === 0){
            set_limit_exceeded([0 , 1]);
        }
        set_current_selected_index(target);
    }

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carousel} style={{transform:`translateX(calc(10% + calc(-80% * ${current_selected_index})))`}}>
                {carouselChildren.map((child , index)=>{
                    return (
                        <a className={styles.anchorImage} href={child.href} key={index}>
                            <img src={child.src}/>
                        </a>
                    )
                })}
            </div>
            <i className={styles.leftBtn} hide={limit_exceeded[0]} onClick={movePrev.bind(null , current_selected_index - 1)}>
                <FontAwesomeIcon icon={faChevronCircleLeft}/>
            </i>
            <i className={styles.rightBtn} hide={limit_exceeded[1]} onClick={moveNext.bind(null , current_selected_index + 1)}>
                <FontAwesomeIcon icon={faChevronCircleRight}/>
            </i>
        </div>
    )
}

export default Carousel;