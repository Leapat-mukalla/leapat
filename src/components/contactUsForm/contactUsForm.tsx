'use client';

import { LoaderCircle, SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroSvg from "../hero-svg";
import React from "react";
import { useState } from "react";
import {
  trackContactFormSubmit,
  trackContactFormSuccess,
  trackContactFormError,
} from "@/lib/analytics";

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

      // Track form submission
      trackContactFormSubmit({
        name: formProps.name as string,
        email: formProps.email as string,
        phone: formProps.phone as string,
      });

      // Insert form data into Supabase contacts table
      // const { error } = await supabase.from('contacts').insert([{ formProps }]);

      // if (error) {
      // throw new Error(error.message);
      // }

      // Track successful form submission
      trackContactFormSuccess("contact");
      setIsModalOpen(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);

      // Track form error
      trackContactFormError(errorMessage, "contact");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="z-10 flex h-full min-h-[400px] flex-col content-around items-center lg:w-1/2">
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-lg gap-4 md:gap-4"
      >
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        <Button>
          {isSubmitting ? (
            <LoaderCircle
              height={40}
              width={40}
              strokeWidth={1.5}
              className="m-4"
            />
          ) : (
            // <SendHorizontal
            //   height={40}
            //   width={40}
            //   strokeWidth={1.5}
            //   className="m-4 rotate-180"

            // />
            <></>
          )}
          {isSubmitting ? "جاري الإرسال" : "إرسال"}
        </Button>
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
              className="rounded bg-primary px-4 py-2 text-white"
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
