export interface PlayerState {
    currentTrack: string | null;
    isPlaying: boolean;
    setTrack: (track: string) => void;
    togglePlay: () => void;
}