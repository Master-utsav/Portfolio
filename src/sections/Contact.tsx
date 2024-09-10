import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '@/hooks/useAlert';
import Alert from '@/components/Alert';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: 'Master Utsav',
          from_email: form.email,
          to_email: 'masterutsavdrive@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_PRIVATE_EMAILJS_PUBLIC_KEY as string,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            text: "I didn't receive your message 😢",
            type: 'danger',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 2000);
        },
      );
  };

  return (
    <section className="c-space my-20 lg:my-28" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className=" text-sm sm:text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="md:mt-6 mt-2 sm:py-0 flex flex-col space-y-3 md:space-y-4">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., utsav jaiswal"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., masterutsavdrive@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
