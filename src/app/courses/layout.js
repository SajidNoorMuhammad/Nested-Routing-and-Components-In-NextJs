import Link from 'next/link';

function Layout({ children }) {
    return (
        <div>
            <div className=' bg-orange-600 text-blue-100 p-3'>
                <ul className=' flex justify-center'>
                    <Link href="/courses/categories">
                        <li>
                            Categories
                        </li>
                    </Link>

                    <Link href="/courses/trainers">
                        <li className=' ml-10'>
                            Trainers
                        </li>
                    </Link>
                </ul>
            </div>

            <div className=' flex'>
                <div className=' w-[20%] bg-blue-500'>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                    <p>Hello</p>
                </div>

                <div className=' w-[80%]'>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Layout;
