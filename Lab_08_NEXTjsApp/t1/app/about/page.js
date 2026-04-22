export default function About() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">About Us</h2>
      <p className="text-gray-700 text-base leading-relaxed mb-4">
        MyNextApp is a sample application created as part of the Full Stack Programming
        Lab 08 at Air University. It demonstrates how to build a multi-page Next.js
        application with reusable components and global layout.
      </p>
      <p className="text-gray-700 text-base leading-relaxed">
        This app uses Next.js 14 with the App Router, Tailwind CSS for styling,
        and shared Header and Footer components via layout.js.
      </p>
    </div>
  );
}
