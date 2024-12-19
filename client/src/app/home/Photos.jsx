"use client";

import { fetchImages } from "@/service/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const getImages = async (setImages, setLoading) => {
    const { hits } = await fetchImages("yellow flower");
    if (Array.isArray(hits)) {
        setImages(hits);
        setLoading(false);
    }
};

export default function Photos() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getImages(setImages, setLoading);
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <>
        <div className="vertical-masonry">
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.previewURL}
                    alt={image.tags}
                    width={image.previewWidth}
                    height={image.previewHeight}
                />
            ))}
        </div>
    </>;
}
