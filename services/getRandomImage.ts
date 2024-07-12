import axios from "axios";

import { API } from "../constants";
import { getRandomNumber } from "../helpers";
import type { GetImageResponseDto } from "../types";

const ImageIdRange = {
    min: 1,
    max: 1000,
};

export const getRandomImage = async (): Promise<GetImageResponseDto> => {
    try {
        const randomImageId = getRandomNumber(ImageIdRange.min, ImageIdRange.max);

        const response = await axios.get<GetImageResponseDto>(`${API.IMAGE_URL}/id/${randomImageId}/info`);

        return response.data;
    
    } catch (error) {
        console.error("Error while fetching random image", error);
        
        throw error;
    }
};
