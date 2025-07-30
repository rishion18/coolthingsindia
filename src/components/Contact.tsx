import { Button } from './ui/button';
import { MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-8">
          Let's Talk
        </h2>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Have questions about India's innovation scene? Want to share something cool? 
          We'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            onClick={() => window.open('https://wa.me/YOUR-NUMBER', '_blank')}
          >
            <MessageCircle className="w-5 h-5" />
            Message Us on WhatsApp
          </Button>

          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="w-5 h-5" />
            <span className="text-lg">contact@coolthingsindia.in</span>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}