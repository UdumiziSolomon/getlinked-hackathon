import './form.css'

const SmForm = () => {
  return (
    <section className='smform'>
        <div className='smform__head'>
            <div>
                <h4>Questions or need </h4>
                <h4>assistance?</h4>  
                <h4>Let us know about it</h4> 
            </div>
              
            <div>
                <img src='' alt=''/>
            </div>
        </div>


        <div>
            <p>Email us below to any question related </p>
            <p>to our event</p>
        </div>
          

          <div>
            <input type='text' placeholder="Team's Name"/>
            <input type='text' placeholder='Topic'/>
            <input type='email' placeholder='Email'/>

            <textarea type='text' placeholder='Message'/>
          </div>

          <div>
            
          </div>
           
    </section>
  )
}

export default SmForm
