import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Check,
  AlertCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const ContactInfo = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
      <div className="p-3 bg-amber-500 bg-opacity-20 rounded-full">
        <Icon className="w-6 h-6 text-amber-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );

  return (
    <div id="contact" className="min-h-screen bg-black py-16 px-4 pt-36">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our programs? Want to learn more about our
            services? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo
              icon={MapPin}
              title="Our Location"
              content="Moh. Ganesh Ganj, Puranpur"
            />
            <ContactInfo
              icon={Phone}
              title="Phone Number"
              content="+91 8363655600"
            />
            <ContactInfo
              icon={Mail}
              title="Email Address"
              content="jrpschool2008@gmail.com"
            />
            <ContactInfo
              icon={Clock}
              title="Working Hours"
              content="9:00 AM - 1:00 PM"
            />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-900/90 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`
                    w-full px-6 py-3 rounded-lg font-medium text-white
                    transition-all duration-300 transform hover:scale-105
                    flex items-center justify-center space-x-2
                    ${
                      status === "loading"
                        ? "bg-gray-600"
                        : "bg-amber-500 hover:bg-amber-600"
                    }
                  `}
                >
                  {status === "loading" && (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  )}
                  {status === "success" && <Check className="w-5 h-5" />}
                  {status === "error" && <AlertCircle className="w-5 h-5" />}
                  <span>
                    {status === "loading"
                      ? "Sending..."
                      : status === "success"
                      ? "Message Sent!"
                      : status === "error"
                      ? "Error Sending"
                      : "Send Message"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
