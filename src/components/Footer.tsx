export default function Footer() {
    return (
      <footer className="bg-transparent py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} GameVerse. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
            <a href="/privacy" className="hover:text-white transition">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    );
  }
  