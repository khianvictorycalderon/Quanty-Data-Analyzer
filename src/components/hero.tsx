interface HeroProps {
    heading: string;
    subheading: string;
    buttonLabel: string;
    buttonOnClick: () => void;
}

export default function Hero({
    heading,
    subheading,
    buttonLabel,
    buttonOnClick
}: HeroProps) {
    return (
        <section className="h-screen px-8 flex-1">
            <div className="max-w-7xl h-full mx-auto flex flex-col-reverse lg:flex-row">
                <div className="flex-1/2 flex flex-col justify-center md:justify-start lg:justify-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold inline-block">{heading}</h1>
                        <h1 className="text-2xl max-w-fit mt-2">{subheading}</h1>
                        <button
                            className="bg-neutral-200 text-neutral-950 py-2 px-8 text-base font-bold mt-2 rounded-lg cursor-pointer hover:bg-neutral-50 transform duration-300"
                            onClick={buttonOnClick}
                            >
                            {buttonLabel}
                        </button>
                    </div>
                </div>
                <div className="hidden md:block flex-1/2 lg:flex flex-col justify-center items-end">
                    <div>
                        <img 
                            className="w-[450px] h-auto lg:h-full lg:w-full mx-auto lg:m-0"
                            src="icons/Quanty.png"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}