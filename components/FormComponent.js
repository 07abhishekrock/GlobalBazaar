import React from 'react';
import { useContext , useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/login.module.scss';

const FormContext = React.createContext();
const ErrorContext = React.createContext();
const PageNumberContext = React.createContext();

const PageComponent = (props)=>{
    const [current_page , set_current_page] = useContext(PageNumberContext);
    const [error , ] = useContext(ErrorContext);
    const [form_value , ] = useContext(FormContext);
    return (
        <div className={styles['form-page']}>
            {props.children}

            {
                props.pageIndex !== 0 ? 
                    <span className={styles['back-btn']} onClick={()=>{
                        set_current_page(current_page - 1);
                    }}>Go Back</span> : null
            }

            <button onClick={()=>{
                if(props.pageIndex === props.totalPages - 1){
                    //this is the ending page
                    e.preventDefault();
                    //submit code comes here
                }
                else{
                    set_current_page(current_page + 1); 
                }
            }}>{props.btnText}</button>
        </div>
    )
}

const FormComponent = (props)=>{
    const [form_value , set_form_value] = useState(props.formFieldsArray)
    const [current_page , set_current_page] = useState(0);
    const [error , set_error] = useState(1);
    return(
        <form className={styles['form']}>
            <FormContext.Provider value={[form_value , set_form_value]}>
                <ErrorContext.Provider value={[error , set_error]}>
                    <PageNumberContext.Provider value={[current_page , set_current_page]}>
                        <div className={styles['form-pages']} style={{transform:`translateX(${-1 * current_page * 100}%)`}}>
                            {props.children}
                        </div>
                    </PageNumberContext.Provider>
                </ErrorContext.Provider>
            </FormContext.Provider>
        </form>
    )
}

const PasswordInputComponent = (props)=>{
    const [form_value , set_form_value] = useContext(FormContext);
    const [, set_error] = useContext(ErrorContext);
    const [local_error , set_local_error] = useState({
        error : false,
        errorValue : ''
    });
    const [confirmPasswordField , set_confirmPasswordField] = useState('');
    let id = useRef(uuidv4());

    const changeValueInContext = (new_value)=>{
        let old_form_value = {...form_value};
        old_form_value[props.keyName] = new_value;
        set_form_value(old_form_value);
    }
    
    const toggleError = (error , errorValue)=>{
        set_error(Number(error));
        set_local_error({
            error , 
            errorValue
        })
    }

    const checkError = (new_value , conf_value)=>{
        if(new_value && new_value === '' && props.required === true){
            toggleError(true , 'Password cannot be empty');
        }
        else if(new_value && new_value.length < props.minLength){
            toggleError(true , `Password must be minimum ${props.minLength} characters`);
        }
        else if(props.hasConfirmPasswordField === true && conf_value !== form_value[props.keyName]){
            toggleError(true , 'Passwords Do Not Match');
        }
        else{
            toggleError(false , '');
        }
    }

    return (
        <>
            <div className={styles["form-input-group"]}>
                <label htmlFor={"password-"+id.current}>{props.label}</label>
                <input className={styles['form-input']} type="password" id={"password-"+id.current}
                value={form_value[props.keyName]} 
                onChange={(e)=>{
                    changeValueInContext(e.target.value);
                    checkError(e.target.value);
                }}
                />
            </div>
            {
            props.hasConfirmPasswordField === true ? 
                <div className={styles["form-input-group"]}>
                    <label htmlFor={"conf-password-"+id.current}>Confirm {props.label}</label>
                    <input className={styles['form-input']} type="password" id={"conf-password-"+id.current}
                    value={confirmPasswordField} 
                    onChange={(e)=>{
                        set_confirmPasswordField(e.target.value);
                        checkError(null,e.target.value);
                    }}
                    />
                    <i error={(local_error.error || false).toString()}>{local_error.errorValue}</i>
                </div> : null
            }
        </>
    )

}

const EmailInputComponent = (props)=>{
    const [form_value , set_form_value] = useContext(FormContext);
    const [, set_error] = useContext(ErrorContext);
    const emailRegex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    let id = useRef(uuidv4());
    const [local_error , set_local_error] = useState({
        error : false,
        errorValue : '' 
    });

    const changeValueInContext = (new_value)=>{
        let old_form_value = {...form_value};
        old_form_value[props.keyName] = new_value;
        set_form_value(old_form_value);
    }

    const toggleError = (error , errorValue)=>{
        set_error(Number(error));
        set_local_error({
            error,
            errorValue
        })
    }

    const checkError = (new_value)=>{
        if(new_value === '' && props.required === true){
            toggleError(true , 'Empty Field is not Valid.')
        }
        else if(!emailRegex.test(new_value)){
            toggleError(true , 'Email is not Valid')
        }
        else{
            toggleError(false , '');
        }
    }

    return (
        <div className={styles["form-input-group"]}>
            <label htmlFor={"email-"+id.current}>{props.label}</label>
            <input className={styles['form-input']} type="email" id={"email-"+id.current} 
            value={form_value[props.keyName]}
            onChange={(e)=>{
                changeValueInContext(e.target.value);
                checkError(e.target.value);
            }} 
            />
            <i error={(local_error.error || false).toString()}>{local_error.errorValue}</i>
        </div>
    )
}

const ContactInputComponent = (props)=>{
    const [form_value , set_form_value] = useContext(FormContext);
    const [, set_error] = useContext(ErrorContext);
    const numberRegex =/^[1-9][0-9]*[0-9]$/m; 
    let id = useRef(uuidv4());
    const [local_error , set_local_error] = useState({
        error : false,
        errorValue : '' 
    });

    const changeValueInContext = (new_value)=>{
        let old_form_value = {...form_value};
        old_form_value[props.keyName] = new_value;
        set_form_value(old_form_value);
    }

    const toggleError = (error , errorValue)=>{
        set_error(Number(error));
        set_local_error({
            error,
            errorValue
        })
    }

    const checkError = (new_value)=>{
        if(new_value === '' && props.required === true){
            toggleError(true , 'Empty Contact is not Valid.')
        }
        else if(!numberRegex.test(new_value) || new_value.length !== 10){
            toggleError(true , 'Contact is not Valid')
        }
        else{
            toggleError(false , '');
        }
    }

    return (
        <div className={styles['form-input-group'].concat(' ' , styles['contact'])}>
            <label htmlFor={"contact-"+id.current}>{props.label}</label>
            <span>+91
                <input className={styles['form-input']} type="text" id={"contact-"+id.current}
                value={form_value[props.keyName]}
                onChange={(e)=>{
                    changeValueInContext(e.target.value);
                    checkError(e.target.value);
                }}/> 
            </span>
            <i error={(local_error.error || false).toString()}>{local_error.errorValue}</i>
        </div>
    ) 
}


export default FormComponent;
export {EmailInputComponent , PasswordInputComponent , ContactInputComponent , PageComponent};