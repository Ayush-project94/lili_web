import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (event) => {
  event.preventDefault();
  setStatus("Sending...");

  const formData = new FormData(formRef.current);

  const templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    course: formData.get("course"),
    contact_method: formData.get("contact_method"),
    message: formData.get("message"),
  };

  console.log("Sending data:", templateParams);

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("EmailJS Response:", response);

    setStatus("Your details have been sent successfully.");
    formRef.current.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus(`Error ${error.status}: ${error.text}`);
  }
};

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase text-brand-blue">
          Get In Touch
        </p>

        <h1 className="mt-2 text-4xl font-black">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Fill in your details and our team will contact you.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto mt-10 grid max-w-3xl gap-5 rounded-2xl border bg-white p-6 shadow-lg md:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm font-bold">
            Full Name
          </label>

          <input
            name="name"
            type="text"
            required
            className="w-full rounded-md border px-4 py-3 outline-none focus:border-brand-blue"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Mobile Number
          </label>

          <input
            name="mobile"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            className="w-full rounded-md border px-4 py-3 outline-none focus:border-brand-blue"
            placeholder="10 digit mobile number"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold">
            Email Address
          </label>

          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border px-4 py-3 outline-none focus:border-brand-blue"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Select Course
          </label>

          <select
            name="course"
            required
            className="w-full rounded-md border bg-white px-4 py-3 outline-none focus:border-brand-blue"
          >
            <option value="">Select a course</option>
            <option value="DCA">DCA</option>
            <option value="PGDCA">PGDCA</option>
            <option value="BCA">BCA</option>
            <option value="BCC">BCC</option>
            <option value="DEO">DEO</option>
            <option value="ADCA">ADCA</option>
            <option value="TALLY">TALLY</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Preferred Contact
          </label>

          <select
            name="contact_method"
            className="w-full rounded-md border bg-white px-4 py-3 outline-none focus:border-brand-blue"
          >
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-bold">
            Message
          </label>

          <textarea
            name="message"
            rows="5"
            className="w-full rounded-md border px-4 py-3 outline-none focus:border-brand-blue"
            placeholder="Write your message"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-brand-blue px-5 py-3 font-bold text-white transition hover:bg-brand-navy md:col-span-2"
        >
          Send Details
        </button>

        {status && (
          <p className="text-center text-sm font-semibold text-brand-blue md:col-span-2">
            {status}
          </p>
        )}
      </form>
    </main>
  );
}