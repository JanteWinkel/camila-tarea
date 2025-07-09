// pages/index.tsx
import AudioPlayer from '../components/audio';


export default function Reproductor() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
     
      <section className="mb-8">
        <AudioPlayer 
          src="/bebe.mp3" 
          className="mb-4" 
        />
      </section>
    </div>
  );
}