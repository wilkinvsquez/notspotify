import { create } from "zustand";
import type { PlayerState } from "../interfaces/states/PlayerState";

export const usePlayerStore = create<PlayerState>((set) => ({
    currentTrack: null,
    isPlaying: false,
    setTrack: (track) => set({ currentTrack: track }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));