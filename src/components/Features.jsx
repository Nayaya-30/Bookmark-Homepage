import Button from "./Button.jsx";
import { useState } from "react";

const Features = () => {
    const data = [
        {
            path: 1,
            head: 'Bookmark in one onClick',
            parag: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites'
        },
        {
            path: 2,
            head: 'Intelligent search',
            parag: 'Our powerful search feature will help you find saved sites in no time at all No need to trawl through all of your bookmarks.'
        },
        {
            path: 3,
            head:'Share your bookmarks',
            parag: 'Easily share your bookmarks and collections with others.Create a shareable link that you can send at the onClick of a button.'
        }
    ]
    const [index, setIndex] = useState(0);

    return (
        <section className={'bg-white flex flex-col items-center py-10 justify-between'}>
            <h2 className={'text-center text-blue-950 text-4xl mb-4'}>Features</h2>
            <p className={'text-gray-500 text-center mb-10 text-lg px-105'}>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>

            <div className={'flex flex-row gap-16'}>
                {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map((item, id) => (
                    <Feat text={item} key={id} onClick={() => {setIndex(id)}} isActive={index === id} />
                ))}
            </div>

            <hr className={'h-2 w-150'}/>

            <article className={'flex flex-row items-center gap-10 justify-center w-full'}>
                <div className={'w-3/5 py-20 pl-40'}>
                    <img src={`/images/illustration-features-tab-${data[index].path}.svg`} alt={`Image-${data[index].path}`}/>
                </div>
                <div className={'flex flex-col pr-40 gap-8 w-2/5 justify-between'}>
                    <h2 className={'text-3xl text-bold text-blue-950'}>{data[index].head}</h2>
                    <p className={'text-gray-700 '}>{data[index].parag}</p>
                    <Button className={'btn mr-60 ml-0 btn-blue'} type={'link'} text={'More Info'}/>
                </div>
            </article>
        </section>
    )
}

const Feat = ({ text, onClick, isActive }) => {
    return (
        <span onClick={onClick} className={`${isActive ? 'ac-tive' : 'in-active'}
                            text-xl hover:cursor-pointer transition-colors
                          text-gray-700 hover:text-red-400 mb-6`
        }>
            {text}
        </span>
    )
}

export default Features;