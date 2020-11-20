import Head from 'next/head'

const Home: React.FC = () => {
    return (
        <main className='py-32'>
            <Head>
                <title>transltr | bring your website to the world</title>
            </Head>
            <section id='hero' className='max-w-6xl mx-auto'>
                <div className='flex flex-row justify-between items-center text-gray-600'>
                    <div className='flex-1 flex flex-col space-y-4'>
                        <h1 className=' font-medium text-6xl'>
                            Make your website available for everyone
                        </h1>
                        <p className='font-light text-lg'>
                            Subscribe to get the latest update and be the first
                            to translate your website with transltr!
                        </p>
                        <div className='p-8'>
                            <form
                                action='https://formspree.io/emai'
                                className='shadow rounded overflow-hidden flex flex-row'
                            >
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                    placeholder='your email'
                                    className='flex-1 py-2 px-8'
                                />
                                <input
                                    type='submit'
                                    value='get updated'
                                    className='px-8 bg-yellow-100'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img src='/images/world-illustration.png' />
                    </div>
                </div>
            </section>

            <section id='target' className='bg-gray-100 text-gray-600 mt-32'>
                <div className='py-24 max-w-6xl mx-auto'>
                    <div className='flex flex-row justify-around'>
                        <img src='images/solofounder.png' />
                        <h2 className='uppercase text-4xl font-medium'>
                            Ideal for...
                        </h2>
                        <img src='images/worldwide.png' />
                    </div>
                    <div className='flex flex-row justify-around pt-12'>
                        <div className='max-w-md'>
                            <h4 className='font-medium text-2xl'>
                                Solo-founders
                            </h4>
                            <p>
                                Too many priorities, let transltr manage the
                                translations for you. Reach a broader audience
                                without working more.
                            </p>
                        </div>
                        <div className='max-w-md text-right'>
                            <h4 className='font-medium text-2xl'>
                                World-wide users
                            </h4>
                            <p>
                                Too many languages to manage. Make your website
                                accessible for all your users.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id='integration'
                className='text-gray-600 max-w-6xl mx-auto pt-32'
            >
                <h2 className='text-4xl font-medium uppercase text-center'>
                    Simple integration
                </h2>
                <h2 className='text-center text-4xl font-medium'>
                    (no developer needed)
                </h2>
                <div className='flex flex-col space-y-8 py-24'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='h-32 flex-1 bg-gray-100'></div>
                        <h4 className='flex-1 text-center text-2xl font-medium'>
                            HTML integration
                        </h4>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <h4 className='flex-1 text-center text-2xl font-medium'>
                            React integration
                        </h4>
                        <div className='h-32 flex-1 bg-gray-100'></div>
                    </div>
                </div>
            </section>

            <section
                id='pricing'
                className='pt-32 max-w-6xl mx-auto text-gray-600'
            >
                <div className='flex flex-row items-center'>
                    <div className='shadow rounded-lg p-24 bg-gray-50 transform translate-x-4'>
                        <h4 className='text-6xl font-medium text-center'>0€</h4>
                        <ul className='list-disc py-24 text-lg'>
                            <li>1 page</li>
                            <li>2 languages</li>
                            <li>edit for more impact</li>
                        </ul>
                    </div>
                    <div className='shadow-lg rounded-lg p-32 bg-yellow-100 z-10'>
                        <h4 className='text-6xl font-medium text-center'>5€</h4>
                        <ul className='list-disc py-24 text-lg'>
                            <li>5 pages</li>
                            <li>5 languages</li>
                            <li>edit for more impact</li>
                            <li>analytics</li>
                        </ul>
                    </div>
                    <div className='shadow rounded-lg p-24 bg-teal-50 transform -translate-x-4'>
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
            </section>
            <section
                id='cta'
                className='pt-32 max-w-6xl mx-auto text-center text-gray-600'
            >
                <h2 className='font-medium text-4xl uppercase'>
                    Don't miss the launch!
                </h2>
                <p className='text-lg font-light py-6 max-w-xl mx-auto'>
                    Subscribe to get updates and be among the first to translate
                    ther website with transltr!
                </p>
                <div className='max-w-lg mx-auto'>
                    <form
                        action='https://formspree.io/emai'
                        className='shadow rounded overflow-hidden flex flex-row'
                    >
                        <input
                            type='text'
                            name='email'
                            id='email'
                            placeholder='your email'
                            className='flex-1 py-2 px-8'
                        />
                        <input
                            type='submit'
                            value='get updated'
                            className='px-8 bg-yellow-100'
                        />
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Home
