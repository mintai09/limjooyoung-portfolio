import profileData from '../data/profileData';

function ContactSection() {
  const { contact, personalInfo } = profileData;

  const contactMethods = [
    {
      id: 'phone',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: '전화',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/-/g, '')}`,
      description: '전화 상담',
    },
    {
      id: 'email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: '이메일',
      value: contact.email,
      href: `mailto:${contact.email}`,
      description: '이메일 문의',
    },
    {
      id: 'instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      label: '인스타그램',
      value: `@${contact.instagram}`,
      href: contact.instagramUrl,
      description: 'SNS 팔로우',
    },
  ];

  return (
    <section id="contact" className="section-container bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title text-center">
          <span className="gradient-text">CONTACT</span>
        </h2>

        <p className="text-center text-gray-400 text-lg mb-16">
          상담 문의는 언제든지 환영합니다
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.id === 'instagram' ? '_blank' : undefined}
              rel={method.id === 'instagram' ? 'noopener noreferrer' : undefined}
              className="group card-dark text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/30"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all duration-300">
                {method.icon}
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">
                {method.label}
              </h3>

              {/* Value */}
              <p className="text-gray-300 font-medium mb-3 break-all">
                {method.value}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                {method.description}
              </p>

              {/* Arrow Icon */}
              <svg
                className="w-5 h-5 mx-auto mt-4 text-accent-gold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all"
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
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pb-8">
          <div className="inline-block">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              지금 바로 상담 신청하세요
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
