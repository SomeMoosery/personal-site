import Contact from '../components/Contact';
import MarginPhotos from '../components/MarginPhotos';
import { CONTACT_PHOTOS } from '../data/photos';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 relative">
      <Contact />
      <MarginPhotos photos={CONTACT_PHOTOS} />
    </div>
  );
}
