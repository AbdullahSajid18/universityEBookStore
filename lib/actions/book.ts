"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { BorrowBookParams } from "@/types";
import { eq } from "drizzle-orm";

export const borrowBook = async (params: BorrowBookParams) => {
  const { bookId, userId } = params;

  try {
    const book = await db
      .select({ availableCopies: books.availableCopies })
      .from(books)
      .where(eq(books.id, bookId))
      .limit(1);

    if (book.length === 0) {
        console.log('consoling');
        
    }
  } catch (error) {
    console.log(error);

    return {
      success: false,
      error: "An error occurred while borrowing the book.",
    };
  }
};
