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
  coverUrl: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

interface BookCoverProps {
  className?: string;
  variant?: BookCoverVarient;
  coverColor: string;
  coverImage: string;
}


interface BookListProps {
  title: string;
  books: BookProps[];
  containerClassName?: string
}