import React from 'react'

const Page = () => {
  return (
    <main className='root-container flex min-h-screen flex-col items-center justify-center'>
        <h1 className='font-bebas-neue text-5xl font-bold text-light-100 '>
            Request Limit Reached. Try again in a few minutes.
        </h1>

        <p className='mt-3 max-w-xl text-center text-light-400'>
            Looks like you&apos;ve been a little too eager. We&apos;ve put a temporary pause on your excitment. Chill for a bit and try again shortly.
        </p>
    </main>
  )
}

export default Page;