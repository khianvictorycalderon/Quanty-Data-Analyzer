import { useState } from "react";
import { BlockMath } from "react-katex";

interface OpSecDataProps {
  title: string;
  content: React.ReactNode;
}

interface InputFieldsProps {
  input: string;
  type: "population" | "sample" | null;
}

export default function OpSec() {
  const [input, setInput] = useState<InputFieldsProps>({
    input: "",
    type: null,
  });

  const [opsecData, setOpSecData] = useState<OpSecDataProps[]>([]);

  const handleSolve = () => {
    if (!input.input) return;

    const values = input.input
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    if (values.length === 0 || !input.type) return;

    const n = values.length;
    const sum = values.reduce((a, b) => a + b, 0);
    const mean = sum / n;

    // ---------------- Mean ----------------
    const meanSteps = [
      "\\mu = \\frac{\\Sigma x}{n}",
      `\\mu = \\frac{${values.join("+")}}{${n}}`,
      `\\mu = \\frac{${sum}}{${n}}`,
      `\\mu = ${mean.toFixed(2)}`,
    ];

    // ---------------- Median ----------------
    const sorted = [...values].sort((a, b) => a - b);
    let median: number;
    let medianSteps: string[];

    if (n % 2 === 0) {
      median = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
      medianSteps = [
        `\\text{Sorted Data: } ${sorted.join(", ")}`,
        `\\text{Median} = \\frac{x_{${n / 2}} + x_{${n / 2 + 1}}}{2}`,
        `= \\frac{${sorted[n / 2 - 1]} + ${sorted[n / 2]}}{2}`,
        `= ${median.toFixed(2)}`,
      ];
    } else {
      median = sorted[Math.floor(n / 2)];
      medianSteps = [
        `\\text{Sorted Data: } ${sorted.join(", ")}`,
        `\\text{Median} = x_{(${n}+1)/2}`,
        `= ${median}`,
      ];
    }

    // ---------------- Mode ----------------
    const freqMap: Record<number, number> = {};
    values.forEach((v) => {
      freqMap[v] = (freqMap[v] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(freqMap));
    const modes = Object.keys(freqMap)
      .filter((k) => freqMap[parseFloat(k)] === maxFreq)
      .map(Number);

    const modeSteps = [
      "\\text{Mode = value(s) with highest frequency}",
      `\\text{Frequencies: } ${JSON.stringify(freqMap)}`,
      `\\text{Highest Frequency} = ${maxFreq}`,
      `\\text{Mode} = ${modes.join(", ")}`,
    ];

    // ---------------- Range ----------------
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal;

    const rangeSteps = [
      "\\text{Range} = \\text{Max} - \\text{Min}",
      `= ${maxVal} - ${minVal}`,
      `= ${range}`,
    ];

    // ---------------- Variance ----------------
    const denom = input.type === "population" ? n : n - 1;
    const squaredDiffs = values.map((v) => Math.pow(v - mean, 2));
    const sumSqDiffs = squaredDiffs.reduce((a, b) => a + b, 0);
    const variance = sumSqDiffs / denom;

    const varianceSteps = [
      input.type === "population"
        ? "\\sigma^2 = \\frac{\\Sigma (x - \\mu)^2}{N}"
        : "s^2 = \\frac{\\Sigma (x - \\bar{x})^2}{n-1}",
      `= \\frac{${squaredDiffs.map((d) => d.toFixed(2)).join("+")}}{${denom}}`,
      `= \\frac{${sumSqDiffs.toFixed(2)}}{${denom}}`,
      `= ${variance.toFixed(2)}`,
    ];

    // ---------------- Standard Deviation ----------------
    const stdDev = Math.sqrt(variance);

    const stdSteps = [
      input.type === "population"
        ? "\\sigma = \\sqrt{\\frac{\\Sigma (x - \\mu)^2}{N}}"
        : "s = \\sqrt{\\frac{\\Sigma (x - \\bar{x})^2}{n-1}}",
      `= \\sqrt{\\frac{${sumSqDiffs.toFixed(2)}}{${denom}}}`,
      `= \\sqrt{${variance.toFixed(2)}}`,
      `= ${stdDev.toFixed(2)}`,
    ];

    setOpSecData([
      { title: "Mean", content: <SolutionBox steps={meanSteps} /> },
      { title: "Median", content: <SolutionBox steps={medianSteps} /> },
      { title: "Mode", content: <SolutionBox steps={modeSteps} /> },
      { title: "Range", content: <SolutionBox steps={rangeSteps} /> },
      { title: "Variance", content: <SolutionBox steps={varianceSteps} /> },
      {
        title: "Standard Deviation",
        content: <SolutionBox steps={stdSteps} />,
      },
    ]);
  };

  return (
    <div className="bg-neutral-800 px-8 text-white">
      <InputSection input={input} setInput={setInput} onSolve={handleSolve} />
      <OutputSection opsecData={opsecData} />
    </div>
  );
}

// ---------------- Input Section ----------------
const InputSection = ({
  input,
  setInput,
  onSolve,
}: {
  input: InputFieldsProps;
  setInput: React.Dispatch<React.SetStateAction<InputFieldsProps>>;
  onSolve: () => void;
}) => {
  return (
    <div className="max-w-7xl mx-auto py-4 lg:py-8 flex flex-col-reverse md:flex-row gap-4 md:gap-8">
      <div className="flex-1/2">
        <div className="flex flex-col">
          <p className="font-bold">Enter data set: </p>
          <input
            className="bg-neutral-50 text-black mt-2 p-2 outline-none rounded focus:ring-2 focus:ring-blue-600"
            type="text"
            placeholder="1,2,3,4,5,6..."
            value={input.input}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, input: e.target.value }))
            }
          />

          <p className="font-bold mt-2">Data type: </p>
          <select
            className="bg-neutral-50 text-black mt-2 p-2 outline-none rounded focus:ring-2 focus:ring-blue-600 w-full md:w-[50%]"
            value={input.type ?? ""}
            onChange={(e) =>
              setInput((prev) => ({
                ...prev,
                type: e.target.value as "sample" | "population",
              }))
            }
          >
            <option value="">Choose data type...</option>
            <option value="sample">Sample (n - 1)</option>
            <option value="population">Population (n)</option>
          </select>

          <button
            className="bg-neutral-600 mt-8 mb-6 py-2 font-bold rounded-md cursor-pointer hover:bg-neutral-500 transform duration-300"
            onClick={onSolve}
          >
            Solve
          </button>
        </div>
      </div>

      <div className="flex-1/2">
        <h1 className="font-bold text-2xl">Usage:</h1>
        <p className="text-base mt-2 leading-8">
          Enter data in the input field separated by comma {"(,)"} <br />
          Examples: <br />
        </p>
        <ul className="list-inside">
          <li className="list-disc">1,5,7,10</li>
          <li className="list-disc">5,9,12,-13,0</li>
        </ul>
      </div>
    </div>
  );
};

// ---------------- Output Section ----------------
const OutputSection = ({ opsecData }: { opsecData: OpSecDataProps[] }) => {
  if (!opsecData.length) return null;

  return (
    <div className="max-w-7xl mx-auto flex flex-col pb-8">
      {opsecData.map((item, index) => (
        <div
          className="flex flex-col md:flex-row border-b border-neutral-600"
          key={`${item.title}-${index}`}
        >
          <h1 className="text-2xl font-bold flex-1/5 border-2 flex justify-center items-center p-2">
            {item.title}
          </h1>
          <div className="flex-4/5 border-2 p-2">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------------- Helper Component ----------------
const SolutionBox = ({ steps }: { steps: string[] }) => (
  <div className="overflow-x-auto">
    <div className="whitespace-nowrap space-y-2">
      {steps.map((s, i) => (
        <BlockMath key={i} math={s} />
      ))}
    </div>
  </div>
);
