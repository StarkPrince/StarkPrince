import Link from 'next/link'

const Footer = () =>
{
    return (
        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
            <Link href="https://princeraj.info">
                Made with <span className="text-red-500 mr-1">&hearts;</span>
                by Prince Raj
            </Link>
        </footer>
    )
}

export default Footer

