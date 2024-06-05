"use client";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0d0d0d;
  color: white;
  font-weight: 700;
  position: sticky;
  top: 0;

  .logoVini {
    font-size: 1.5rem;
    margin: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
  }

  ul li {
    list-style: none;
  }

  ul li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.5rem;
  }

  ul li a:not(.active):hover {
    color: var(--main-purple);
  }

  .menu {
    display: none;
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    width: 2.25rem;
    height: 2rem;
    cursor: pointer;
  }

  .menu span {
    height: 0.25rem;
    width: 90%;
    background-color: var(--main-purple);
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    position: absolute;
  }

  .menu span.bar1 {
    top: 0;
  }

  .menu span.bar2 {
    top: 0.75rem;
  }

  .menu span.bar3 {
    top: 1.5rem;
  }

  .menu.open .bar1 {
    transform: rotate(45deg);
    top: 0.75rem;
  }

  .menu.open .bar2 {
    opacity: 0;
  }

  .menu.open .bar3 {
    transform: rotate(-45deg);
    top: 0.75rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    .logoVini {
      margin: 1rem auto;
    }

    .lunaImgNav {
      display: none;
    }

    .menu {
      display: flex;
      justify-content: space-around;
      top: 1.5rem;
      right: 1rem;
    }

    ul {
      display: none;
      flex-direction: column;
      width: 100%;
      margin-bottom: 0.25rem;
    }

    ul.open {
      display: flex;
    }

    ul li {
      width: 100%;
      text-align: center;
    }

    ul li a {
      margin: 0.2rem 0.5rem;
    }
  }
`;
