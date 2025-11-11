import profileData from '../data/profileData';

function QualificationsSection() {
  const { qualifications } = profileData;

  return (
    <section id="qualifications" className="section-container bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-center">
          <span className="gradient-text">CAREER & QUALIFICATIONS</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          전문성을 갖춘 자격증과 경력
        </p>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualifications.map((qualification, index) => (
            <div
              key={index}
              className="group relative card-dark transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-gold/20"
            >
              {/* Icon */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-accent-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-white font-medium leading-relaxed group-hover:text-accent-gold transition-colors">
                    {qualification}
                  </p>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent-gold rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default QualificationsSection;
