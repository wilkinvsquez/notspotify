import { useEffect, useRef } from 'react';
import { usePlayerStore } from '../store/player';

export function useAudioPlayer(url?: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const isPlaying = usePlayerStore((state) => state.isPlaying);

    useEffect(() => {
        if (!url) return;

        if (!audioRef.current) {
            audioRef.current = new Audio(url);
        }

        if (isPlaying) audioRef.current.play()
        else audioRef.current.pause();

        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, [url, isPlaying]);

    return audioRef;
}