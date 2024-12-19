"use client"

import { fetchImages } from "@/service/api"
import Image from "next/image"
import { useEffect, useState } from "react"

const getImages = async (setImages, setLoading) => {
	const { hits } = await fetchImages("yellow flower")
	console.log(hits)
	if (Array.isArray(hits)) {
		setImages(hits)
		setLoading(false)
	}
}

export default function Photos() {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getImages(setImages, setLoading)
	}, [])

	if (loading) {
		return <p>Loading...</p>
	}

	return (
		<>
			<div className="columns-[20rem]">
				{images.map((image, index) => (
					<Image
						className="block w-full h-auto m-2 rounded-lg"
						src={image.previewURL}
						alt={image.tags || "Image"}
						width={image.previewWidth}
						height={image.previewHeight}
					/>
				))}
			</div>
		</>
	)
}
