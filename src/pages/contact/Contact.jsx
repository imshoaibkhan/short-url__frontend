import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-page'>
        <div className="contact-container">
            <h1 className="contact-header">
                get in <span className='highlight'>touch</span>
            </h1>
            <p className="contact-message">
            Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.
            </p>
            <button><a href="mailto:m.shoaibkhan0331@gmail.com">Reach Out</a></button>
        </div>

    </section>
  )
}

export default Contact