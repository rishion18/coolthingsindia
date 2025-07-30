import { Search, Share2, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "We Curate",
    description: "We track India's latest tech, culture & innovation.",
    color: "text-orange-600 bg-orange-100"
  },
  {
    icon: Share2,
    title: "We Share",
    description: "We publish simple summaries so you're always in the loop.",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: MessageCircle,
    title: "We Advise",
    description: "Message us on WhatsApp for instant tips.",
    color: "text-green-600 bg-green-100"
  }
];

export function HowWeHelp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            How We Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple three-step process to keep you informed about India's innovation landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Step connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-200 transform -translate-y-1/2" 
                       style={{ marginLeft: '2rem' }}>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}