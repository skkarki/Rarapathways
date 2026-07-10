"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

export default function Header() {
  const closeNavigation = useCallback(() => {
    const nav = document.querySelector("[data-nav]");
    const header = document.querySelector("[data-header]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    if (!nav || !header || !navToggle) return;
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  }, []);

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    if (!header || !nav || !navToggle) return;

    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      header.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) closeNavigation();
    });

    updateHeader();

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, [closeNavigation]);

  return (
    <header className="site-header" data-header>
      <a className="brand" href="#home" aria-label="RaraPathways home">
        <Image
          className="brand-logo"
          src="/Image/Logo.png"
          alt="RaraPathways logo"
          width={42}
          height={42}
          priority
        />
        <span>
          <strong>RaraPathways</strong>
          <small>Global mobility consultancy</small>
        </span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded="false"
        data-nav-toggle
      >
        <span></span>
        <span></span>
      </button>
      <nav className="site-nav" data-nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#countries">Countries</a>
        <a href="#testimonials">Success Stories</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Book Consultation
      </a>
    </header>
  );
}
