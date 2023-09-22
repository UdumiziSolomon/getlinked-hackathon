import Form from '../../components/form/Form'
import Getintouch from '../../components/getintouch/Getintouch'
import './contact.css'

const Contact = () => {
  return (
    <main className='contact'>
        <section className='contactCont'>
          <Getintouch/>
          <Form/>
        </section>
    </main>
  )
}

export default Contact
