import { PicSumImage, PicSumImages } from "../../utils/interfaces";

export interface HomeViewProps {
  data: PicSumImages
}

export interface PicSumImageProps {
  data: PicSumImage
  openModal: (url: string) => void;
}
