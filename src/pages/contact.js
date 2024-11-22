import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600">Contact Me</h1>
        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            rows="4"
          />
          <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
}
