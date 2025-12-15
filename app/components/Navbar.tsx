import { useEffect, useRef, useState } from "react";

type Props = {
    name : string
    webLink: {description: string, title: string}[]
};

function Navbar({ name, webLink }: Props) {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    function toggleBurger() {
        setIsBurgerOpen(prev => !prev);
        console.log('Burger menu toggled:', !isBurgerOpen);
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
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isBurgerOpen]);

  return (
    <section className="flex justify-between items-center p-4 bg-gray-800 text-white relative">
        <div className="text-3xl">{name}</div>

    
        <div>
            <button onClick={toggleBurger} ref={buttonRef} className="flex flex-col w-10 space-y-2 cursor-pointer md:hidden">
                <span className="h-1 bg-white w-full rounded-full"></span>
                <span className="h-1 bg-white w-full rounded-full"></span>
                <span className="h-1 bg-white w-full rounded-full"></span>
            </button>

            <ul className="hidden md:flex space-x-4">
        {webLink.map((link, index) => (
          <li key={index}>
            <a href={`#${link.description}`}>{link.title}</a>
          </li>
        ))}
        </ul>
        </div>

        {isBurgerOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-gray-800 text-white p-4 md:hidden z-50 border-t border-gray-700"
        >
          <ul ref={menuRef} className="flex flex-col space-y-4 items-center text-2xl">
            {webLink.map((link, index) => (
              <li key={index}>
                <a href={`#${link.description}`} onClick={() => setIsBurgerOpen(false)}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
                    
    </section>
  )
}

export default Navbar