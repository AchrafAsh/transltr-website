import Head from 'next/head'
import Link from 'next/link'

const Navbar: React.FC = () => {
    return (
        <header className='w-screen p-8'>
            <nav className='flex flex-row justify-between items-center max-w-6xl mx-auto'>
                <div className='w-10 flex flex-row items-center space-x-3'>
                    <img src='/images/logo.png' alt='Logo' />
                    <Link href='/'>
                        <a>
                            <h1 className='text-gradient font-medium text-3xl '>
                                transltr
                            </h1>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href='/login'>
                        <a className='bg-yellow-100 text-gray-700 px-8 py-2 rounded shadow'>
                            login
                        </a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

const LinkWrapper: React.FC<{ href: string; title: string; id: string }> = ({
    href,
    title,
    id
}) => (
    <Link href={href}>
        <a id={id}>{title}</a>
    </Link>
)

const Footer: React.FC = () => {
    return (
        <footer className='max-w-5xl mx-auto my-12'>
            <hr className='bg-none border-1 border-gray-200 w-8/12 lg:max-w-md mx-auto' />
            <div className='flex flex-row space-x-12 justify-center py-12 text-gray-400'>
                <ul className='flex flex-col space-y-1'>
                    <li>
                        <LinkWrapper id='footer-home' href='/' title='Home' />
                    </li>
                    <li>
                        <LinkWrapper
                            href='/#integration'
                            title='How it works'
                            id='footer-integration'
                        />
                    </li>
                    {/* <li>
                        <LinkWrapper href='/#pricing' title='Pricing' id='footer-pricing' />
                    </li> */}
                    <li>
                        <LinkWrapper
                            href='/login'
                            title='Login'
                            id='footer-login'
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <a
                            href='https://twitter.com/achrafash'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='footer-twitter'
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://indiehackers.com/achrafash'
                            target='_blank'
                            rel='noopener noreferrer'
                            id='footer-indie'
                        >
                            Indie Hackers
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

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className='py-32'>
                <Head>
                    <title>transltr | bring your website to the world</title>
                </Head>
                <section id='hero' className='max-w-6xl mx-auto px-6 xl:p-0'>
                    <div className='flex flex-col-reverse md:flex-row justify-between items-center md:items-start text-gray-600'>
                        <div className='flex-1 flex flex-col space-y-4 w-11/12'>
                            <h1
                                id='hero-title'
                                className='font-medium text-4xl text-center md:text-left md:text-6xl'
                            >
                                Make your website available for everyone
                            </h1>
                            <p
                                id='hero-p'
                                className='font-light text-lg text-center md:text-left'
                            >
                                Subscribe to get the latest update and be the
                                first to translate your website with transltr!
                            </p>
                            <div className='py-8 lg:p-8 md:max-w-lg mx-auto w-full'>
                                <form
                                    action='https://formspree.io/f/mvovqjkq'
                                    method='POST'
                                    className='shadow border border-gray-200 rounded-md overflow-hidden flex flex-col sm:flex-row'
                                >
                                    <input
                                        type='text'
                                        name='email'
                                        placeholder='your email'
                                        className='flex-1 py-2 px-8 text-center lg:text-left'
                                    />
                                    <input
                                        type='submit'
                                        value='get updated'
                                        className='px-8 py-2 bg-yellow-100'
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img src='/images/world-illustration.png' />
                        </div>
                    </div>
                </section>

                <section
                    id='target'
                    className='bg-gray-100 text-gray-600 mt-32 '
                >
                    <div className='py-20 max-w-6xl mx-auto'>
                        <h2
                            id='target-title'
                            className='uppercase text-3xl lg:text-4xl font-medium text-center'
                        >
                            Ideal for...
                        </h2>
                        <div className='flex flex-col items-center lg:flex-row justify-around pt-12 px-12'>
                            <div className='max-w-md text-center'>
                                <img
                                    src='images/solofounder.png'
                                    className='mx-auto'
                                />
                                <div className='py-12'>
                                    <h4
                                        id='target-1-title'
                                        className='font-medium text-2xl'
                                    >
                                        Solo-founders
                                    </h4>
                                    <p id='target-1-p'>
                                        Too many priorities, let transltr manage
                                        the translations for you. Reach a
                                        broader audience without working more.
                                    </p>
                                </div>
                            </div>
                            <div className='max-w-md text-center'>
                                <img
                                    src='images/worldwide.png'
                                    className='mx-auto'
                                />
                                <div className='pt-12'>
                                    <h4
                                        id='target-2-title'
                                        className='font-medium text-2xl'
                                    >
                                        Users from around the world
                                    </h4>
                                    <p id='target-2-p'>
                                        Too many languages to manage. Make your
                                        website accessible for all your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id='integration'
                    className='text-gray-600 max-w-6xl mx-auto pt-32 '
                >
                    <h2
                        id='integration-title'
                        className='text-3xl lg:text-4xl font-medium uppercase text-center'
                    >
                        Simple integration
                    </h2>
                    <div className='flex flex-col space-y-8 pt-24 px-6'>
                        <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
                            <div className='w-full lg:flex-1 m-3 rounded-lg overflow-hidden shadow-2xl'>
                                <pre className='bg-gray-800 text-gray-100 p-6 overflow-x-auto whitespace-pre-line'>{`<!-- HTML -->\n<script src="https://transltr.world/trsltr.js" defer></script>\n<div id="transltr"></div>`}</pre>
                            </div>
                            <h4
                                id='html-integration'
                                className='flex-1 text-center text-2xl font-medium'
                            >
                                HTML integration
                            </h4>
                        </div>
                        <div className='flex flex-col lg:flex-row items-center justify-between'>
                            <h4
                                id='react-integration'
                                className='flex-1 text-center text-2xl font-medium'
                            >
                                React integration
                            </h4>
                            <div className='w-full lg:flex-1 m-3 rounded-lg overflow-hidden shadow-2xl'>
                                <pre className='bg-gray-800 text-gray-100 p-6 overflow-x-auto whitespace-pre-line'>{`// React\nimport TransltrWidget from "transltr"\nimport "transltr/dist/index.css"\n\n<TransltrWidget />`}</pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section
                    id='pricing'
                    className='pt-32 max-w-6xl mx-auto text-gray-600'
                >
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='shadow rounded-lg p-24 bg-gray-50 transform lg:translate-x-4'>
                            <h4 className='text-6xl font-medium text-center'>
                                0€
                            </h4>
                            <ul className='list-disc py-24 text-lg'>
                                <li>1 page</li>
                                <li>2 languages</li>
                                <li>edit for more impact</li>
                            </ul>
                        </div>
                        <div className='shadow-lg rounded-lg p-32 bg-yellow-100 z-10'>
                            <h4 className='text-6xl font-medium text-center'>
                                5€
                            </h4>
                            <ul className='list-disc py-24 text-lg'>
                                <li>5 pages</li>
                                <li>5 languages</li>
                                <li>edit for more impact</li>
                                <li>analytics</li>
                            </ul>
                        </div>
                        <div className='shadow rounded-lg p-24 bg-teal-50 transform lg:-translate-x-4'>
                            <h4 className='text-6xl font-medium text-center'>
                                25€
                            </h4>
                            <ul className='list-disc py-24 text-lg'>
                                <li>up to 30 pages</li>
                                <li>10 languages</li>
                                <li>edit for more impact</li>
                                <li>analytics</li>
                            </ul>
                        </div>
                    </div>
                </section> */}
                <section
                    id='cta'
                    className='pt-32 max-w-6xl mx-auto text-center text-gray-600 '
                >
                    <div className='px-10'>
                        <h2
                            id='cta-title'
                            className='font-medium text-3xl lg:text-4xl uppercase'
                        >
                            Don't miss the launch!
                        </h2>
                        <p
                            id='cta-text'
                            className='text-lg font-light py-6 max-w-xl mx-auto'
                        >
                            Subscribe to get updates and be among the first to
                            translate ther website with transltr!
                        </p>
                    </div>
                    <div className='p-8 md:max-w-lg mx-auto w-full'>
                        <form
                            action='https://formspree.io/f/mvovqjkq'
                            method='POST'
                            className='shadow border border-gray-200 rounded-md overflow-hidden flex flex-col sm:flex-row'
                        >
                            <input
                                type='text'
                                name='email'
                                placeholder='your email'
                                className='flex-1 py-2 px-8 text-center lg:text-left'
                            />
                            <input
                                type='submit'
                                value='get updated'
                                className='px-8 py-2 bg-yellow-100'
                            />
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home
