import Link from 'next/link'

const Page: React.FC = () => {
    return (
        <main className='w-full p-3 bg-yellow-50 w-screen h-screen flex flex-col items-center sm:justify-center'>
            <div className='flex flex-row justify-center space-x-3 p-6'>
                <img className='w-8' src='images/logo.png' />
                <Link href='/'>
                    <a>
                        <h1 className='font-medium text-lg text-gradient'>
                            transltr
                        </h1>
                    </a>
                </Link>
            </div>
            <div className='w-full sm:w-min border border-yellow-700 rounded-lg bg-white shadow-lg p-10'>
                <form action='' className='flex flex-col space-y-3'>
                    <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='email'
                        className='shadow-inner px-12 py-2 rounded-lg'
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='password'
                        className='shadow-inner px-12 py-2 rounded-lg'
                    />
                    <input
                        type='submit'
                        value='login'
                        className='shadow-lg cursor-pointer px-12 py-2 rounded-lg bg-gray-600 text-gray-100'
                    />
                </form>
                <div className='flex flex-row items-center space-x-3 py-4'>
                    <hr className='flex-1 bg-none border-1 border-gray-300' />
                    <div className='text-gray-300'>or</div>
                    <hr className='flex-1 bg-none border-1 border-gray-300' />
                </div>
                <div className='flex flex-col space-y-3'>
                    <Link href='/'>
                        <a className='py-2 rounded-lg bg-gray-900 text-gray-100 text-center shadow-lg cursor-pointer'>
                            login with Github
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='py-2 rounded-lg bg-red-600 text-gray-100 text-center shadow-lg cursor-pointer'>
                            login with Google
                        </a>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Page
