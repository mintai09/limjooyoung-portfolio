import { useEffect, useState } from 'react';
import profileData from '../data/profileData';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { personalInfo, introduction, images } = profileData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `url(${images.profilePhoto})`,
            filter: 'brightness(0.7) contrast(1.1)',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-black mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* English Name */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300 mb-6 tracking-widest">
            {personalInfo.nameEn.toUpperCase()}
          </p>

          {/* Profession */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-12 bg-accent-gold"></div>
            <p className="text-lg sm:text-xl lg:text-2xl gold-accent font-semibold tracking-wider">
              {personalInfo.profession.toUpperCase()}
            </p>
            <div className="h-px w-12 bg-accent-gold"></div>
          </div>

          {/* Location & Age */}
          <p className="text-base sm:text-lg text-gray-400 mb-12">
            {personalInfo.location} · {personalInfo.age}세
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-accent-gold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50"
          >
            <span className="relative z-10">상담 문의하기</span>
            <svg
              className="relative z-10 ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 mb-2">SCROLL DOWN</span>
            <svg
              className="w-6 h-6 text-accent-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export default HeroSection;
