import { CSSTransition } from "react-transition-group";

import bg from "../assets/bg.svg";
import manabeLogo from "../assets/logo.svg";
import BurgerMenu from "../assets/burgermenu.svg?react";
import DiscordLogo from "../assets/discord.svg?react";

import "../styles/mobilemenu.css";
import { Fragment, useEffect, useState, type ReactElement } from "react";
import { createPortal } from "react-dom";
import { links } from "../resources/links.ts";

export default function MobileMenu(): ReactElement {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  function renderMenu(): ReactElement {
    return (
      <Fragment>
        <CSSTransition in={open} timeout={500} unmountOnExit classNames="sidemenubackdrop">
          <button
            className="w-full h-screen bg-black fixed left-0 top-0 cursor-default z-30"
            onClick={() => setOpen(false)}
            style={{
              background: `url(${bg.src})`,
              backgroundColor: "#000",
            }}
          >
            <div
              className="blur-[192px] w-[1000px] h-[1100px] -rotate-45 absolute -top-1/3 -right-[200px] -z-10"
              style={{
                background:
                  "conic-gradient(#0A0C10 0%, #000000 19%, rgba(0, 193, 137, 0.6) 51%, #AFDAB8 54%, rgba(65, 107, 159, 0.53) 75%)",
              }}
            ></div>
          </button>
        </CSSTransition>

        <CSSTransition in={open} timeout={500} unmountOnExit classNames="sidemenu">
          <div className="fixed bg-white/5 w-10/12 h-[calc(100svh-4rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-xl border border-white/15 p-6 flex flex-col justify-between items-end">
            <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <a className="contents" href="#top" aria-label="Inicio">
                <img src={manabeLogo.src} alt="Logo de manabe" />
              </a>

              {/* Close button */}

              <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="self-end w-full">
              <nav>
                <ul className="flex flex-col gap-2 font-bold text-mobile-h3">
                  {links.map((link, index) => (
                    <li key={index} className="flex justify-end border-b border-white pb-1">
                      <a href={link.url} className="flex gap-2" onClick={() => setOpen(false)}>
                        {link.name}
                        {link.icon && <link.icon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            </div>
            <div className="flex gap-4 font-kelsi">
              <a href="https://discord.gg/y8P7mpDTcB" target="_blank" referrerPolicy="no-referrer" aria-label="Discord">
                <DiscordLogo className="text-primary" />
              </a>
              <a className="bg-primary text-white px-5 py-2 rounded-xl text-caption font-kelsi" href="https://guia.manabe.es">Empezar</a>
            </div>
          </div>
        </CSSTransition>
      </Fragment>
    );
  }
  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <BurgerMenu />
      </button>

      {createPortal(renderMenu(), document.body)}
    </div>
  );
}
