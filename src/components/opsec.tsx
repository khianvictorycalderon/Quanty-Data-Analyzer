import { useState } from "react"

interface OpSecDataProps {
    title: string;
    content: React.ReactNode;
}

interface InputFieldsProps {
    input: string;
    type: "population" | "sample" | null;
}

export default function OpSec() {
    return (
        <div className="bg-neutral-800 px-8">
            <InputSection />
            <OutputSection />
        </div>
    )
}

const InputSection = () => {

    const [input, setInput] = useState<InputFieldsProps>({
        input: "",
        type: null
    })

    return (
        <div className="max-w-7xl mx-auto py-4 lg:py-8 flex flex-col-reverse md:flex-row gap-4 md:gap-8">

            <div className="flex-1/2">
                
                <div className="flex flex-col">
                    <p className="font-bold">Enter data set: </p>
                    <input 
                        className="bg-neutral-50 text-black mt-2 p-2 outline-none rounded focus:ring-2 focus:ring-blue-600" 
                        type="text"
                        placeholder="1,2,3,4,5,6..."
                        />

                    <p className="font-bold mt-2">Data type: </p>
                    <select className="bg-neutral-50 text-black mt-2 p-2 outline-none rounded focus:ring-2 focus:ring-blue-600 w-full md:w-[50%]">
                        <option value="">Choose data type...</option>
                        <option value="sample">Sample (n - 1)</option>
                        <option value="population">Population (n)</option>
                    </select>

                    <button className="bg-neutral-600 mt-8 mb-6 py-2 font-bold rounded-md cursor-pointer hover:bg-neutral-500 transform duration-300">
                        Solve
                    </button>

                </div>

            </div>
            <div className="flex-1/2">
                <h1 className="font-bold text-2xl">Usage:</h1>
                <p className="text-base mt-2 leading-8">
                    Enter data in the input field separated by comma {"(,)"} <br/>
                    Examples: <br/>
                </p>
                <ul className="list-inside">
                    <li className="list-disc">1,5,7,10</li>
                    <li className="list-disc">5,9,12,-13,0</li>
                </ul>
            </div>

        </div>
    )
}

const OutputSection = () => {

    const [opsecData, setOpSecData] = useState<OpSecDataProps[]>([
        {
            title: "Mean",
            content: <span>Solution here...</span>
        },
        {
            title: "Median",
            content: <span>Solution here...</span>
        },
        {
            title: "Mode",
            content: <span>Solution here...</span>
        },
        {
            title: "Range",
            content: <span>Solution here...</span>
        },
        {
            title: "Variance",
            content: <span>Solution here...</span>
        },
        {
            title: "Standard Deviation",
            content: <span>Solution here...</span>
        },
    ]);

    return (
        <div className="max-w-7xl mx-auto flex flex-col pb-8">
            {opsecData.map((item, index) => (
                <div className="flex flex-col md:flex-row" key={`${item.title}-${index}`}>
                    <h1 className="text-2xl font-bold flex-1/5 border-2 flex justify-center items-center">{item.title}</h1>
                    <div className="flex-4/5 border-2 min-h-[150px] p-2">
                        <p className="">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}