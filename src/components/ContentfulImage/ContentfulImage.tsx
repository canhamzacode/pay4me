import Image, { ImageLoaderProps } from 'next/image';

interface ContentfulImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  quality?: number;
}

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  src,
  width,
  height,
  alt,
  quality,
}) => {
  return (
    <Image
      loader={contentfulLoader}
      src={src}
      width={width}
      height={height}
      alt={alt} // Required for accessibility
      quality={quality}
    />
  );
};

export default ContentfulImage;
