import profileData from '../data/profileData';

function AboutSection() {
  const { introduction, personalInfo } = profileData;

  return (
    <section id="about" className="section-container bg-primary-dark">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-center">
          <span className="gradient-text">ABOUT ME</span>
        </h2>

        {/* Main Quote */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute -top-8 -left-4 text-8xl text-accent-gold/20 font-serif">"</div>
            <blockquote className="relative text-2xl sm:text-3xl lg:text-4xl font-light text-gray-200 leading-relaxed text-center px-8 py-12">
              {introduction.quote}
            </blockquote>
            <div className="absolute -bottom-8 -right-4 text-8xl text-accent-gold/20 font-serif">"</div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* Name Card */}
          <div className="card-dark text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent-gold/10">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-300">이름</h3>
            <p className="text-xl font-bold text-white">{personalInfo.name}</p>
            <p className="text-sm text-gray-400 mt-1">{personalInfo.nameEn}</p>
          </div>

          {/* Profession Card */}
          <div className="card-dark text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent-gold/10">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-300">직업</h3>
            <p className="text-xl font-bold gold-accent">{personalInfo.profession}</p>
          </div>

          {/* Location Card */}
          <div className="card-dark text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent-gold/10">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-300">활동 지역</h3>
            <p className="text-xl font-bold text-white">{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
