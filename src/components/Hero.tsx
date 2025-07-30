import { Logo } from './Logo';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#2563eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <Logo className="h-12 w-auto" />
        <nav className="hidden md:flex space-x-8">
          <a href="#curated" className="text-gray-600 hover:text-blue-600 transition-colors">Curated Picks</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 mb-6 max-w-4xl leading-tight">
          Discover the coolest things happening in India.
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl">
          Trends. Tools. Innovations. All in one place.
        </p>

        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          onClick={() => window.open('https://wa.me/YOUR-NUMBER', '_blank')}
        >
          Start a WhatsApp Chat
        </Button>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
}