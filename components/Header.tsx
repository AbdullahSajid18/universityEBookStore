import Link from "next/link"


const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
        <Link href='/'>EBook Store</Link>

        <ul className="flex flex-row items-center gap-8">
            <li>
                <Link href='/library' className="text-base cursor-pointer capitalize">Library</Link>
            </li>

        </ul>
    </header>
  )
}

export default Header