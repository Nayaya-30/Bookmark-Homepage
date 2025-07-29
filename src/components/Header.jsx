import  { Navlinks } from "./Footer.jsx";

const Header = () => {
    return (
        <header className={'py-8 w-full bg-grey-500'}>
            <nav className={'flex flex-row justify-between items-center px-30'}>
                <img src={'/images/bookmark.svg'} alt={'Logo'}/>
                <ul className={'flex flex-row items-center gap-12'}>
                    {['Features',
                        'Pricing',
                        'Contact'].map((item, index) => (
                            <Navlinks text={item} key={index} clss={'text-lg transition-all text-blue-950 ' +
                                'hover:cursor-pointer hover:text-red-400'} />
                    ))}
                    <button className={'bg-red-400 text-white px-6 py-1 border-2 rounded ' +
                        'hover:shadow hover:cursor-pointer hover:bg-white ' +
                        'hover:text-red-400 hover:border-red-400 transition-all active:scale-95'}>Login</button>
                </ul>
            </nav>

            <article className={'flex flex-row items-center justify-between px-30 py-26'}>
                <section className={'flex flex-col gap-8 w-[40%]'}>
                    <h1 className={'text-5xl font-medium text-blue-950'}>A Simple Bookmark Manager</h1>
                    <p className={'text-gray-400'}>A clean and simple interface to organize your favourite websites.
                        Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="flex flex-row gap-6">
                        <button className="btn btn-blue">
                            Get it on Chrome
                        </button>
                        <button className="btn btn-blue">
                            Get it on Firefox
                        </button>
                    </div>
                </section>
                <div className={'w-[45%]'}>
                    <img src={'/images/illustration-hero.svg'} alt={'illustration'} className={'w-full'}/>
                </div>
            </article>
        </header>
    )
}
export default Header;