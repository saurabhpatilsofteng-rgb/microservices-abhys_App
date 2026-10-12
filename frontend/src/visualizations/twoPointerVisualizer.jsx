
import { useEffect, useRef, useState } from "react";

function TwoPointerVisualizer({ question }) {

    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);

    const array = question?.inputArray || [];


    // ============================================================
    // RESET WHEN QUESTION CHANGES
    // ============================================================

    useEffect(() => {

        resetVisualization();

        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

        };

    }, [question?.id]);


    // ============================================================
    // RESET
    // ============================================================

    const resetVisualization = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setStep(0);
        setRunning(false);
    };


    // ============================================================
    // MAX STEPS
    // ============================================================

    const getMaxSteps = () => {

        switch (question?.id) {

            // Reverse Array
            case 21:
                return Math.floor(array.length / 2);

            // Palindrome
            case 22:
                return Math.floor(array.length / 2);

            // Two Sum
            case 23:
                return array.length;

            // Remove Duplicates
            case 24:
                return array.length;

            // Move Zeroes
            case 25:
                return array.length;

            // Pair Given Sum
            case 26:
                return array.length;

            // Pair Given Difference
            case 27:
                return array.length;

            // Merge Arrays
            case 28:
                return array.length + (question?.inputArray2?.length || 0);

            // Container
            case 29:
                return Math.floor(array.length / 2) + 1;

            // Three Sum
            case 30:
                return array.length * array.length;

            default:
                return array.length;
        }
    };


    // ============================================================
    // START
    // ============================================================

    const startVisualization = () => {

        if (!array.length || running) {
            return;
        }

        setStep(0);
        setRunning(true);

        let currentStep = 0;

        intervalRef.current = setInterval(() => {

            currentStep++;

            const maxSteps = getMaxSteps();

            if (currentStep >= maxSteps) {

                clearInterval(intervalRef.current);

                setStep(maxSteps);
                setRunning(false);

                return;
            }

            setStep(currentStep);

        }, 900);
    };


    // ============================================================
    // QUESTION TITLE
    // ============================================================

    const getTitle = () => {

        switch (question?.id) {

            case 21:
                return "Reverse an Array Using Two Pointers";

            case 22:
                return "Check Whether an Array is a Palindrome";

            case 23:
                return "Two Sum in a Sorted Array";

            case 24:
                return "Remove Duplicates from a Sorted Array";

            case 25:
                return "Move Zeroes to the End";

            case 26:
                return "Find a Pair with a Given Sum";

            case 27:
                return "Find a Pair with a Given Difference";

            case 28:
                return "Merge Two Sorted Arrays";

            case 29:
                return "Container With Most Water";

            case 30:
                return "Three Sum";

            default:
                return "Two Pointer Visualization";
        }
    };


    // ============================================================
    // QUESTION 21
    // REVERSE ARRAY
    // ============================================================

    const getReverseState = () => {

        let result = [...array];

        let left = 0;
        let right = array.length - 1;

        const swaps = Math.min(
            step,
            Math.floor(array.length / 2)
        );

        for (let i = 0; i < swaps; i++) {

            const temp = result[left];

            result[left] = result[right];

            result[right] = temp;

            left++;
            right--;
        }

        return {
            result,
            left,
            right
        };
    };


    // ============================================================
    // QUESTION 22
    // PALINDROME
    // ============================================================

    const getPalindromeState = () => {

        let left = 0;
        let right = array.length - 1;

        let palindrome = true;

        const comparisons = Math.min(
            step,
            Math.floor(array.length / 2)
        );

        for (let i = 0; i < comparisons; i++) {

            left = i;
            right = array.length - 1 - i;

            if (array[left] !== array[right]) {

                palindrome = false;

                break;
            }
        }

        return {
            left,
            right,
            palindrome
        };
    };


    // ============================================================
    // QUESTION 23
    // TWO SUM SORTED ARRAY
    // ============================================================

    const getTwoSumState = () => {

        let left = 0;
        let right = array.length - 1;

        const target =
            question?.example?.input?.target || 0;

        let found = false;

        for (let i = 0; i < step; i++) {

            if (left >= right) {
                break;
            }

            const sum =
                array[left] + array[right];

            if (sum === target) {

                found = true;

                break;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return {
            left,
            right,
            found,
            target
        };
    };


    // ============================================================
    // QUESTION 24
    // REMOVE DUPLICATES
    // ============================================================

    const getRemoveDuplicatesState = () => {

        let slow = 0;

        const result = [];

        for (
            let fast = 0;
            fast < array.length && fast <= step;
            fast++
        ) {

            if (
                fast === 0 ||
                array[fast] !== array[slow]
            ) {

                slow++;

                array[slow] = array[fast];
            }
        }

        for (let i = 0; i <= slow && i < array.length; i++) {
            result.push(array[i]);
        }

        return {
            slow,
            result
        };
    };


    // ============================================================
    // QUESTION 25
    // MOVE ZEROES
    // ============================================================

    const getMoveZeroesState = () => {

        const result = [...array];

        let nonZero = 0;

        for (
            let i = 0;
            i < result.length && i < step;
            i++
        ) {

            if (result[i] !== 0) {

                const temp = result[nonZero];

                result[nonZero] = result[i];

                result[i] = temp;

                nonZero++;
            }
        }

        return {
            result,
            nonZero
        };
    };


    // ============================================================
    // QUESTION 26
    // GIVEN SUM
    // ============================================================

    const getPairSumState = () => {

        const sorted = [...array].sort(
            (a, b) => a - b
        );

        let left = 0;
        let right = sorted.length - 1;

        const target =
            question?.example?.input?.target || 0;

        let found = false;

        for (let i = 0; i < step; i++) {

            if (left >= right) {
                break;
            }

            const sum =
                sorted[left] + sorted[right];

            if (sum === target) {

                found = true;

                break;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return {
            sorted,
            left,
            right,
            found,
            target
        };
    };


    // ============================================================
    // QUESTION 27
    // GIVEN DIFFERENCE
    // ============================================================

    const getDifferenceState = () => {

        const sorted = [...array].sort(
            (a, b) => a - b
        );

        let left = 0;
        let right = 1;

        const difference =
            question?.example?.input?.difference || 0;

        let found = false;

        for (let i = 0; i < step; i++) {

            if (left >= sorted.length || right >= sorted.length) {
                break;
            }

            const diff =
                sorted[right] - sorted[left];

            if (diff === difference) {

                found = true;

                break;
            }

            if (diff < difference) {

                right++;

            } else {

                left++;

                if (left === right) {
                    right++;
                }
            }
        }

        return {
            sorted,
            left,
            right,
            found,
            difference
        };
    };


    // ============================================================
    // QUESTION 28
    // MERGE TWO SORTED ARRAYS
    // ============================================================

    const getMergeState = () => {

        const array2 =
            question?.inputArray2 || [];

        let left = 0;
        let right = 0;

        const result = [];

        let count = 0;

        while (
            left < array.length &&
            right < array2.length &&
            count < step
        ) {

            if (array[left] <= array2[right]) {

                result.push(array[left]);

                left++;

            } else {

                result.push(array2[right]);

                right++;
            }

            count++;
        }

        while (
            left < array.length &&
            count < step
        ) {

            result.push(array[left]);

            left++;
            count++;
        }

        while (
            right < array2.length &&
            count < step
        ) {

            result.push(array2[right]);

            right++;
            count++;
        }

        return {
            array2,
            left,
            right,
            result
        };
    };


    // ============================================================
    // QUESTION 29
    // CONTAINER WITH MOST WATER
    // ============================================================

    const getContainerState = () => {

        let left = 0;
        let right = array.length - 1;

        let maxArea = 0;

        for (let i = 0; i < step; i++) {

            if (left >= right) {
                break;
            }

            const height =
                Math.min(
                    array[left],
                    array[right]
                );

            const width = right - left;

            const area = height * width;

            maxArea =
                Math.max(maxArea, area);

            if (array[left] < array[right]) {

                left++;

            } else {

                right--;
            }
        }

        return {
            left,
            right,
            maxArea
        };
    };


    // ============================================================
    // QUESTION 30
    // THREE SUM
    // ============================================================

    const getThreeSumState = () => {

        const sorted = [...array].sort(
            (a, b) => a - b
        );

        let first = 0;
        let left = 1;
        let right = sorted.length - 1;

        let foundTriplets = [];

        let count = 0;

        for (
            let i = 0;
            i < sorted.length - 2;
            i++
        ) {

            left = i + 1;
            right = sorted.length - 1;

            while (left < right) {

                if (count >= step) {
                    break;
                }

                const sum =
                    sorted[i] +
                    sorted[left] +
                    sorted[right];

                if (sum === 0) {

                    foundTriplets.push([
                        sorted[i],
                        sorted[left],
                        sorted[right]
                    ]);

                    left++;
                    right--;

                } else if (sum < 0) {

                    left++;

                } else {

                    right--;
                }

                count++;
            }

            if (count >= step) {
                break;
            }
        }

        return {
            sorted,
            first,
            left,
            right,
            foundTriplets
        };
    };


    // ============================================================
    // CURRENT STATE
    // ============================================================

    const reverseState =
        question?.id === 21
            ? getReverseState()
            : null;


    const palindromeState =
        question?.id === 22
            ? getPalindromeState()
            : null;


    const twoSumState =
        question?.id === 23
            ? getTwoSumState()
            : null;


    const removeDuplicatesState =
        question?.id === 24
            ? getRemoveDuplicatesState()
            : null;


    const moveZeroesState =
        question?.id === 25
            ? getMoveZeroesState()
            : null;


    const pairSumState =
        question?.id === 26
            ? getPairSumState()
            : null;


    const differenceState =
        question?.id === 27
            ? getDifferenceState()
            : null;


    const mergeState =
        question?.id === 28
            ? getMergeState()
            : null;


    const containerState =
        question?.id === 29
            ? getContainerState()
            : null;


    const threeSumState =
        question?.id === 30
            ? getThreeSumState()
            : null;


    // ============================================================
    // DISPLAY ARRAY
    // ============================================================

    const displayArray =
        question?.id === 21
            ? reverseState.result
            : question?.id === 24
                ? removeDuplicatesState.result
                : question?.id === 25
                    ? moveZeroesState.result
                    : question?.id === 26
                        ? pairSumState.sorted
                        : question?.id === 27
                            ? differenceState.sorted
                            : question?.id === 28
                                ? mergeState.result
                                : question?.id === 30
                                    ? threeSumState.sorted
                                    : array;


    // ============================================================
    // POINTERS
    // ============================================================

    let leftPointer = null;
    let rightPointer = null;


    if (question?.id === 21) {

        leftPointer = reverseState.left;
        rightPointer = reverseState.right;

    } else if (question?.id === 22) {

        leftPointer = palindromeState.left;
        rightPointer = palindromeState.right;

    } else if (question?.id === 23) {

        leftPointer = twoSumState.left;
        rightPointer = twoSumState.right;

    } else if (question?.id === 26) {

        leftPointer = pairSumState.left;
        rightPointer = pairSumState.right;

    } else if (question?.id === 27) {

        leftPointer = differenceState.left;
        rightPointer = differenceState.right;

    } else if (question?.id === 29) {

        leftPointer = containerState.left;
        rightPointer = containerState.right;

    } else if (question?.id === 30) {

        leftPointer = threeSumState.left;
        rightPointer = threeSumState.right;
    }


    // ============================================================
    // RENDER
    // ============================================================

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h2>
                Two Pointer Visualization
            </h2>


            <h3>
                {getTitle()}
            </h3>


            {/* ARRAY */}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "40px",
                    flexWrap: "wrap"
                }}
            >

                {displayArray.map((value, index) => {

                    const isLeft =
                        index === leftPointer;

                    const isRight =
                        index === rightPointer;


                    return (
                        <div
                            key={index}
                            style={{
                                width: "60px",
                                height: "60px",
                                border: "2px solid black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                fontSize: "20px"
                            }}
                        >

                            {value}


                            {isLeft && (
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "-30px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    L
                                </span>
                            )}


                            {isRight && (
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: "-30px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    R
                                </span>
                            )}

                        </div>
                    );

                })}

            </div>


            {/* SECOND ARRAY FOR MERGE */}

            {question?.id === 28 && (
                <div style={{ marginTop: "50px" }}>

                    <h3>Second Array</h3>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px"
                        }}
                    >

                        {(question?.inputArray2 || []).map(
                            (value, index) => (

                                <div
                                    key={index}
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        border: "2px solid black",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    {value}
                                </div>

                            )
                        )}

                    </div>

                </div>
            )}


            {/* THREE SUM */}

            {question?.id === 30 && (
                <div style={{ marginTop: "30px" }}>

                    <strong>Triplets Found:</strong>

                    <pre>
                        {JSON.stringify(
                            threeSumState.foundTriplets,
                            null,
                            2
                        )}
                    </pre>

                </div>
            )}


            {/* RESULT */}

            {question?.id === 22 && step > 0 && (
                <p>
                    <strong>
                        Palindrome:
                    </strong>{" "}
                    {palindromeState.palindrome
                        ? "Checking..."
                        : "Not Palindrome"}
                </p>
            )}


            {question?.id === 23 && (
                <p>
                    <strong>
                        Target:
                    </strong>{" "}
                    {twoSumState.target}
                </p>
            )}


            {question?.id === 26 && (
                <p>
                    <strong>
                        Target:
                    </strong>{" "}
                    {pairSumState.target}
                </p>
            )}


            {question?.id === 27 && (
                <p>
                    <strong>
                        Difference:
                    </strong>{" "}
                    {differenceState.difference}
                </p>
            )}


            {question?.id === 29 && (
                <p>
                    <strong>
                        Maximum Area:
                    </strong>{" "}
                    {containerState.maxArea}
                </p>
            )}


            {/* CONTROLS */}

            <div style={{ marginTop: "40px" }}>

                <button
                    onClick={startVisualization}
                    disabled={running}
                    style={{
                        padding: "10px 20px",
                        marginRight: "10px"
                    }}
                >
                    Start
                </button>


                <button
                    onClick={resetVisualization}
                    style={{
                        padding: "10px 20px"
                    }}
                >
                    Reset
                </button>

            </div>


            {/* STEP */}

            <p style={{ marginTop: "20px" }}>

                <strong>
                    Step:
                </strong>{" "}

                {step}

            </p>

        </div>
    );
}

export default TwoPointerVisualizer;

