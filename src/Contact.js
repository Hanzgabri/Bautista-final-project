import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      alert('Please fill all fields');
    } else {
      alert('Message sent!');
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;