import React from "react";

const items = [
  {
    url: "https://plus.unsplash.com/premium_photo-1718043036192-b874bb43c64f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jared Goerge",
    date: "16 Sep",
    text: "12 of the Best-Reviewed Blenders of 2024",
  },
  {
    url: "https://images.unsplash.com/photo-1708403120467-1715bb6840df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jared Goerge",
    date: "16 Sep",
    text: "The Best Luggage of 2024",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1677234147986-1e9f099e4cb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jared Goerge",
    date: "16 Sep",
    text: "The 8 Best-Reviewed Vacuum Mops",
  },
  {
    url: "https://images.unsplash.com/photo-1565538810763-a82d7b5211c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jared Goerge",
    date: "16 Sep",
    text: "Drink the Rainbow: The Best 10 Juicers",
  },
];

const container = () => {
  return (
    <div className="w-full">
      <section className="bg-gray-100 pt-5 animate-fade-in">
        <div className="container mx-auto -ml-3">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            Lifestyle & Home
          </h1>
          {/* Subtitle Section */}
          <p className="text-md text-gray-600 font-medium">
            Everything you need to elevate your living space and shop the latest
            home essentials.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[480px] -ml-3 -mr-3 mt-2 rounded-md animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 w-[45%]">
          <h1 className="text-2xl font-bold text-white">
            Top 10 Best Espresso Machines for Home Use
          </h1>
          <p className="text-md mt-2 text-white font-medium text-gray-300">
            Discover the best espresso machines for home use with our top picks,
            based on real user reviews, that are perfect for brewing quality
            coffee with ease.
          </p>
          <div className="flex flex-row text-xs mt-4 font-medium">
            <p className="text-white mr-5">Jared Goerge</p>
            <p className="text-gray-400">Sep 16 2024</p>
          </div>
        </div>
      </section>
      <section className="mt-2 animate-fade-in">
        <div className="-ml-3 -mr-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {items.map((item, key) => (
              <div className="cursor-pointer" key={key}>
                <img
                  src={item.url}
                  alt="Product 1"
                  className="rounded-md w-full h-44 object-cover mx-auto"
                />
                <div className="flex flex-row text-xs text-gray-700 font-semibold justify-between p-2">
                  <p>{item.name}</p>
                  <p>{item.date}</p>
                </div>
                <p className="text-md text-black font-semibold pr-2 pl-2 hover:text-orange-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default container;
