# mks_version 🎵

A modern, responsive Angular music player application inspired by the discography and iconic eras of Taylor Swift. Features album browsing, instant global search, a persistent 3-section music player, "Up Next" queue drawer, favorites management, and per-era lore and tracking.

## About The Project

**mks_version** is a full-featured music streaming web application built with Angular. It is designed as an immersive tribute to Taylor Swift's albums, featuring distinct visual identities and color palettes for each era. Users can explore tracklists across 8 blockbuster albums, play full-length music, search tracks globally in real time, view queue playlists, control playback speed and volume, and curate their personal favorites.

This project was developed by me from scratch, including:
* Application architecture, services, and reactive state management (RxJS)
* Component hierarchy and modular routing
* Era-specific visual theming and UI/UX design
* Audio integration with HTML5 Audio, queue management, and keyboard shortcuts
* Asset sourcing, high-definition video still curation, and GitHub Pages deployment

## Features

### 🎵 Playback & Music Player
* **3-Section Responsive Player:** Fixed bottom glassmorphic player featuring album artwork, track details, centered controls, and a dedicated volume slider.
* **Full-Length Audio:** Seamless playback of complete tracks across all eras.
* **🔀 Shuffle & 🔁 Repeat Modes:** Randomize tracks or toggle between Repeat All and Repeat Single Song with smooth micro-notification popups.
* **📑 "Up Next" Queue Drawer:** Slide-up panel showing the active playlist queue with instant track jumping.
* **⚡ Playback Speed Selector:** Toggle between `0.75x`, `1.0x`, `1.25x`, and `1.5x` playback speeds.
* **⌨️ Keyboard Hotkeys:** Control playback hands-free from anywhere:
  * `Space`: Play / Pause
  * `→` / `←`: Seek forward or backward by 5 seconds
  * `M`: Mute / Unmute
  * `N`: Next track
  * `P`: Previous track

### 🔍 Discovery & Navigation
* **Instant Global Live Search:** Real-time search bar in the navbar that filters across all songs and albums simultaneously with 1-click playback.
* **Interactive Home Page:** Dynamic grid of Era cards highlighting album release years, themes, and direct navigation links.
* **❤️ Dedicated Favorites Collection (`/favorites`):** Dedicated view to manage your liked tracks, check collection size, and play all favorites at once.

### 🌟 Era Lore & Visual Identity
* **8 Taylor Swift Eras:**
  * **1989** (Synth-Pop Era • Teal)
  * **Fearless** (Golden Country Era • Gold)
  * **Red** (Heartbreak & Pop Era • Red)
  * **Speak Now** (Enchanted Fairytale Era • Magenta)
  * **Lover** (Pastel Dream Era • Steel Blue / Lavender)
  * **Reputation** (Dark & Edgy Electro-Pop Era • Slate / Charcoal)
  * **Folklore** (Indie Folk & Cabin Era • Forest Green)
  * **Midnights** (Dream Pop & Midnight Shimmer Era • Midnight Blue)
* **Era Lore & Quotes:** Each album page features iconic lyrics, Grammy milestones, and trivia.
* **📊 Era Liked Collection Tracker:** Live progress bar displaying the percentage of songs favorited in each specific era.
* **🎬 Authentic HD Stills:** Crystal-clear 1280x720 video stills and artwork matching the official visual identity of each song.
* **🌙 Dynamic Active Card Contrast:** The currently playing song card gently darkens and highlights with an active accent border and animated sound equalizer wave bars (`|||`).

## Tech Stack

* **Frontend:** Angular 16
* **Language:** TypeScript
* **State Management:** RxJS (BehaviorSubjects & Observables)
* **Styling:** CSS3 (Glassmorphism, Flexbox, Grid), Bootstrap 5
* **Audio:** HTML5 Audio API wrapped in Angular NgZone
* **Storage:** LocalStorage (Favorites persistence)
* **Deployment:** GitHub Pages

## Project Structure

```
src
 ├── app
 │    ├── 1989 / fearless / red / speaknow / lover / reputation / folklore / midnights (Album Components)
 │    ├── home (Interactive Era Grid & Hero)
 │    ├── favorites (Personal Liked Songs Hub)
 │    ├── player (Fixed 3-Section Music Player & Queue Drawer)
 │    ├── services
 │    │    ├── music-player.service.ts (Audio playback, queue, volume, shuffle/repeat)
 │    │    ├── favorite.service.ts (Reactive RxJS favorite management & LocalStorage)
 │    │    └── song-catalog.service.ts (Central discography, era lore & live search)
 │    ├── models (Song & Lyric interfaces)
 │    └── app-routing.module.ts
 │
 └── assets
      ├── images (HD music video stills organized by album)
      └── sounds (Complete audio tracks organized by album)
```

## Live Demo

The application is deployed here: https://mayankks13.github.io/mks_version/

## Timeline

* **December 3rd, 2023:** Initial local prototype uploaded to GitHub.
* **June 28th, 2026:** Configured GitHub Pages deployment and base href setup.
* **July 08th, 2026:** Redesigned layout with reusable cards, responsive player, and basic favorites.
* **October 25th, 2026:** Major architectural & feature upgrade:
  * Added 2 new albums (**Folklore** and **Midnights**) and expanded tracklists across all 6 original albums.
  * Sourced complete full-length audio tracks and official 1280x720 video stills.
  * Added instant Global Live Search in navbar and "Up Next" Queue drawer in the player.
  * Added keyboard shortcuts (`Space`, `←/→`, `M`, `N`, `P`) and variable playback speed controls (`0.75x` – `1.5x`).
  * Implemented per-album Era Lore banners, quotes, Grammy milestones, and Era Liked Collection progress trackers.
  * Enhanced player bar to responsive 3-section layout with volume slider and smooth micro side-popups.

## License

This project is available for learning and reference purposes. Please refer to the [LICENSE](LICENSE) file for usage guidelines and permissions.
