// src/ContactUs.js

function ContactUs() {
    const [name, setName] = useState('');

    return (
      <div>
        <h2>Contact Us</h2>
        <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' />
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone' type='text' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default ContactUs;