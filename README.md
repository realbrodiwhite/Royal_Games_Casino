# Royal Games

A modern social casino platform built with React and Node.js, featuring real-time multiplayer slot games with realistic game mechanics and animations.

## 🎮 Features

- **Multiple Slot Games**
  - Egyptian Treasures: Ancient Egypt themed slot with 20 paylines
  - Rock Climber: Adventure themed slot with 9 paylines
  - Each game features unique symbols, animations, and win patterns

- **Real-time Gameplay**
  - WebSocket-based real-time communication
  - Instant updates for wins and balance changes
  - Synchronized game state across sessions

- **Advanced Game Mechanics**
  - Dynamic reel spinning and stopping
  - Multiple payline configurations
  - Configurable bet sizes and coin values
  - Win animations and sound effects
  - Autoplay functionality
  - Turbo spin mode

- **User Management**
  - Guest account system
  - Persistent game progress
  - Virtual currency management
  - Session management

## 🏗️ Technical Architecture

### Frontend (`/src`)

- **React** application with modular component structure
- **PIXI.js** for high-performance game rendering
- **GSAP** for smooth animations
- **Socket.IO** client for real-time communication
- **Redux** for state management
- **SCSS** for styling

### Backend (`/server`)

- **Node.js** + **Express** server
- **Socket.IO** for WebSocket communication
- **SQLite3** database for data persistence
- Game logic processing and validation
- Session management and user tracking

### Game Engine

- Custom slot game engine with:
  - Configurable reels and symbols
  - Dynamic payline evaluation
  - Random number generation
  - Win pattern detection
  - Animation sequencing

## 🛠️ Project Structure

royalgames-main/
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

## 🔧 Setup & Installation

1. **Prerequisites**

   ```bash
   node.js >= 16.x
   npm >= 8.x
   ```

2. **Install Dependencies**

   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd server
   npm install
   ```

3. **Database Setup**

   ```bash
   # The SQLite database will be automatically initialized
   # on first run with required tables
   ```

4. **Running the Application**

   ```bash
   # Start the backend server
   cd server
   npm start

   # In a new terminal, start the frontend
   npm start
   ```

## 🎲 Game Configuration

### Adding New Games

1. Create game configuration in `/server/games-data/`
2. Add game assets in `/server/public/data/`
3. Configure paylines and multipliers
4. Add game entry in frontend game list

### Configuring Existing Games

- Edit payline configurations in game data files
- Modify symbol multipliers and win patterns
- Adjust betting ranges and coin values

## 🔌 API Documentation

### Socket.IO Events

#### Client -> Server

- `login`: User authentication
- `balance`: Request balance update
- `gamestate`: Request game state
- `bet`: Place a bet

#### Server -> Client

- `login`: Authentication response
- `balance`: Balance update
- `gamestate`: Game state update
- `bet`: Bet result

### Database Schema

#### Accounts Table

```sql
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY,
  username TEXT,
  balance REAL,
  key TEXT,
  last_login INTEGER
);
```

#### Gamestates Table

```sql
CREATE TABLE gamestates (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  game_id TEXT,
  reels TEXT,
  bet INTEGER,
  coin_value REAL
);
```

## 🔐 Security

- MD5 hashing for session keys
- SQL injection prevention
- Input validation
- Rate limiting on betting actions
- Secure WebSocket connections

## 🎨 Asset Credits

- Game symbols and animations: Custom designed
- Sound effects: Licensed from [source]
- Font: Google Sans, Archivo Black

## 📝 License

ISC License - See LICENSE file for details

## 👥 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 🤝 Support

For support, email [support@email.com] or join our Slack channel.

## 🎯 Roadmap

[ ] Move all directories listed below from the root and into the app directory

- app
- assets
- components
- config
- context
- data
- hooks
- new
- services
- store
- styles
- types
- utils

[ ] Use comments in all app files and folders below in an explanatory and thorough manner recursively one folder at a time and recursively throughout the app files and directories below taking care to skip node_modules
    [ ] app
    [ ] assets
    [ ] components
    [ ] config
    [ ] context
    [ ] data
    [ ] hooks
    [ ] new
    [ ] services
    [ ] store
    [ ] styles
    [ ] types
    [ ] utils
    [ ] index.js
    [ ] server.rs

[ ] Implement robust data and data relationship structures based on needs in the roadmap
[ ] Switch to Postgres SQL via dotenv
[ ] Complete conversion to Next15
[ ] Finish conversion to Typescript project wide
[ ] Build out data structure so it’s as robust as possible for current and upcoming features
[ ] User accounts with authentication
[ ] Advanced User Account Profile (Reset Password, Change Email, Change Password, Edit Profile)
[ ] Authentication and Security (password resets, two-factor authentication)
[ ] Personalization (store preferences, game history, wallet information)
[ ] User Profiles
[ ] View User Profiles
[ ] Edit User Profiles
[ ] Search for Users and User Profiles
[ ] 3D Avatar Feature (similar to Facebook)
[ ] User Profile Theming (similar to MySpace)
[ ] Add social features (leaderboards, chat)
[ ] Friends Lists (Social Interaction, Shared Experiences, Leaderboards)
[ ] Chat Functions (real-time communication)
[ ] Sharing Wins (social media integration)
[ ] Create additional slot games
[ ] Implement progressive jackpots
[ ] Implement Scatter Wins
[ ] Create Pickpocketing Feature
[ ] Create Powerups (RTP Boosts, Pickpocketing Shields, XP Boosts)
[ ] Implement Progressive Achievement system
[ ] Implement a “skill” based progressive level up system
[ ] Implement a “rewards” system (rewards players CRDS for completing tasks)
[ ] Weekly Multiplayer tournaments (Buy-Ins, Cash Prizes in CRDS)
[ ] Mobile responsive design
[ ] Implement Ethereum Blockchain integration for Royal Games Casino’s own ERC20 Token called CRDS
[ ] Create In-App Store for Micro Payments
[ ] Referral Programs (reward users with CRDS tokens for successful referrals)
[ ] Social Challenges (teamwork or competition among friends, rewards with tokens or in-game items)
[ ] Implement new game types (drawings, coin tosses, card games, roulette, bingo, and more)

## ✨ Acknowledgments

- PIXI.js team for the rendering engine
- Socket.IO team for real-time capabilities
- The open source community

---

Developed with ❤️ by [realbrodiwhite](https://github.com/realbrodiwhite)
