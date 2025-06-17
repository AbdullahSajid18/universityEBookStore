import { signOut } from '@/auth';
import dummyBooks from '@/dummybook.json'
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants';
import React from 'react'

const Page = () => {
  return (
    <>
      

      <BookList title= 'Borrowed Books' books={dummyBooks} />
    </>
  )
}

export default Page