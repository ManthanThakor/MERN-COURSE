import React from "react";

const App = () => {
  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Card Title 1",
      description: "This is a description for card 1.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Card Title 2",
      description: "This is a description for card 2.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Card Title 3",
      description: "This is a description for card 3.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-black text-white p-4 text-center">
        <h1 className="text-3xl font-bold">
          Welcome to React with Tailwind CSS
        </h1>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
