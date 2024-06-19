"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="h-full w-full flex flex-col space-y-3 p-3">
            <Skeleton className="h-full w-full rounded-xl" />
            {/* <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div> */}
        </div>
    )
}
const ImageLoader = ({ src, alt }: any) => {

    // const [imageLoaded, setImageLoaded] = useState(false);
    // const [imageSrc, setImageSrc] = useState(null);
    // useEffect(() => {
    //     const loadImage = async () => {
    //         console.log([src])
    //         const response = await fetch(src);
    //         const blob = await response.blob();
    //         const url = URL.createObjectURL(blob);
            
    //         setImageSrc(url);
    //     };
    //     loadImage();
    // }, [])

    // const handleImageLoad = () => {
    //     setImageLoaded(true);
    //     console.log([src])
    // };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* {!imageLoaded && <SkeletonCard />} */}
            { <Image
                src={src}
                fill
                sizes="(max-width: 768px) 100vw"
                style={{objectFit:"contain"}}
                alt="board setup image"
                loading="lazy"
                className="rounded-md object-cover h-auto w-full"
                priority={false}
                // onLoad={handleImageLoad}
                // style={{ opacity: imageLoaded ? '1' : '0' }}
            />}
        </div>
    );
};

export default ImageLoader;