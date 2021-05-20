export interface PicSumImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface PicSumImages extends Array<PicSumImage>{}

export interface PicSumState {
  data: PicSumImages;
}
