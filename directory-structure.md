# Directory Structure

royalgames-main/
|
├── src
│   ├── assets/                # React contexts
│   │   ├── images/         # Image files
│   │   ├── fonts/          # Font files
│   │   └── sounds/         # Audio files
│   │
│   ├── context/               # React contexts
│   │
│   ├── components/            # Feature components
│   │   ├── game/              # Game components
│   │   ├── game-list/         # Game selection
│   │   ├── header/            # App header
│   │   ├── header/            # App header

│   │   └── slot/              # Slot game logic
│   │
│   ├── config/
│   │
│   ├── context/               # Static assets
│   │
│   ├── data/                  # React contexts
│   │
│   ├── hooks/                 # React contexts
│   │
│   ├── services/
│   │
│   ├── store/                 # Static assets
│   │
│   ├── styles/                # React contexts
│   │
│   ├── types/                 # React contexts
│   │
│   └── utils/                 # Redux store
│
└── server/                    # Backend source code
    ├── games-data/            # Game configurations
    ├── public/                # Static files
    │   └── assets/            # Static assets
    │      ├── images/         # Image files
    │      ├── fonts/          # Font files
    │      └── sounds/         # Audio files
    │
    └── data/                  # Game assets

## Examples for each directory

### 1. hooks/

```typescript
// src/hooks/useSocket.ts
import { useContext } from 'react';
import { SocketContext } from '@context/socket';

export const useSocket = () => {
  return useContext(SocketContext);
};
```

### 2. utils/

```typescript
// src/utils/assetLoader.ts
import { Assets } from 'pixi.js';
import { GameAssets } from '@types/assets';

export const loadGameAssets = async (gameId: string): Promise<GameAssets> => {
  // Implementation
};
```

### 3. types/

```typescript
// src/types/game.ts
export interface GameConfig {
  id: string;
  name: string;
  // ...other properties
}
```

### 4. store/

```typescript
// src/store/gameStore.ts
import { create } from 'zustand';
import { GameState } from '@types/game';

export const useGameStore = create<GameState>((set) => ({
  // Store implementation
}));
```

### 5. services/

```typescript
// src/services/GameService.ts
import { GameConfig } from '@types/game';
import { apiClient } from '@utils/apiClient';

export class GameService {
  static async loadGame(id: string): Promise<GameConfig> {
    // Implementation
  }
}
```

### 6. context/

```typescript
// src/context/socket.ts
import { createContext } from 'react';
import { io } from 'socket.io-client';
import { SocketConfig } from '@types/socket';

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string);
export const SocketContext = createContext(socket);
```

### 7. config/

```typescript
// src/config/games.ts
import type { GameConfig } from '@types/game';

export const gameConfigs: Record<string, GameConfig> = {
  // Game configurations
};
```

### 8. styles/

```typescript
// src/styles/game.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .game-container {
    @apply w-full flex-1 flex justify-center items-center bg-black;
  }
}
```
