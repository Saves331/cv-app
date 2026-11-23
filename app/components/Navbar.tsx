import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  webLink: { description: string; title: string }[];
};

function Navbar({ name, webLink }: Props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function toggleBurger() {
    setIsBurgerOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isBurgerOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsBurgerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isBurgerOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b-2 border-ink">
      <div className="mx-auto max-w-6xl flex justify-between items-center px-4 md:px-8 h-[72px] relative">
        <a href="#" className="flex items-center gap-3 antiBackDrop">
          <span className="w-4 h-4 rounded-full bg-accent border-2 border-ink" />
          <span className="font-display text-2xl md:text-3xl font-extrabold italic tracking-tight">
            {name}
          </span>
        </a>

        <button
          onClick={toggleBurger}
          ref={buttonRef}
          aria-label="Toggle menu"
          className="flex flex-col justify-center w-11 h-11 gap-1.5 px-2.5 border-2 border-ink rounded-md bg-paper shadow-[3px_3px_0_var(--ink)] cursor-pointer md:hidden antiBackDrop"
        >
          <span className="h-0.5 bg-ink w-full" />
          <span className="h-0.5 bg-ink w-full" />
          <span className="h-0.5 bg-ink w-full" />
        </button>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {webLink.map((link, index) => (
            <li key={index} className="antiBackDrop">
              <a
                href={`#${link.description}`}
                className="text-sm uppercase tracking-[0.18em] font-bold border-b-2 border-transparent pb-1 hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {isBurgerOpen && (
          <div className="absolute top-full left-0 w-full bg-paper border-b-2 border-ink p-6 md:hidden z-50 antiBackDrop">
            <ul
              ref={menuRef}
              className="flex flex-col gap-5 items-center text-sm uppercase tracking-[0.18em] font-bold"
            >
              {webLink.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.description}`}
                    onClick={() => setIsBurgerOpen(false)}
                    className="hover:text-accent"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
