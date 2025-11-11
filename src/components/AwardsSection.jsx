import profileData from '../data/profileData';

function AwardsSection() {
  const { awards } = profileData;

  const getRankColor = (rank) => {
    if (rank.includes('1위')) return 'text-yellow-400 border-yellow-400';
    if (rank.includes('2위')) return 'text-gray-300 border-gray-300';
    if (rank.includes('3위')) return 'text-amber-600 border-amber-600';
    return 'text-accent-gold border-accent-gold';
  };

  return (
    <section id="awards" className="section-container bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-center">
          <span className="gradient-text">AWARDS</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          대회 수상 경력
        </p>

        {/* Awards Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-gold/50 via-accent-gold/20 to-transparent"></div>

          {/* Awards List */}
          <div className="space-y-12">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="card-dark group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/20">
                    {/* Year Badge */}
                    <div className={`inline-block px-4 py-1 mb-4 text-sm font-bold bg-accent-gold/10 rounded-full ${
                      index % 2 === 0 ? 'lg:float-right' : 'lg:float-left'
                    }`}>
                      <span className="gold-accent">{award.year}</span>
                    </div>

                    <div className="clear-both">
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-gold transition-colors">
                        {award.title}
                      </h3>

                      {/* Category */}
                      <p className="text-gray-400 mb-4">
                        {award.category}
                      </p>

                      {/* Rank Badge */}
                      <div className={`inline-flex items-center px-4 py-2 border-2 rounded-lg ${getRankColor(award.rank)}`}>
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold text-lg">{award.rank}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="hidden lg:flex w-2/12 justify-center items-center">
                  <div className="relative z-10 w-8 h-8 bg-accent-gold rounded-full shadow-lg shadow-accent-gold/50 flex items-center justify-center">
                    <div className="w-3 h-3 bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trophy Icon at Bottom */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <svg
              className="w-20 h-20 text-accent-gold animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1 1 0 00-1 1v.5a1 1 0 001 1h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1 1 0 001-1v-.5a1 1 0 00-1-1H4a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
            </svg>
            <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
