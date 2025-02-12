import React from "react";

export default function App() {
  return (
    <div className="bg-green-700 text-white">

      {/* Header Section (Landing Page) */}
      <section className="flex flex-col items-center justify-center h-screen bg-green-950 text-white py-16 px-4">
        <h1 className="text-5xl font-bold mb-6">Football Mobile</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto text-center">
          Built out of frustration with FC Mobile and PES Mobile. The ultimate football game experience, crafted just for you .
        </p>
        <a
          href="#features"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full text-xl font-semibold transition-all duration-300"
        >
          Explore Features
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col items-center justify-center py-16 px-4 bg-white text-black min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">App Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="feature-card">
              <img
                src="https://placehold.co/600x400"
                alt="No More Frustration"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">No More Frustration</h3>
              <p>Finally, a football game designed to be fun and fair, without the hassle and limits of other mobile games.</p>
            </div>
            <div className="feature-card">
              <img
                src="https://placehold.co/600x400"
                alt="Build Your Dream Team"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Build Your Dream Team</h3>
              <p>Manage your squad with full control. No microtransactions to stop you from achieving greatness.</p>
            </div>
            <div className="feature-card">
              <img
                src="https://placehold.co/600x400"
                alt="Realistic Gameplay"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold mb-2">Oepn Packs</h3>
              <p>Enjoy a gaming experience like no other with Greedy Packs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="flex flex-col items-center justify-center px-4 py-16 bg-green-950 text-white min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Gameplay</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">
            A fun and realistic football experience for mobile. Here's why it's different.
          </p>
          <img
            src="https://placehold.co/600x400"
            alt="Gameplay"
            className="mx-auto mb-8 rounded-lg"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="flex flex-col items-center justify-center px-4 py-16 bg-white text-black min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Game Screenshots</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 1"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 2"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 3"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 1"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 2"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <img
              src="https://placehold.co/600x400"
              alt="Screenshot 3"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="flex flex-col items-center justify-center py-16 px-4 bg-green-950 text-white min-h-screen text-center">
        <h2 className="text-3xl font-semibold mb-4">Download Football Mobile - Coming Soon</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Experience the game and say goodbye to frustrating mobile football games.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
          {/* iOS Download Button */}
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full text-xl font-semibold transition-all duration-300"
          >
            Play on Web
          </a>
          {/* Android Download Button */}
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full text-xl font-semibold transition-all duration-300"
          >
            Download for Android
          </a>
        </div>
      </section>


      {/* FAQ Section */}
      <section id="faq" className="flex flex-col items-center justify-center py-16 px-4 bg-white text-black min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Frequently Asked Questions</h2>
          <ul className="space-y-8">
            <li className="feature-card">
              <h3 className="text-xl font-bold mb-2">Is the game free to play?</h3>
              <p>Yes! Football Mobile is completely free to download and play. No hidden costs or pay-to-win mechanics.</p>
            </li>
            <li className="feature-card">
              <h3 className="text-xl font-bold mb-2">What platforms is the game available on?</h3>
              <p>The game is available on both Web and Android platforms. No iOS yet.</p>
            </li>
            <li className="feature-card">
              <h3 className="text-xl font-bold mb-2">Are there in-app purchases?</h3>
              <p>No! We believe in fair play and give you everything you need to enjoy the game without paying a dime.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center px-4 py-16 bg-green-950 text-white min-h-screen text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Have any questions or need support? Reach out to our team, and we will get back to you as soon as possible.
        </p>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-8 rounded-full text-xl font-semibold transition-all duration-300"
        >
          Contact Support
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-green-950 text-white text-center">
        <p>&copy; 2025 Football Mobile. All Rights Reserved.</p>
      </footer>

    </div>
  );
}
