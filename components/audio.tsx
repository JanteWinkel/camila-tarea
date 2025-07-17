// components/AutoPlayAudioPlayer.tsx
import { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
}

export default function AutoPlayAudioPlayer({ 
  src, 
  className,
  loop = false
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = async () => {
      try {
        await audio.play();
      } catch (err) {
        setError('El autoplay fue bloqueado. Haz clic en play para reproducir.');
        console.warn('Autoplay bloqueado:', err);
        audio.controls = true;
      }
    };

    audio.controls = true; 
    audio.loop = loop;

    audio.addEventListener('loadeddata', handlePlay);

    return () => {
      audio.removeEventListener('loadeddata', handlePlay);
    };
  }, [src, loop]);

  return (
    <div className={`${className} flex flex-col gap-2`}>
      <audio
        ref={audioRef}
        autoPlay
        controls
        className="w-full"
      >
        <source src={src} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
      {error && (
        <div className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded">
          {error}
        </div>
      )}
    </div>
  );
}