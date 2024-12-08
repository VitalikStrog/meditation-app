export type AffirmationCategory = {
  title: string;
  previews: GalleryPreviewData[];
};

export type GalleryPreviewData = {
  id: number;
  text: string;
  image: any;
};
