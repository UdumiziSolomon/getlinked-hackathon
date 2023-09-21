import React from 'react';
import styles from './Overview.module.css';
import Button from '../../../../components/button/Button';

const Overview = () => {
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <img src="resources/images/idea.png" alt="idea.png" width={200.07} height={217} />
                </div>
                <div className={styles.body}>
                    <div>
                        <p className={styles.title}>Introduction to getlinkedtech <span>Hackathon 1.0</span></p>
                        <img src="resources/images/pinkStar.png" alt="pinkStar.png" width={15} height={15} />
                    </div>
                    <p className={styles.desc}>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src="resources/images/rules.png" alt="rules.png" width={205} height={267} />
                </div>
                <div>
                    <p className={styles.title}>Rules and <span>Guidelines</span></p>
                    <p className={styles.desc}>
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundariesof technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>

            </div>
            <div>
                <div>
                    <img src="resources/images/criteria.png" alt="criteria.png" width={241} height={199.62} />
                </div>
                <div>
                    <p className={styles.title}>Judging Criteria <span>Key attributes</span></p>
                    <p className={styles.desc}><span>Innovation and Creativity:</span>  Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                    <p className={styles.desc}><span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                    <p className={styles.desc}><span>Impact and Relevance:</span>  Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                    <p className={styles.desc}><span>Technical Complexity:</span>   Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.</p>
                    <p className={styles.desc}><span>Adherence to Hackathon Rules:</span>   Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button title='Read More' width='96.35px' height='31.346px' textSize='12px' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;