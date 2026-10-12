
import { useEffect, useRef, useState } from "react";

function ArrayVisualizer({ question }) {

    const array = question?.inputArray || [];

    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);

    // --------------------------------------------------
    // RESET WHEN QUESTION CHANGES
    // --------------------------------------------------

    useEffect(() => {

        resetVisualization();

        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

        };

    }, [question?.id]);


    // --------------------------------------------------
    // RESET
    // --------------------------------------------------

    const resetVisualization = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setStep(0);
        setRunning(false);
    };


    // --------------------------------------------------
    // MAXIMUM STEPS
    // --------------------------------------------------

    const getMaxSteps = () => {

        if (!array.length) {
            return 0;
        }

        switch (question?.id) {

            case 1:
                return array.length;

            case 2:
                return array.length;

            case 3:
                return Math.ceil(array.length / 2);

            case 4:
                return array.length;

            case 5:
                return array.length;

            case 6:
                return array.length;

            case 7:
                return array.length;

            case 8:
                return array.length;

            case 9:
                return Math.max(
                    1,
                    (array.length * (array.length - 1)) / 2
                );

            case 10:
                return (
                    (question?.inputArray?.[0]?.length || 0) +
                    (question?.inputArray?.[1]?.length || 0)
                );

            default:
                return array.length;
        }
    };


    // --------------------------------------------------
    // START
    // --------------------------------------------------

    const startVisualization = () => {

        if (!array.length || running) {
            return;
        }

        setStep(0);
        setRunning(true);

        let currentStep = 0;

        const maxSteps = getMaxSteps();

        intervalRef.current = setInterval(() => {

            currentStep++;

            if (currentStep >= maxSteps) {

                clearInterval(intervalRef.current);

                setRunning(false);
                setStep(maxSteps);

                return;
            }

            setStep(currentStep);

        }, 1000);
    };


    // ==================================================
    // QUESTION 1
    // LARGEST + SMALLEST
    // ==================================================

    const getLargestSmallestState = () => {

        let largestIndex = 0;
        let smallestIndex = 0;

        for (
            let i = 1;
            i < array.length && i <= step;
            i++
        ) {

            if (array[i] > array[largestIndex]) {
                largestIndex = i;
            }

            if (array[i] < array[smallestIndex]) {
                smallestIndex = i;
            }
        }

        return {
            largestIndex,
            smallestIndex
        };
    };


    // ==================================================
    // QUESTION 2
    // SECOND LARGEST
    // ==================================================

    const getSecondLargestState = () => {

        let largestIndex = -1;
        let secondLargestIndex = -1;

        for (
            let i = 0;
            i < array.length && i <= step;
            i++
        ) {

            if (
                largestIndex === -1 ||
                array[i] > array[largestIndex]
            ) {

                secondLargestIndex = largestIndex;
                largestIndex = i;

            } else if (
                i !== largestIndex &&
                (
                    secondLargestIndex === -1 ||
                    array[i] > array[secondLargestIndex]
                )
            ) {

                secondLargestIndex = i;
            }
        }

        return {
            largestIndex,
            secondLargestIndex
        };
    };


    // ==================================================
    // QUESTION 3
    // REVERSE ARRAY
    // ==================================================

    const getReverseState = () => {

        const result = [...array];

        const swaps = Math.min(
            step,
            Math.floor(array.length / 2)
        );

        for (let i = 0; i < swaps; i++) {

            const j = array.length - 1 - i;

            const temp = result[i];

            result[i] = result[j];

            result[j] = temp;
        }

        return result;
    };


    // ==================================================
    // QUESTION 4
    // REMOVE DUPLICATES
    // ==================================================

    const getUniqueArray = () => {

        const result = [];

        for (
            let i = 0;
            i < array.length && i <= step;
            i++
        ) {

            if (!result.includes(array[i])) {
                result.push(array[i]);
            }
        }

        return result;
    };


    // ==================================================
    // QUESTION 5
    // MISSING NUMBER
    // ==================================================

    const getMissingNumberState = () => {

        const n = array.length + 1;

        const expectedSum =
            (n * (n + 1)) / 2;

        let actualSum = 0;

        for (
            let i = 0;
            i < array.length && i < step;
            i++
        ) {

            actualSum += array[i];
        }

        return {
            expectedSum,
            actualSum,
            missing: expectedSum - actualSum
        };
    };


    // ==================================================
    // QUESTION 6
    // DUPLICATES
    // ==================================================

    const getDuplicateState = () => {

        const frequency = {};

        for (
            let i = 0;
            i < array.length && i <= step;
            i++
        ) {

            const value = array[i];

            frequency[value] =
                (frequency[value] || 0) + 1;
        }

        return frequency;
    };


    // ==================================================
    // QUESTION 7
    // KADANE
    // ==================================================

    const getKadaneState = () => {

        if (!array.length) {

            return {
                currentSum: 0,
                maxSum: 0
            };
        }

        let currentSum = array[0];

        let maxSum = array[0];

        for (
            let i = 1;
            i < array.length && i <= step;
            i++
        ) {

            currentSum = Math.max(
                array[i],
                currentSum + array[i]
            );

            maxSum = Math.max(
                maxSum,
                currentSum
            );
        }

        return {
            currentSum,
            maxSum
        };
    };


    // ==================================================
    // QUESTION 8
    // MOVE ZEROES
    // ==================================================

    const getZeroState = () => {

        const result = [...array];

        let position = 0;

        for (
            let i = 0;
            i < array.length && i <= step;
            i++
        ) {

            if (result[i] !== 0) {

                const temp = result[position];

                result[position] = result[i];

                result[i] = temp;

                position++;
            }
        }

        return result;
    };


    // ==================================================
    // QUESTION 9
    // TWO SUM
    // ==================================================

    const getTwoSumState = () => {

        const pairs = [];

        for (let i = 0; i < array.length; i++) {

            for (
                let j = i + 1;
                j < array.length;
                j++
            ) {

                pairs.push({
                    left: i,
                    right: j
                });
            }
        }

        if (!pairs.length) {
            return null;
        }

        const index = Math.min(
            step,
            pairs.length - 1
        );

        return pairs[index];
    };


    // ==================================================
    // QUESTION 10
    // MERGE SORTED ARRAYS
    // ==================================================

    const getMergeState = () => {

        const arr1 =
            question?.inputArray?.[0] || [];

        const arr2 =
            question?.inputArray?.[1] || [];

        const result = [];

        let i = 0;
        let j = 0;

        let count = 0;

        while (
            i < arr1.length &&
            j < arr2.length &&
            count < step
        ) {

            if (arr1[i] <= arr2[j]) {

                result.push(arr1[i]);

                i++;

            } else {

                result.push(arr2[j]);

                j++;
            }

            count++;
        }

        while (
            i < arr1.length &&
            count < step
        ) {

            result.push(arr1[i]);

            i++;
            count++;
        }

        while (
            j < arr2.length &&
            count < step
        ) {

            result.push(arr2[j]);

            j++;
            count++;
        }

        return result;
    };


    // ==================================================
    // TITLE
    // ==================================================

    const getVisualizerTitle = () => {

        switch (question?.id) {

            case 1:
                return "Largest & Smallest";

            case 2:
                return "Second Largest";

            case 3:
                return "Reverse Array";

            case 4:
                return "Remove Duplicates";

            case 5:
                return "Missing Number";

            case 6:
                return "Find Duplicates";

            case 7:
                return "Kadane's Algorithm";

            case 8:
                return "Move Zeroes";

            case 9:
                return "Two Sum";

            case 10:
                return "Merge Sorted Arrays";

            default:
                return "Array Visualization";
        }
    };


    // ==================================================
    // BOX COLOR
    // ==================================================

    const getBoxStyle = (index) => {

        let backgroundColor = "white";

        // Question 1
        if (question?.id === 1) {

            const {
                largestIndex,
                smallestIndex
            } = getLargestSmallestState();

            if (index === largestIndex) {
                backgroundColor = "lightgreen";
            }

            if (index === smallestIndex) {
                backgroundColor = "lightcoral";
            }
        }


        // Question 2
        if (question?.id === 2) {

            const {
                largestIndex,
                secondLargestIndex
            } = getSecondLargestState();

            if (index === largestIndex) {
                backgroundColor = "lightgreen";
            }

            if (index === secondLargestIndex) {
                backgroundColor = "lightyellow";
            }
        }


        // Question 3
        if (question?.id === 3) {

            const swaps = Math.min(
                step,
                Math.floor(array.length / 2)
            );

            for (let i = 0; i < swaps; i++) {

                const j =
                    array.length - 1 - i;

                if (
                    index === i ||
                    index === j
                ) {

                    backgroundColor = "lightblue";
                }
            }
        }


        // Question 6
        if (question?.id === 6) {

            const frequency =
                getDuplicateState();

            if (frequency[array[index]] > 1) {

                backgroundColor = "lightcoral";
            }
        }


        // Question 7
        if (question?.id === 7) {

            if (index <= step) {
                backgroundColor = "lightyellow";
            }
        }


        // Question 8
        if (question?.id === 8) {

            if (array[index] === 0) {

                backgroundColor = "lightcoral";
            }
        }


        // Question 9
        if (question?.id === 9) {

            const pair =
                getTwoSumState();

            if (
                pair &&
                (
                    index === pair.left ||
                    index === pair.right
                )
            ) {

                backgroundColor = "lightyellow";
            }
        }

        return backgroundColor;
    };


    // ==================================================
    // INFORMATION
    // ==================================================

    const renderInformation = () => {

        // Question 1
        if (question?.id === 1) {

            const {
                largestIndex,
                smallestIndex
            } = getLargestSmallestState();

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Current Value:{" "}
                        {array[step] ?? "-"}
                    </p>

                    <p>
                        Largest:{" "}
                        {array[largestIndex] ?? "-"}
                    </p>

                    <p>
                        Smallest:{" "}
                        {array[smallestIndex] ?? "-"}
                    </p>
                </>
            );
        }


        // Question 2
        if (question?.id === 2) {

            const {
                largestIndex,
                secondLargestIndex
            } = getSecondLargestState();

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Largest:{" "}
                        {array[largestIndex] ?? "-"}
                    </p>

                    <p>
                        Second Largest:{" "}
                        {
                            secondLargestIndex >= 0
                                ? array[secondLargestIndex]
                                : "-"
                        }
                    </p>
                </>
            );
        }


        // Question 3
        if (question?.id === 3) {

            return (
                <>
                    <p>
                        Swaps Completed: {step}
                    </p>

                    <p>
                        Current Array:{" "}
                        {JSON.stringify(
                            getReverseState()
                        )}
                    </p>
                </>
            );
        }


        // Question 4
        if (question?.id === 4) {

            return (
                <>
                    <p>
                        Elements Processed: {step}
                    </p>

                    <p>
                        Unique Elements:{" "}
                        {JSON.stringify(
                            getUniqueArray()
                        )}
                    </p>
                </>
            );
        }


        // Question 5
        if (question?.id === 5) {

            const result =
                getMissingNumberState();

            return (
                <>
                    <p>
                        Expected Sum:{" "}
                        {result.expectedSum}
                    </p>

                    <p>
                        Current Sum:{" "}
                        {result.actualSum}
                    </p>

                    <p>
                        Difference:{" "}
                        {result.missing}
                    </p>
                </>
            );
        }


        // Question 6
        if (question?.id === 6) {

            const frequency =
                getDuplicateState();

            const duplicates =
                Object.keys(frequency)
                    .filter(
                        key =>
                            frequency[key] > 1
                    );

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Duplicates:{" "}
                        {
                            duplicates.length
                                ? duplicates.join(", ")
                                : "None"
                        }
                    </p>
                </>
            );
        }


        // Question 7
        if (question?.id === 7) {

            const result =
                getKadaneState();

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Current Sum:{" "}
                        {result.currentSum}
                    </p>

                    <p>
                        Maximum Sum:{" "}
                        {result.maxSum}
                    </p>
                </>
            );
        }


        // Question 8
        if (question?.id === 8) {

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Current Array:{" "}
                        {JSON.stringify(
                            getZeroState()
                        )}
                    </p>
                </>
            );
        }


        // Question 9
        if (question?.id === 9) {

            const pair =
                getTwoSumState();

            if (!pair) {

                return (
                    <p>
                        No pair found.
                    </p>
                );
            }

            const target =
                question.target ?? 9;

            const sum =
                array[pair.left] +
                array[pair.right];

            return (
                <>
                    <p>
                        Checking:{" "}
                        {array[pair.left]}
                        {" + "}
                        {array[pair.right]}
                    </p>

                    <p>
                        Sum: {sum}
                    </p>

                    <p>
                        Target: {target}
                    </p>

                    {sum === target && (
                        <strong>
                            Pair Found ✓
                        </strong>
                    )}
                </>
            );
        }


        // Question 10
        if (question?.id === 10) {

            return (
                <>
                    <p>
                        Merge Steps: {step}
                    </p>

                    <p>
                        Result:{" "}
                        {JSON.stringify(
                            getMergeState()
                        )}
                    </p>
                </>
            );
        }

        return null;
    };


    // ==================================================
    // NO QUESTION
    // ==================================================

    if (!question) {

        return (
            <div
                style={{
                    border: "1px solid black",
                    padding: "20px",
                    marginTop: "20px"
                }}
            >
                Select an array question.
            </div>
        );
    }


    // ==================================================
    // DISPLAY ARRAY
    // ==================================================

    let displayedArray = array;

    if (question.id === 3) {
        displayedArray = getReverseState();
    }

    if (question.id === 4) {
        displayedArray = getUniqueArray();
    }

    if (question.id === 8) {
        displayedArray = getZeroState();
    }

    if (question.id === 10) {
        displayedArray = getMergeState();
    }


    // ==================================================
    // QUESTION 10 DATA
    // ==================================================

    const originalArrayForDisplay =
        question.id === 10
            ? [
                ...(question.inputArray?.[0] || []),
                ...(question.inputArray?.[1] || [])
            ]
            : array;


    return (
        <div
            style={{
                border: "1px solid #000",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h2>
                {getVisualizerTitle()}
            </h2>

            <p>
                {question.description}
            </p>


            {/* ========================================
                ORIGINAL ARRAY FOR MERGE
            ======================================== */}

            {question.id === 10 && (

                <div
                    style={{
                        marginTop: "20px"
                    }}
                >

                    <p>
                        Array 1:{" "}
                        {JSON.stringify(
                            question.inputArray?.[0] || []
                        )}
                    </p>

                    <p>
                        Array 2:{" "}
                        {JSON.stringify(
                            question.inputArray?.[1] || []
                        )}
                    </p>

                </div>
            )}


            {/* ========================================
                ARRAY VISUALIZATION
            ======================================== */}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-end",
                    flexWrap: "wrap",
                    marginTop: "30px"
                }}
            >

                {displayedArray.map(
                    (value, index) => (

                        <div
                            key={`${index}-${value}`}
                            style={{
                                textAlign: "center"
                            }}
                        >

                            <div
                                style={{
                                    width: "60px",
                                    minHeight: "50px",
                                    padding: "5px",
                                    border: "2px solid black",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor:
                                        getBoxStyle(index),
                                    fontWeight: "bold"
                                }}
                            >
                                {value}
                            </div>

                            <div>
                                index {index}
                            </div>

                        </div>
                    )
                )}

            </div>


            {/* ========================================
                INFORMATION
            ======================================== */}

            <div
                style={{
                    marginTop: "25px",
                    padding: "15px",
                    borderTop: "1px solid black"
                }}
            >

                {renderInformation()}

            </div>


            {/* ========================================
                CONTROLS
            ======================================== */}

            <div
                style={{
                    marginTop: "20px"
                }}
            >

                <button
                    onClick={startVisualization}
                    disabled={running}
                >
                    ▶ Start
                </button>

                <button
                    onClick={resetVisualization}
                    style={{
                        marginLeft: "10px"
                    }}
                >
                    ↻ Reset
                </button>

            </div>

        </div>
    );
}

export default ArrayVisualizer;

