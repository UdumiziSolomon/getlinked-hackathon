import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { questions } from './data';

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const clickHandler = (index) => {
        if(selected === index) {
            setSelected(null);
            return;
        }

        setSelected(index)
    }

    return (
        <div className={styles.container}>
            <div>
                <div>
                    <p className={styles.title}>Frequently Ask <span>Question</span></p>
                    <p className={styles.desc}>We got answers to the questions that you might want to ask about <span>getlinked Hackathon 1.0</span></p>
                    <div className={styles.questions}>
                        {
                            questions.map((question, index) => (
                                <div className={styles.question} key={index}>
                                    <div>
                                        <p className={styles.desc}>{question}</p>
                                        <span onClick={() => clickHandler(index)}>+</span>
                                    </div>
                                    { selected === index && 
                                        <p className={styles.desc}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum inventore nesciunt quae sed debitis voluptas nulla reiciendis iusto sit. Molestias esse corporis sed neque voluptatibus beatae, ullam sapiente maxime!
                                        </p> 
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className={styles.second}>
                <img src="resources/images/faq.png" alt="faq.png" />
            </div>
        </div>
    )
}

export default FAQ;