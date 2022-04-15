import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mzbjaqjw");
  if (state.succeeded) {
      return <p>Message sent!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">From:
      <input
        id="email"
        type="email" 
        name="email"
        placeholder=''
      />
      </label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <hr />
      <div className='me' >
        <p>To: Justin Garcia</p>
      </div>
      <hr />
      <textarea
        id="message"
        name="message"
        placeholder='Message'
        rows='5'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}
export const FormSpree = () => {
  return (
    <>
    <h3 className='formTitle'>Wanna talk more?</h3>
    <hr />
    <ContactForm />
    </>
  );
}