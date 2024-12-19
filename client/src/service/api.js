import { PIXABAY_API, PIXABAY_IMAGE_TYPE, PIXABAY_URL } from '@/lib/constant';
import axios from 'axios';

const API_KEY = PIXABAY_API;
const BASE_URL = PIXABAY_URL;

export const fetchImages = async (query) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: PIXABAY_IMAGE_TYPE
            }
        });
        return data;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
};