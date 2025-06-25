import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO at TechStart',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
      content: 'John delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The project was completed on time and within budget.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg',
      content: 'Working with John was a game-changer for our team. His ability to translate complex requirements into elegant solutions is remarkable. Highly recommended for any serious development project.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'Creative Studios',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg',
      content: 'John perfectly bridged the gap between design and development. His understanding of user experience principles and technical implementation made our collaboration seamless and productive.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Startup Founder',
      company: 'NextGen Solutions',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
      content: 'As a startup, we needed someone who could wear multiple hats. John delivered full-stack solutions that scaled with our growth. His strategic thinking and execution are top-notch.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what clients and colleagues 
              have to say about working with me.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-slate-600/30">
              <div className="flex items-center justify-center mb-8">
                <Quote size={48} className="text-blue-400/30" />
              </div>

              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-slate-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-blue-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-300 mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;