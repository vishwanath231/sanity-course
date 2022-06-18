import React from 'react'

const Home = () => {
    return (
        <main>
            <img src='images/bg.jpg' alt='background' className='absolute object-cover bg'/>
            <section className='relative flex justify-center pt-12 lg:pt-44 px-8'>
                <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>Hii. I'm Vishwanath</h1>
            </section>
        </main>
    )
}

export default Home;