import './getintouch.css'
import icon from './socialmedia.png'

const Getintouch = () => {

  return (
    <section className='getintouch'>

        <section className='getintouchCont'>

        <h4>Get in touch</h4>

        <div>
            <span>Contact</span>
            <span>Information</span>
        </div>

        <div>
            <span>27, Alara street</span>
            <span>Yaba 100012</span>
            <span>Lagos State</span>
        </div>

        <div>
            <span>Call Us : 07067981819</span>
        </div>

        <div>
            <span>we are open from Monday-Friday</span>
            <span>08:00am - 05:00pm</span>
        </div>

        <span>Share on</span>

        <div>
            <img src={icon} alt='Social Media'/>
        </div>

        </section>
    </section>
  )
}

export default Getintouch
