import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ImageBlur = ({ src, fill, alt, className, width, height }: { src: string, fill?: boolean, alt: string, className?: string, width?: number, height?: number }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <>
            {
                width && height ?
                    <Image
                        ref={ref}
                        width={width}
                        height={height}
                        src={src}
                        alt={alt}
                        className={className}
                        style={{
                            opacity: inView ? 1 : 0,
                            transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
                        }}
                    />
                    :
                    <Image
                        ref={ref}
                        src={src}
                        fill={fill}
                        alt={alt}
                        className={className}
                        style={{
                            opacity: inView ? 1 : 0,
                            transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)"
                        }}
                    />
            }
        </>
    );
}

export default ImageBlur;