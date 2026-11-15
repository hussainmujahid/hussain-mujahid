import { Heart, Github, Linkedin, Twitter, Mail, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
const socialLinks = [
  { icon: Github, href: personalInfo.github },
  { icon: Linkedin, href: personalInfo.linkedin },
  { icon: GraduationCap, href: personalInfo.orcid }, // ORCID
  { icon: Mail, href: `mailto:${personalInfo.email}` },
];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
}