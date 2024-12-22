import React, { FC } from "react";
import "./globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body>
        <div className="flex flex-col bg-gray-100">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
