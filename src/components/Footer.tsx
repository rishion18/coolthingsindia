export function Footer() {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-6 md:mb-0">
            © 2025 Cool Things India. All rights reserved.
          </div>
          
          <nav className="flex space-x-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}