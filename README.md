# Visual Match - Image Search Engine

Visual Match is a responsive, modern image search application that allows users to find high-quality photos using the Unsplash API.

## Features

- **Image Search**: Instantly fetch and display images based on user keywords.
- **Infinite-Style Pagination**: "Show More" functionality to load additional results without refreshing.
- **Modern UI/UX**:
  - Dark theme with animated gradient backgrounds.
  - Glassmorphism (blur) effects on headers and buttons.
  - Smooth hover animations and transitions.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Direct Links**: Click on any image to view the source on Unsplash.

## Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom styling, Flexbox, Grid, Keyframe animations, and Media Queries.
- **JavaScript (ES6+)**: Async/Await for API fetching, DOM manipulation, and Event Listeners.
- **Unsplash API**: External data source for images.

## Project Structure

```text
Image Search Engine/
├── images/               # Assets (Logo, Favicon)
├── .gitignore           # Git ignore rules
├── apiKey.js            # Configuration file for API Key (Not tracked by Git)
├── index.html           # Main HTML structure
├── script.js            # Application logic
└── style.css            # Styles and animations
```

## Installation & Setup

Since the API key is secured and not tracked by Git (via .gitignore), you will need to set up your own configuration file.

1. Clone the repository:

   ```
   git clone [https://github.com/your-username/image-search-engine.git](https://github.com/your-username/image-search-engine.git)
   cd image-search-engine
   ```

2. Get an API Key:
   - Sign up at [Unsplash Developers](https://unsplash.com/developers) and create a new application to obtain your API key.
3. Create `apiKey.js`:

   - In the root directory, create a file named `apiKey.js`.
   - Add the following line, replacing `YOUR_UNSPLASH_API_KEY` with your actual key:

   ```javascript
   const UNSPLASH_API_KEY = "YOUR_UNSPLASH_API_KEY";
   ```

4. Run the Project:
   - Open `index.html` in your preferred web browser.
