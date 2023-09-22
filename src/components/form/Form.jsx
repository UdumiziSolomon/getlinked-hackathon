import './form.css'


const Form = () => {
    return (
      <section className='form'>
        <h4>Questions or need assistance?</h4>
        <h4>Let us know about it!</h4>

        <input type='text' placeholder='First Name'/>
        <input type='email' placeholder='Mail'/>

        <textarea placeholder='Message' rows={5}/>

        <button>Submit</button>
      </section>
    )
  }
  
  export default Form
