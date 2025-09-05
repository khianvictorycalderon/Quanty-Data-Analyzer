export default function NavBar() {

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
    ]

    return (
        <nav className="bg-neutral-800 px-4 w-full">
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
    )
}