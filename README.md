# 🎬 VIZ FLIX GPT - Elevate Your Movie Experience with AI    [ React JS, Firebase, React-Router-DOM, Redux-Store ]

Welcome to VIZ FLIX GPT, where cutting-edge technology meets the magic of cinema! This innovative project combines the power of React, Firebase, TMDB API, and OpenAI's GPT for an unparalleled movie browsing and recommendation platform. Whether you're a casual moviegoer or a film aficionado, VIZ FLIX GPT promises to enhance your movie-watching journey with its seamless interface and intelligent suggestions.

## Key Components 🛠️

- **Create React App:** Utilize the flexibility and efficiency of React for a dynamic user experience.
- **Firebase Integration:** Secure user authentication and data management for a personalized touch.
- **TMDB API Integration:** Access a vast database of movies for comprehensive browsing.
- **OpenAI's GPT:** Harness the power of AI for personalized movie suggestions and enhanced search capabilities.
- **Tailwind CSS:** Craft sleek and modern user interfaces with ease.
- **Redux Store:** Centralize state management for scalability and efficiency.

## Features 🌟

### Seamless Authentication

- **Sign In / Sign Up Forms:** Securely manage user accounts for a personalized experience.
- **Redirect to Browse Page:** Seamlessly navigate to the main browsing interface upon authentication.

### Browsing Experience

- **Header Navigation:** Intuitively explore different sections of the application.
- **Main Movie Display:** Highlight featured content with trailers and descriptions for an immersive experience.
- **Movie Suggestions:** AI-driven recommendations based on user preferences for tailored movie choices.

### Advanced Search Capabilities

- **GPT Search Bar:** Instantly access a wide array of movies with intelligent search functionality.
- **Multi-Lingual Support:** Cater to diverse user bases with support for multiple languages.

## Getting Started 🚀

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Set up Firebase and TMDB API keys.
4. Create a `.env` file and add necessary environment variables.
5. Start the development server with `npm start`.

## Deployment 🌐

Deploy your application to production using Firebase or your preferred hosting service to share your movie-watching platform with the world.

## Contributions 💡

Contributions are welcome! Feel free to submit issues or pull requests for any enhancements or bug fixes to make VIZ FLIX GPT even better.

## Credits 🙌

This project was made possible with the support of the open-source community and the following technologies:

- React
- Firebase
- TMDB API
- OpenAI's GPT
- Tailwind CSS
- Redux

## License 📝

This project is licensed under the [MIT License](LICENSE) - feel free to use and modify it according to your needs.

## Acknowledgements 🎉

Thank you for choosing VIZ FLIX GPT! We're excited to revolutionize your movie-watching experience with the perfect blend of technology and entertainment. Enjoy the show! 🍿🎥

# VIZ FLIX GPT

    - Create React App.
    - Configured Tailwind CSS.
    - Header
    - Routing of App
    - Login Form
    - Sign Up Form
    - Form Validation
    - useRef Hook
    - Firebase set up
    - Deploying our app to production
    - Create Authentication // SignUp User Account
    - Implement Sign In user API
    - Created redux store with userSlice
    - Implemented Sign Out
    - Updated Profile API card
    - Fetch Movies from TMDB
    - Bug Fix: Sign Up user, diaplayName and profile picture
    - Bug Fix: if the user is not logged in redirect /browse to login page and relatively
    - unsubscribed to the onAuthStateChange call back.
    - Added hard coded files to the constants.js
    - Register TMDB API and create an app and get access token
    - Get Data from TMDB Now Playing Movies List API
    - Custom Hook For Now Playing Movie
    - Create Movie Slice
    - Update the store with Movie Data
    - Planning for Main Container and Secondary Container
    - Fetch Data for Trailer Video
    - Update store with Trailer Video Data
    - Custom Hook For Trailer Video
    - Embedded the Youtube Video and make it autoplay and in mute
    - Tailwind CSS to make Main Container match Netflix
    - Build Secondary Component
    - Built Movie List
    - Built Movie Card
    - TMDB Image CDN
    - Made the Browse Page Amazing with Tailwind CSS
    - usePopularMovies Custom hook
    - useTopRatedMovies Custom hook
    - useUpcomingMovies Custom hook
    - GPT Search Page
    - GPT Search Bar
    - Multi-Lingual feature in our APP
    - Integrating GPT APIs
    - Get Gpt Search Open AI API key
    - GPT search API call
    - Fetched GPT Movie Suggestions from TMDB
    - created gptSlice and added the data
    - reused Movie List Component to make movie suggestion container
    - Memoization
    - Added .env file
    - And added .env file to gitignore
    - Made application a responsive one

# Features

## Login/Sign Up

    - Sign In /Sign up Form
    - redirect to Browse Page

## Browse (after authentication)

    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists

## NetflixGPT

    - Search Bar
    - Movie Suggestions
