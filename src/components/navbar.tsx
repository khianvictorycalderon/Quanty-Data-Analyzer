import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {

    const [isSmallMenuShown, setIsSmallMenuShown] = useState<boolean>(false);
    const navbarButtons = [
        {
            label: "HOME",
            onClick: () => alert("Home Clicked!")
        },
        {
            label: "ABOUT",
            onClick: () => alert("About Clicked!")
        },
        {
            label: "PRIVACY POLICY",
            onClick: () => alert("Privacy Policy Clicked!")
        },
        {
            label: "TERMS & CONDITIONS",
            onClick: () => alert("Terms & Conditions Clicked!")
        }
    ];

    useEffect(() => {

    },[]);

    return (
        <>
            {/* Mobile & Tablet Navbar*/}
            <nav className={`${isSmallMenuShown ? "block" : "hidden"} lg:hidden bg-neutral-800 w-full text-center justify-center fixed top-0 left-0 z-100`}>
                <div className="flex flex-col py-6">
                    <div className="flex flex-col gap-4 justify-center mb-6">
                        <img 
                            src="icons/Quanty.png"
                            className="max-w-[45px] h-auto mx-auto"
                            />
                        <h1 className="text-2xl font-bold items-center">QUANTY</h1>
                    </div>
                    {navbarButtons.map((item, index) => (
                        <h1 
                            key={`${item.label}-${index}`} 
                            className="font-semibold transform duration-300 cursor-pointer hover:bg-neutral-700 py-4"
                            onClick={item.onClick}>
                            {item.label}
                        </h1>
                    ))}
                    <div className="transform duration-300 cursor-pointer hover:bg-neutral-700 py-2" onClick={() => setIsSmallMenuShown(false)}>
                    <IoClose className="text-4xl mx-auto" />
                    </div>
                </div>
            </nav>
            <RxHamburgerMenu className="text-4xl md:text-6xl fixed top-[16px] right-[16px] cursor-pointer" onClick={() => setIsSmallMenuShown(true)} />

            {/* Desktop Navbar */}
            <nav className="hidden lg:block bg-neutral-800 px-8 w-full text-center justify-center fixed top-0 left-0 z-100">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold items-center">QUANTY</h1>
                    <div className="flex items-center">
                        {navbarButtons.map((item, index) => (
                            <h1 
                                key={`${item.label}-${index}`} 
                                className="font-semibold transform duration-300 cursor-pointer hover:bg-neutral-700 p-4"
                                onClick={item.onClick}>
                                {item.label}
                            </h1>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}