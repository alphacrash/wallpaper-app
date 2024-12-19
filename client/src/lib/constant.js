// Project
export const APP_NAME = "The Wallpaper App";
export const APP_DESC = "Upload and share your wallpapers with the world.";

// Environment
export const PIXABAY_API = process.env.NEXT_PUBLIC_PIXABAY_API;

// Application
export const PIXABAY_URL = "https://pixabay.com/api/";
export const PIXABAY_IMAGE_TYPE = "photo";
export const filters = [
    { title: "Popular", link: "/popular-wallpapers" },
    { title: "Discover", link: "/discover-wallpaper" },
    { title: "Random", link: "/random-wallpapers" },
]