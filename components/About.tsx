"use client";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-md my-8">
      <h1 className="text-3xl font-bold text-center text-green-400 mb-6">🌍 About This Project</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">Our Mission</h2>
        <p className="mt-2 text-gray-300">
          Climate change is one of the biggest challenges of our time. Our goal is to empower individuals
          to understand and reduce their **carbon footprint** by providing an easy-to-use tool that
          calculates emissions from daily activities like **transport, electricity usage, meals, and waste**.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">How It Works</h2>
        <p className="mt-2 text-gray-300">
          This web app estimates your **annual carbon footprint** based on your lifestyle choices.  
          - 🚗 **Transport**: Emissions from travel (flight, car, bike, public transport)  
          - ⚡ **Electricity**: Energy consumption at home  
          - 🍽️ **Meals**: Food-related emissions  
          - ♻️ **Waste**: Impact of waste production  
          <br />
          After calculating your footprint, our **AI-powered assistant** provides personalized tips to help you reduce emissions!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">Built in a Hackathon 🚀</h2>
        <p className="mt-2 text-gray-300">
          This project was developed in a **hackathon**, a time-limited coding competition where we aimed to build a meaningful solution 
          for environmental sustainability. In just **24 hours**, we built this interactive carbon calculator from scratch.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-300">Tech Stack</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-300">
          <li>🌐 **Next.js** – Frontend & API handling</li>
          <li>⚡ **Carbon Interface API & RapidAPI** – Emissions data</li>
          <li>🧠 **OpenAI API** – AI-powered tips for reducing carbon footprint</li>
          <li>💾 **LocalStorage** – Temporary user data storage</li>
          <li>🎨 **Tailwind CSS** – Modern and responsive UI</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold text-green-300">Join the Movement 🌱</h2>
        <p className="mt-2 text-gray-300">
          Small actions lead to big changes! **Try the calculator** and start reducing your impact on the planet today.
        </p>
      </section>
    </div>
  );
}
