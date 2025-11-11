import { useEffect } from 'react';
import profileData from './data/profileData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import QualificationsSection from './components/QualificationsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { meta, enabledSections } = profileData;

  // Set document title and meta tags
  useEffect(() => {
    document.title = meta.title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = meta.description;
      document.head.appendChild(meta);
    }

    // Set meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.setAttribute('content', meta.author);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'author';
      meta.content = meta.author;
      document.head.appendChild(meta);
    }
  }, [meta]);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - Always shown */}
        <HeroSection />

        {/* About Section - Conditionally rendered */}
        {enabledSections.about && <AboutSection />}

        {/* Qualifications Section - Conditionally rendered */}
        {enabledSections.qualifications && <QualificationsSection />}

        {/* Awards Section - Conditionally rendered */}
        {enabledSections.awards && <AwardsSection />}

        {/* Contact Section - Conditionally rendered */}
        {enabledSections.contact && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
