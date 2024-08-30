'use client';

import { useState } from 'react';
import supabase from '../db/supabaseClient.js';
import Button from '../button';
import React from 'react';

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const formProps = Object.fromEntries(formData);

      // Insert form data into Supabase contacts table
      const { error } = await supabase.from('contacts').insert([{ formProps }]);

      if (error) {
        throw new Error(error.message);
      }

      setIsModalOpen(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-full min-h-[400px] content-around items-center pl-12 lg:w-1/2">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto grid gap-4 md:gap-4">
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="sr-only">
              الإسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="الإسم"
              className="w-full rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              البريد الألكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="البريد الألكتروني"
              className="w-full rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
              required
            />
          </div>
        </div>

        <div className="py-4 md:py-12">
          <label htmlFor="message" className="sr-only">
            محتوى الرسالة
          </label>
          <textarea
            id="message"
            name="message"
            cols={30}
            rows={10}
            placeholder="محتوى الرسالة"
            className="w-full resize-none rounded-[10px] bg-[#EBE9E9] px-8 py-4 outline-none"
            required
          ></textarea>
        </div>

        <div className="w-full md:w-auto">
          <Button label={isSubmitting ? 'Sending...' : 'أرسال'} />
        </div>
      </form>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="mx-auto max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">شكراً على رسالتكم!</h2>
            <p className="mb-4 text-gray-700">
              سنعاود التواصل معكم قريباً. أطيب التحيات.
            </p>
            <button
              onClick={closeModal}
              className="rounded bg-blueShade px-4 py-2 text-white"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
