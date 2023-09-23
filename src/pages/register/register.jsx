import React, {useState} from 'react';
import { useMutation, useQuery } from 'react-query';
import styles from './register.module.css';
import { Header, Modal} from '../../components';

const Register = () => {
    const [categories, setCategories] = useState('')
    const [teamName, setTeamName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')
    const [category, setCategory] = useState('')
    const [size, setSize ] = useState('')

    const getCategories = () => {

    }
    
    const registerUser = async (body) => {
        const  res = await fetch('https://backend.getlinked.ai/hackathon/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        console.log(res)
    }

    const { query } = useQuery("categories", getCategories)
    const { mutationAsync: register } = useMutation(registerUser);


    return (
        <>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.container}>
                {/* <Modal />  */}
                <div className={styles.top}>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '30px'}}>
                        <img src="resources/images/backIcon.png" alt="seatedman.png" width={20} height={20} />
                        <p className={styles.reg}>Register</p>
                    </div>
                    <img src="resources/images/seatedman.png" alt="seatedman.png" width={200} height={200} />
                    <div style={{position: 'relative', padding: '0 40px'}}>
                        <img src="resources/images/pinkstar.png" alt="pinkstar.png" width={13} height={15} className={styles.pinkstar} />   
                        <div className={styles.beacon}>
                            <p className={styles.beaconText}>Be part of this movement!</p>
                            <img src="resources/images/movement.png" alt="movement.png" width={101} height={30} />
                        </div>
                        <p className={styles.title}>CREATE YOUR ACCOUNT</p>
                    </div>
                </div>
                <div className={styles.topDesktop}>
                    <img src="resources/images/seatedmanDesktop.png" alt="seatedman.png" width={600} height={600} />
                </div>
                <div className={styles.bottom}>
                    <div>
                        <div className={styles.heroDesktop}>
                            <p className={styles.register}>Register</p>
                            <div>
                                <div className={styles.beacon}>
                                    <p className={styles.beaconText}>Be part of this movement!</p>
                                    <img src="resources/images/movement.png" alt="movement.png" width={101} height={30} />
                                </div>
                                <p className={styles.title}>CREATE YOUR ACCOUNT</p>
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Team's Name</p>
                                <input type="text" placeholder='Enter the name of your group' className={styles.input} value={teamName} onChange={e => setTeamName(e.target.value)} />
                            </div>
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Phone Number</p>
                                <input type="text" placeholder='Enter your phone number' className={styles.input} value={phone} onChange={e => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.inputGroup}>
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Email</p>
                                <input type="text" placeholder='Enter your email address' className={styles.input} value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Project's Topic</p>
                                <input type="text" placeholder='What is your group project topic' className={styles.input} value={topic} onChange={e => setTopic(e.target.value)} />
                            </div>
                        </div>
                        <div className={styles.selectGroup}>
                            {/* <img src="resources/images/pinkstar.png" alt="pinkstar.png" width={13} height={15} className={styles.pinkstar2} />    */}
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Category</p>
                                <select className={styles.select} onChange={e => setCategory(e.target.value)}>
                                    <option value="1">Select your category</option>
                                    <option value="2">Web Development</option>
                                </select>
                            </div>
                            <div className={styles.inputWrapper}>
                                <p className={styles.label}>Group Size</p>
                                <select className={styles.select} onChange={e => setSize(e.target.value)}>
                                    <option value="1">Select</option>
                                    <option value="2">Web Development</option>
                                </select>
                            </div>
                        </div>
                        <p className={styles.review}>Please review your registration details before submitting</p>
                        <div className={styles.policyWrapper}>
                            <img src="resources/images/checkbox.png" alt="checkbox.png" width={14} height={14} />   
                            <p className={styles.policy}>I agreed with the event terms and conditions
                            and privacy policy</p>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <div className={styles.submit} onPress={() => register({team_name: teamName, phone_number: phone, email: email, project_topic: topic, catory: category, group_size: size, privacy_poclicy_accepted: true})}>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;