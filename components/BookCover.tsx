import { cn } from "@/lib/utils";
import Image from "next/image";

const variantStyles: Record<BookCoverVarient, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

const BookCover = ({
  className,
  varient = "regular",
  coverColor = "#012B48",
  coverUrl = "https://placehold.co/600x400.png",
}: BookCoverProps) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[varient],
        className
      )}
    >
      Book Side SVG

      <div className="absolute z-10" style={{left: '12%', width: '87.5%', height: '88%'}}>
        <Image />
      </div>
    </div>
  );
};

export default BookCover;
