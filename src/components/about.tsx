export default function About() {
    return (
        <div className="px-8 py-4 lg:py-8">
            <div className="max-w-7xl mx-auto">
                <p className="text-base">Quanty is a fast, friendly data analyzer that explains your results, not just the final numbers. Paste a list of values and get clear steps, formulas, and interpretations for the most common statistics.</p>
                
                <h1 className="mt-8 text-2xl font-semibold">What Quanty Analyzes:</h1>
                <ul className="text-base list-inside list-disc ml-2">
                    <li>Mean (Average): Find the central value of your dataset.</li>
                    <li>Median: Identify the middle point that divides your data evenly.</li>
                    <li>Mode: Detect the most frequently occurring value.</li>
                    <li>Range: Understand the spread between the smallest and largest numbers.</li>
                    <li>Variance: See how much your data values differ from the mean.</li>
                    <li>Standard Deviation: Measure how spread out your data is around the mean.</li>
                </ul>

                <p className="text-base mt-8">Whether you’re a student, researcher, or professional, Quanty makes statistics more accessible by combining accuracy, clarity, and learning in one tool.</p>
            </div>
        </div>
    )
}