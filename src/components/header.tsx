
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl font-bold text-primary">
            Nhlawuleko
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
