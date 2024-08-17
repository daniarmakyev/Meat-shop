import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <a href=""></a>
        <Image src="/logo.png" alt="Досторкон логотип" width={100} height={100} />
      </div>
    </header>
  );
};

export default Header;
