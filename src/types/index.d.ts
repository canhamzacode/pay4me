import { Document } from '@contentful/rich-text-types'

export interface IAuthor {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  fields: {
    name: string;
    picture: CoverImage;
  };
}


export interface IBlog {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  fields: {
    title: string;
    slug: string;
    author: IAuthor
    excerpt: string;
    coverImage: CoverImage;
    content: Document;
    date: string;
  };
}





export interface ContentfulImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  quality?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
  [key: string]: unknown;
}


export interface CoverImage {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface AppStoreButtonProps {
  icon: string; 
  platform: string; 
  description: string; 
}


export interface ButtonProps {
  text: string;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOffset?: { top: string; left: string };
  onClick?: () => void;
}


export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface StudentReviewCardProps {
  overlayImage: string;
  name: string;
  stars: number;
  bgSize?: number;
  overlaySize?: number;
  bgImage?: string;
}