import profileData from '../data/profileData';

function Footer() {
  const { personalInfo, meta } = profileData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark border-t border-primary-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Name */}
          <p className="text-xl font-display font-bold text-white">
            {personalInfo.nameEn}
          </p>

          {/* Profession */}
          <p className="text-sm text-gray-400">
            {personalInfo.profession}
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-accent-gold/50"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Meta */}
          <p className="text-xs text-gray-600">
            {meta.description}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
