import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const picks = [
  {
    title: "Top 5 AI Tools by Indian Startups",
    excerpt: "Discover groundbreaking AI solutions developed by innovative Indian companies that are transforming industries globally.",
    category: "Technology"
  },
  {
    title: "Sustainable Fashion Brands Making Waves",
    excerpt: "Meet the eco-conscious fashion labels from India that are redefining style while protecting our planet.",
    category: "Fashion"
  },
  {
    title: "Food Tech Innovations Changing How We Eat",
    excerpt: "From plant-based alternatives to smart cooking solutions, Indian food tech is revolutionizing the dining experience.",
    category: "Food & Tech"
  },
  {
    title: "Digital Art Collectives Pushing Boundaries",
    excerpt: "Explore the vibrant digital art scene in India where creativity meets technology in extraordinary ways.",
    category: "Art & Culture"
  },
  {
    title: "Fintech Solutions for Rural India",
    excerpt: "Innovative financial technologies that are bringing banking and payments to every corner of the country.",
    category: "Finance"
  },
  {
    title: "EdTech Platforms Transforming Learning",
    excerpt: "Educational technology companies that are making quality education accessible to millions of Indian students.",
    category: "Education"
  }
];

export function CuratedPicks() {
  return (
    <section id="curated" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Curated Picks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-selected stories about the most interesting developments across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {picks.map((pick, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-white"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {pick.category}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {pick.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pick.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
                  onClick={() => window.location.href = '#'}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}