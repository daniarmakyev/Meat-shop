import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="pt-4">
      <div className="container">
        <Image
          src="/logo.png"
          alt="Досторкон логотип"
          width={100}
          height={100}
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
