"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BorrowingBookProps } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

const BorrowBook = ({
  bookId,
  userId,
  borrowingEligibility: { isEligible, message },
}: BorrowingBookProps) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const borrowHandler = async () => {
    if (!isEligible) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }

    try {
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occured while borrowing the book",
        variant: "destructive",
      });
    } finally {
      setBorrowing(false);
    }
  };

  return (
    <Button className="book-overview_btn">
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
    </Button>
  );
};

export default BorrowBook;
