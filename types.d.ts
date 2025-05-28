interface BookProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

type BookCoverVarient = "extraSmall" | "small" | "medium" | "regular" | "wide";

interface BookCoverProps {
  className: string;
  varient: BookCoverVarient;
  coverColor: string;
  coverUrl: string;
}
