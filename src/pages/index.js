import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="text-center py-12 bg-white">
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto"
        />
        <h1 className="text-4xl font-semibold mt-4 text-gray-800">
          Hello, I'm Johnson
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          I'm a passionate developer creating amazing projects with Next.js and
          Tailwind CSS.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
          >
            View My Projects
          </a>
        </div>
      </div>
    </Layout>
  );
}
