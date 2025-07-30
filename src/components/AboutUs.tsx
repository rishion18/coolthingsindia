export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
          About Us
        </h2>
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
            Cool Things India is a passion project to showcase innovation and creativity across India. 
            We help people discover new ideas, startups, and opportunities through curated content and conversations.
          </p>
          
          <p className="text-base text-gray-600">
            Our mission is to bridge the gap between India's incredible innovation ecosystem and curious minds 
            who want to stay ahead of the curve.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-12 space-x-4">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </section>
  );
}