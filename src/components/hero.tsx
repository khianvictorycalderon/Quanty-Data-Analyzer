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
                <div className="flex-1/2 flex flex-col justify-center">
                    <div>
                        <h1 className="text-5xl font-bold inline-block">{heading}</h1>
                        <h1 className="text-2xl max-w-fit">{subheading}</h1>
                    </div>
                </div>
                <div className="hidden md:block flex-1/2 lg:flex flex-col justify-center items-end">
                    <div>
                        <img 
                            className="h-full w-full"
                            src="icons/Quanty.png"
                            />
                    </div>
                </div>
            </div>
        </section>
    )
}