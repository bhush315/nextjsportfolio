import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold text-blue-600">About Me</h1>
        <p className="mt-4 text-xl text-gray-700">
          I am a passionate software engineer with a focus on front-end
          technologies and web development. I love creating beautiful and
          functional user interfaces with a strong attention to detail.
        </p>
      </div>
    </Layout>
  );
}
