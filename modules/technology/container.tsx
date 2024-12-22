import React from "react";

const Container = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1732119988788-a4c6840b2ccb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Best-Selling Smart Home Devices of 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1612478120679-5b7412e15f84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Best Noise-Canceling Headphones for 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1672906674626-f58e6885f632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Best Smartphones of 2024: A Complete Guide",
    },
    {
      url: "https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Laptops for Developers in 2024",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gray-100 pt-5 animate-fade-in">
        <div className="container mx-auto -ml-3">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-orange-400 mb-2">
            Technology
          </h1>
          {/* Subtitle Section */}
          <p className="text-md text-gray-600 font-medium">
            Stay ahead with the latest trends, tips, and innovations in
            technology that shape the way we live, work, and connect.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[480px] -ml-3 -mr-3 mt-2 rounded-md animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 w-[45%]">
          <h1 className="text-2xl font-bold text-white">
            {`Top 10 Cutting-Edge Tech Gadgets You Can't Miss`}
          </h1>
          <p className="text-md mt-2 text-white font-medium text-gray-300">
            Discover the latest innovations in technology, handpicked to elevate
            your digital experience and keep you ahead of the curve.
          </p>
          <div className="flex flex-row text-xs mt-4 font-medium">
            <p className="text-white mr-5">Alex Taylor</p>
            <p className="text-gray-400">Dec 23, 2024</p>
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

export default Container;
