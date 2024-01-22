"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Cross from "../svgs/Cross";

interface ChangeEvent extends Event {
  target: HTMLInputElement;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mrgnegvr");
  const [successVisible, setSuccessVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const onChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const datam = {
  //     email: formData.email,
  //     message: `Name: ${formData.firstName} ${formData.lastName}. Company: ${formData.company}. Message: ${formData.message}`,
  //   };
  //   try {
  //     // Make the POST request
  //     const result = await postData(datam);

  //     // Handle the result as needed
  //     setSuccessVisible(true);
  //     setTimeout(() => {
  //       setSuccessVisible(false);
  //     }, 3000);
  //   } catch (error: any) {
  //     // Handle errors
  //     console.error("API Error:", error.message);
  //     setErrorVisible(true);
  //     setTimeout(() => {
  //       setErrorVisible(false);
  //     }, 3000);
  //   }
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     company: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  return (
    <div className="isolate px-6 lg:px-8 pt-4">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-sky-50 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 dark:text-sky-500">
          Ready to elevate your digital presence? Let&apos;s connect and bring
          your vision to life! Contact us for expert web and mobile app
          development services. Your success is just a message away 🚀✨
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="firstName"
                onChange={(e) => onChange}
                defaultValue={formData.firstName}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-inherit"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="lastName"
                onChange={(e) => onChange}
                defaultValue={formData.lastName}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-inherit"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                onChange={(e) => onChange}
                defaultValue={formData.company}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-inherit"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => onChange}
                defaultValue={formData.email}
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-inherit"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                onChange={(e) => onChange}
                defaultValue={formData.message}
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-inherit"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            disabled={state.submitting}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form> */}
      {/* Success Popup */}
      {successVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-green-500 bg-opacity-75 flex items-center justify-center">
          <div className="flex">
            <p className="text-white">Success! Your message was sent.</p>
            <button
              className="text-white"
              onClick={() => setSuccessVisible(false)}
            >
              <span className="sr-only">Close menu</span>
              <Cross className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {errorVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-500 bg-opacity-75 flex items-center justify-center">
          <div className="flex">
            <p className="text-white">Error! Something went wrong.</p>
            <button
              className="text-white"
              onClick={() => setErrorVisible(false)}
            >
              <span className="sr-only">Close menu</span>
              <Cross className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
