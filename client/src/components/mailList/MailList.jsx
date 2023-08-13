import React, { useState } from 'react';
import "./mailList.css"

const MailList = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'sent'

  const handleSubscribe = () => {
    if (email.trim() === '') {
      return;
    }

    setStatus('sending');

    // Simulate sending email with a delay
    setTimeout(() => {
      setStatus('sent');
      
      // Reset the status after a delay
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 3000);
  };

  return (
    <div className="mail">
        <h1 className="mailtitle">Save Time, Save Money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you!</span>
        <div className="mailInputContainer">
            <input
              type="text"
              placeholder=" Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'sending' || status === 'sent'}
            />
            <button
              onClick={handleSubscribe}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Subscribe'}
            </button>
        </div>
    </div>
  );
}

export default MailList;
