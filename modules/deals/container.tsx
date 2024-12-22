import React from "react";

const Container = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Exclusive Deals You Can't Miss in 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1542992015-4a0b729b1385?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Best Discounted Products for 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Hottest Flash Deals of 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Limited-Time Offers You Need to Know About in 2024",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gray-100 pt-5 animate-fade-in">
        <div className="container mx-auto -ml-3">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-orange-400 mb-2">Deals</h1>
          {/* Subtitle Section */}
          <p className="text-md text-gray-600 font-medium">
            Stay ahead with the latest offers, flash sales, and tips to help you
            save more and get the best value for your money.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[480px] -ml-3 -mr-3 mt-2 rounded-md animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 w-[45%]">
          <h1 className="text-2xl font-bold text-white">
            {`Top 10 Deals You Can't Miss in 2024`}
          </h1>
          <p className="text-md mt-2 text-white font-medium text-gray-300">
            Discover the best deals and discounts available this year, from
            exclusive offers to limited-time sales.
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
