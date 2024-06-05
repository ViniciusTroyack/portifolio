"use client";
import { useState } from "react";
import { Nav } from "./styles";
import Image from "next/image";
import avatar from "../../assets/avatar.png";
import luna01 from "../../assets/luna01.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <a className="logoVini">
        <Image
          src={avatar}
          width={48}
          height={48}
          alt="Picture of vini the author"
        />
      </a>
      <div
        className={`menu ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a>Hey</a>
        </li>
        <li>
          <a>Sobre mim</a>
        </li>
        <li>
          <a>Projetos</a>
        </li>
        <li>
          <a>Contato</a>
        </li>
      </ul>
      <a className="lunaImgNav">
        <Image src={luna01} width={96} height={43} alt="Luna the cat" />
      </a>
    </Nav>
  );
};
