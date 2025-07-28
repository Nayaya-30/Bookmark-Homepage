import { useState } from 'react';
import Button from "./Button.jsx";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate on each change
    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsTouched(true);

        // if (!value) {
        //     setError('Email is required.');
        // } else if (!emailRegex.test(value)) {
        //     setError('Please enter a valid email address.');
        // } else {
        //     setError('');
        // }
    };

    // Handle final submit
    const handleSubmit = () => {
        setIsTouched(true);
        if (!email) {
            setError('Email is required.');
        } else if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            console.log('Valid email submitted:', email);

        }
    };

    // Dynamic border color based on validation
    const borderColor = !isTouched ?
        'focus:border-blue-800' : error ?
            'border-red-400 focus:border-red-400' : 'border-green-400';

    return (
        <footer className="w-full py-6 px-4">
            <div className="w-full bg-blue-600 flex flex-col justify-around items-center gap-10 py-12">
                <h3 className="text-white text-2xl font-small">35,000+ already joined</h3>
                <p className={'text-white text-4xl font-bold w-2/5 text-center'}>
                    Stay up-to-date with what we’re doing
                </p>
                <div className={'flex flex-row justify-center mb-8 items-center gap-4 w-2/4'}>
                    <div className={'relative'}>
                        <input type={'email'}
                               value={email}
                               onChange={handleChange}
                               onBlur={() => setIsTouched(true)}
                               placeholder={'Enter your email address...'}
                               className={
                                        'bg-white z-10 py-3 px-6 text-grey-400 rounded rounded-br-none' + 
                                        'rounded-bl-none focus:outline-0 ' +
                                        'focus:border-2 focus:border-blue-950 w-full' + borderColor
                                }
                        />

                        {
                            error && (<p className={"text-white rounded rounded-tr-none rounded-tl-none bg-red-400 w-full absolute top-12 z-0 p-1 left-0 text-sm"}>{error}</p>)
                        }
                    </div>
                    <Button text={'Contact Us'} click={handleSubmit} type={'submit'} className={'btn btn-red'} />
                </div>
            </div>

            <div className={'w-full flex justify-between items-center py-8 px-28 bg-blue-950'}>
                <div className={'flex flex-row justify-center items-center gap-16'}>
                    <img src={'/images/logo-bookmark.svg'} alt={'Logo'} />
                    <ul className={'list-none flex gap-8'}>
                        {['Features', 'Pricing', 'Contact'].map((item, id) => (
                            <Navlinks text={item} key={id} clss={'text-lg transition-all text-white hover:cursor-pointer hover:text-red-400'} />
                        ))}
                    </ul>
                </div>
                <div className={'flex justify-center items-center gap-10'}>
                    {['Facebook', 'Twitter'].map((item, id) => (
                        <MediaLogo key={id} logo={item} clss={'hover:scale-110 hover:cursor-pointer'} />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export function Navlinks({ text, clss }) {
    return (
        <li className={clss}>{text}</li>
    )
}
export function MediaLogo({ logo, clss }) {
    return (
        <img src={`/images/icon-${logo.toLowerCase()}.svg`} alt={logo} className={clss} />
    )
}

export default Footer;