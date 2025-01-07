import { ContentfulImageProps } from '@/types';
import Image, { ImageLoaderProps } from 'next/image';


const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  src,
  width,
  height,
  alt,
  quality,
  className,
  ...props
}) => {
  return (
    <Image
      loader={contentfulLoader}
      src={src}
      width={width}
      height={height}
      alt={alt}
      quality={quality}
      className={className}
      {...props}
    />
  );
};

export default ContentfulImage;
