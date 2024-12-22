import React from "react";

const Container = () => {
  const items = [
    {
      url: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Investment Strategies for 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Best Savings Accounts for High Returns in 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1614787296891-d1b2b1aced36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "The Top Cryptocurrencies to Watch in 2024",
    },
    {
      url: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alex Taylor",
      date: "16 Sep",
      text: "Top 10 Personal Finance Apps for Managing Your Money in 2024",
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gray-100 pt-5 animate-fade-in">
        <div className="container mx-auto -ml-3">
          {/* Title Section */}
          <h1 className="text-4xl font-bold text-orange-400 mb-2">Finance</h1>
          {/* Subtitle Section */}
          <p className="text-md text-gray-600 font-medium">
            Stay ahead with the latest trends, tips, and strategies in finance
            to help you manage your wealth, investments, and financial goals.
          </p>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[480px] -ml-3 -mr-3 mt-2 rounded-md animate-fade-in"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1641979646075-90976a180ad3?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Text Overlay */}
        <div className="absolute bottom-4 left-4 w-[45%]">
          <h1 className="text-2xl font-bold text-white">
            {`Top 10 Financial Moves You Can't Miss in 2024`}
          </h1>
          <p className="text-md mt-2 text-white font-medium text-gray-300">
            Discover the best financial strategies and tools to optimize your
            money, increase your savings, and make smarter investment decisions.
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
