import Button from "./Button.jsx";

const Extensions = () => {
    const cards = [
        {logo: 'chrome', title: 'Add to Chrome', version: 'Minimum version 65', text: 'Add & Install Extension'},
        {logo: 'firefox', title: 'Add to Firefox', version: 'Minimum version 55', text: 'Add & Install Extension'},
        {logo: 'opera', title: 'Add to Opera', version: 'Minimum version 46', text: 'Add & Install Extension'}
    ];

    return (
        <section className={'bg-white w-full flex flex-col gap-7 py-16 items-center justify-center'}>
            <h2 className={'text-blue-950 text-4xl'}>Download the extension</h2>
            <p className={'text-lg text-gray-500 px-100 text-center'}>
                We’ve got more browsers in the pipeline. Please do let us know if you’ve
                got a favourite you’d like us to prioritize.
            </p>

            <div className={'flex items-center justify-center gap-8'}>
                {cards.map((card, index) => (
                    <Card logo={card.logo} 
                          title={card.title} 
                          version={card.version} 
                          text={card.text}
                          index={index} 
                          key={index} />
                ))}
            </div>
        </section>
    )
}

const Card = ({ title, version, text, logo, index }) => {
    return (
        <div className={`bg-white card-${index} flex flex-col rounded-lg items-center justify-around shadow-lg w-70 h-90 p-4`}>
            <img src={`/images/logo-${logo}.svg`} alt={logo.toUpperCase()} />
            <h3 className={'text-xl text-blue-950'}>{title}</h3>
            <p className={'text-sm text-gray-500'}>{version}</p>
            <img src={'/images/bg-dots.svg'} alt={'Dots'} />
            <Button className={'btn btn-blue'} text={text} />
        </div>
    )
}

export default Extensions;