import Button from "./Button.jsx";
import { useState} from "react";

const FAQ = () => {
    const faq = [
        {question: 'What is Bookmark?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt \n' +
                '  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'},
        {question: 'How can I request a new browser?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. \n' +
                '  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, \n' +
                '  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. \n' +
                '  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'},
        {question: 'Is there a mobile app?', answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum \n' +
                '  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed \n' +
                '  sollicitudin ex et ultricies bibendum.'},
        {question: 'What about other Chromium browsers?', answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam\n' +
                '  vitae neque eget nisl gravida pellentesque non ut velit.'}
    ];
    return (
        <section className={'flex bg-white flex-col items-center overflow-hidden justify-center py-20 px-110'}>
            <h2 className={'text-3xl mb-6 text-blue-950'}>Frequently Asked Questions</h2>
            <p className={'text-gray-600 text-center px-4 mb-10'}>
                Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us.
            </p>
            <hr className={'h-0.5 overflow-hidden w-full'} />

            <article className={'relative flex flex-col items-center overflow-hidden justify-center'}>
                {faq.map((item, index) => (
                    <Question question={item.question} answer={item.answer} key={index} />
                ))}
            </article>

            <Button text={'More Info'} type={'submit'} className={'btn my-8 btn-blue'} />
        </section>
    )
}

const Question = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
       <>
            <div onClick={handleIsOpen}
                 className={'flex x justify-between cursor-pointer mb-4 mt-2 z-10 ' +
                            'bg-white overflow-hidden w-120 items-center pr-4'}>
                <h3 className={'text-gray-800 max-w-full text-lg'}>{question}</h3>
                <img src={'/images/icon-arrow.svg'} alt={'Arrow'}
                     className={`hover:cursor-pointer ${isOpen ? 'rotate-up' : 'rotate-down'}`} />
            </div>

            <p className={`text-sm text-gray-500 mb-4 overflow-hidden text-left ${isOpen ? 'open' : 'close'}`}>{answer}</p>
            <hr className={'h-0.5 overflow-hidden w-full'} />
        </>
    )
}
export default FAQ;