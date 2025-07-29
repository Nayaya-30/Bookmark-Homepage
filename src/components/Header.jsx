import  { Navlinks } from "./Footer.jsx";

const Header = () => {
    return (
        <header className={''}>
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

            <article className={''}>
                
            </article>
        </header>
    )
}
export default Header;