import { AppProps } from 'next/app'
import Link from 'next/link'
import '@styles/globals.css'

const Navbar: React.FC = () => {
    return (
        <header className='w-screen p-8'>
            <nav className='flex flex-row justify-between items-center max-w-6xl mx-auto'>
                <div className='w-10 flex flex-row items-center space-x-3'>
                    <img src='/images/logo.png' alt='Logo' />
                    <h1 className='text-green-300 font-medium text-3xl '>
                        transltr
                    </h1>
                </div>
                <div>
                    <button className='bg-yellow-100 text-gray-700 px-8 py-1 rounded shadow'>
                        signup
                    </button>
                </div>
            </nav>
        </header>
    )
}

const LinkWrapper: React.FC<{ href: string; title: string }> = ({
    href,
    title
}) => (
    <Link href={href}>
        <a>{title}</a>
    </Link>
)

const Footer: React.FC = () => {
    return (
        <footer className='max-w-5xl mx-auto my-12'>
            <hr className='bg-none border-1 border-gray-200 max-w-md mx-auto' />
            <div className='flex flex-row space-x-12 justify-center py-12 text-gray-400'>
                <ul className='flex flex-col space-y-1'>
                    <li>
                        <LinkWrapper href='/' title='Home' />
                    </li>
                    <li>
                        <LinkWrapper
                            href='/#integration'
                            title='How it works'
                        />
                    </li>
                    <li>
                        <LinkWrapper href='/#pricing' title='Pricing' />
                    </li>
                    <li>
                        <LinkWrapper href='/login' title='Login' />
                    </li>
                </ul>
                <ul>
                    <li>
                        <a
                            href='https://twitter.com/achrafash'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://indiehackers.com/achrafash'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Indie Hackers
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://lechantier.co/users/achrafash'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Le Chantier
                        </a>
                    </li>
                </ul>
            </div>
            <div className='text-center'>
                <small className='text-gray-400'>
                    © 2020 transltr - built publicly by{' '}
                    <a
                        href='https://www.achrafash.me'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline'
                    >
                        achrafnotashraf
                    </a>
                </small>
            </div>
        </footer>
    )
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
