// src/store/gameStore.ts
import { create } from 'zustand';
import { GameState } from '@/types/game';

interface GameStore extends GameState {
  updateBalance: (balance: number) => void;
  placeBet: (amount: number) => void;
  updateReels: (reels: number[][]) => void;
  setWins: (wins: WinLine[]) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  balance: 0,
  bet: 1,
  reels: [],
  wins: [],
  
  updateBalance: (balance) => set({ balance }),
  placeBet: (amount) => set((state) => ({ 
    balance: state.balance - amount,
    bet: amount 
  })),
  updateReels: (reels) => set({ reels }),
  setWins: (wins) => set({ wins })
}));
