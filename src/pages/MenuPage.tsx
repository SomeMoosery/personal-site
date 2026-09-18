import Menu from '../components/Menu';
import MarginPhotos from '../components/MarginPhotos';
import { MENU_PHOTOS } from '../data/photos';

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-16 relative">
      <Menu />
      <MarginPhotos photos={MENU_PHOTOS} />
    </div>
  );
}
