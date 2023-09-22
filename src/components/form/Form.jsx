import './form.css'
import SmForm from './smForm'


const Form = () => {
    return (
      <section className='form'>

        <section className='formCont'>

            <section className='formContMain'>
            <div>
                <h4>Questions or need assistance?</h4>
                <h4>Let us know about it!</h4>
            </div>

            <input type='text' placeholder='First Name'/>
            <input type='email' placeholder='Mail'/>

            <textarea placeholder='Message'/>

            <button>Submit</button>
            </section>


        </section>

        <section className='smScreen'>
            <SmForm/>
        </section>
      </section>
    )
  }
  
  export default Form
