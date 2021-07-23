import styles from '../styles/login.module.scss';
import Link from 'next/link';
import FormComponent, { ContactInputComponent, EmailInputComponent , PageComponent, PasswordInputComponent } from "../components/FormComponent"

const Login = ()=>{

    const formFieldsArray = {
        'email' : '',
        'phoneNo' : '',
        'password' : ''
    }


    return (
        <div className={styles['single-page-form-wrapper']}>
            <div className={styles['single-page-highlight']}>
                <div></div>
                <p>Become A Member to get personalised experience of the global bazaar's enormous collection of store items.</p>
            </div>
            <div className={styles['single-page-form']}>
                <h1>Signup</h1>
                <span>Already a Global Bazaar Member ? <Link href={'/login'}>Login</Link></span>
                <FormComponent formFieldsArray={formFieldsArray} submitURL={"/api/v1/users"}>
                    <PageComponent pageIndex = {0} totalPages = {2} btnText={"Next Step"}>
                        <EmailInputComponent keyName="email" label="Email" required={true}/>
                        <ContactInputComponent keyName="phoneNo" label="Phone Number" required={true}/>
                        <PasswordInputComponent keyName="password" label="Password" minLength={8} hasConfirmPasswordField={true} required={true}/>
                    </PageComponent>
                </FormComponent>
            </div>
        </div>
    )
}

export default Signup;