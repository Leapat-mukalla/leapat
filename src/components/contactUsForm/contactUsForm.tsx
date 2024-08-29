'use client';

import { useState } from 'react';
import supabase from '../db/supabaseClient.js';
import Button from '../button';
import React from 'react';

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Insert form data into Supabase contacts table
      const { data, error } = await supabase
        .from('contacts')
        .insert([{ name, email, message }]);

      if (error) {
        throw new Error(error.message);
      }

      // If successful, reset the form and show success message
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full min-h-[400px] content-around items-center pl-12">
      <form onSubmit={handleSubmit} className="flex-col space-y-4">
      {success && (
          <p className="text-green-500">
            شكراً على رسالتكم! سنعاود التواصل معكم قريباً. أطيب التحيات.
          </p>
        )}
        {error && <p className="text-red-500">{error}</p>}


        <div className="flex">
          <div className="flex-col ml-4">
            <label htmlFor="name" className="sr-only">الإسم</label>
            <input
              type="text"
              id="name"
              placeholder="الإسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
              required
            />
          </div>
          <div className="flex-col ml-4">
            <label htmlFor="email" className="sr-only">البريد الألكتروني</label>
            <input
              type="email"
              id="email"
              placeholder="البريد الألكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
              required
            />
          </div>
        </div>

        <div className="py-12">
          <label htmlFor="message" className="sr-only">محتوى الرسالة</label>
          <textarea
            id="message"
            cols={68}
            rows={10}
            placeholder="محتوى الرسالة"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-[10px] bg-[#EBE9E9] py-4 px-8 outline-none"
            required
          ></textarea>
        </div>

        <Button label={isSubmitting ? 'Sending...' : 'أرسال'} />
      </form>
    </div>
  );
};

export default ContactUsForm;
