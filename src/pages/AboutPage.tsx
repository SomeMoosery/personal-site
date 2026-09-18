import About from '../components/About';
import MarginPhotos from '../components/MarginPhotos';
import { ABOUT_PHOTOS } from '../data/photos';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 relative">
      <About />
      <MarginPhotos photos={ABOUT_PHOTOS} />
    </div>
  );
}
