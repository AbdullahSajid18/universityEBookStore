import { ZodType } from "zod";

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
  containerClassName?: string;
}

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  universityId: number;
  universityCard: string;
}

interface BookFormProps extends Partial<Book> {
  type?: "create" | "update";
}

interface FileUploadProps {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
  value?: string;
}

interface ColorPickerProps {
  value?: string;
  onPickerChange: (color: string) => void;
}

interface BookParams {
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverUrl: string;
  coverColor: string;
  description: string; 
  totalCopies: number;
  videoUrl: string;
  summary: string;

}
