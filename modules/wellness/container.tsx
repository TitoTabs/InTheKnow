import React from "react";

const container = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eSUyMGFuZCUyMHdlbGxuZXNzfGVufDB8MHwwfHx8Mg%3D%3D",
      name: "Jared Goerge",
      date: "16 Sep",
      text: "12 of the Best-Reviewed Hair Mask of 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1532926381893-7542290edf1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jared Goerge",
      date: "16 Sep",
      text: "The Best Whitening Soap of 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jared Goerge",
      date: "16 Sep",
      text: "The 8 Best-Reviewed Moisturizer Serum",
    },
    {
      url: "https://images.unsplash.com/photo-1613892571289-39d5c649887a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jared Goerge",
      date: "16 Sep",
      text: "The Best 10 Collagen",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gray-100 pt-5 animate-fade-in">
        <div className="container mx-auto -ml-3">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            Beauty & Wellness
          </h1>
          {/* Subtitle Section */}
          <p className="text-md text-gray-600 font-medium">
            Discover the latest trends, tips, and products to enhance your
            beauty routine and prioritize your well-being.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[480px] -ml-3 -mr-3 mt-2 rounded-md animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 w-[45%]">
          <h1 className="text-2xl font-bold text-white">
            Top 10 Beauty Products for a Radiant Glow
          </h1>
          <p className="text-md mt-2 text-white font-medium text-gray-300">
            Explore our curated list of must-have beauty essentials, carefully
            selected to help you look and feel your best every day.
          </p>
          <div className="flex flex-row text-xs mt-4 font-medium">
            <p className="text-white mr-5">Jared George</p>
            <p className="text-gray-400">Sep 16, 2024</p>
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
