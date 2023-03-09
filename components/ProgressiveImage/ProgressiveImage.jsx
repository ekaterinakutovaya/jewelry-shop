import React, {useState, useEffect} from 'react';

const ProgressiveImage = ({src, placeholder, alt}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);

    const cn = `progressiveImage ${imageSrc === placeholder ? "loadingImage" : "loadedImage"}`

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        }
    }, [src]);
    
    return (
      <img
        className={cn}
        src={imageSrc}
        onContextMenu={e => e.preventDefault()}
        alt={alt}
      />
    );
};

export default ProgressiveImage;