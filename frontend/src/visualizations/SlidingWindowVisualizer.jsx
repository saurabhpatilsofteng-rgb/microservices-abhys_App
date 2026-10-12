import { useEffect, useRef, useState } from "react";

function SlidingWindowVisualizer({ question }) {

    const array = question?.inputArray || [];
    const string = question?.inputString || "";

    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);


    // ==================================================
    // RESET WHEN QUESTION CHANGES
    // ==================================================

    useEffect(() => {

        resetVisualization();

        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

        };

    }, [question?.id]);


    // ==================================================
    // RESET
    // ==================================================

    const resetVisualization = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setStep(0);
        setRunning(false);
    };


    // ==================================================
    // MAXIMUM STEPS
    // ==================================================

    const getMaxSteps = () => {

        // Array questions
        if ([1, 2, 3, 4, 5, 6].includes(question?.id)) {
            return array.length;
        }

        // String questions
        if ([7, 8, 9, 10].includes(question?.id)) {
            return string.length;
        }

        return 0;
    };


    // ==================================================
    // START
    // ==================================================

    const startVisualization = () => {

        if (running || !question) {
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
    // CURRENT WINDOW
    // ==================================================

    const getWindow = () => {

        const k = question?.k || 3;

        if (step < k - 1) {
            return {
                start: 0,
                end: step
            };
        }

        let end = step;

        let start = end - k + 1;

        if (start < 0) {
            start = 0;
        }

        return {
            start,
            end
        };
    };


    // ==================================================
    // QUESTION 1
    // MAXIMUM SUM SUBARRAY
    // ==================================================

    const getMaximumSumState = () => {

        const k = question?.k || 3;

        let start = Math.max(0, step - k + 1);
        let end = step;

        let sum = 0;

        for (
            let i = start;
            i <= end && i < array.length;
            i++
        ) {
            sum += array[i];
        }

        return {
            start,
            end,
            sum
        };
    };


    // ==================================================
    // QUESTION 2
    // MINIMUM SUM SUBARRAY
    // ==================================================

    const getMinimumSumState = () => {

        const k = question?.k || 3;

        let start = Math.max(0, step - k + 1);
        let end = step;

        let sum = 0;

        for (
            let i = start;
            i <= end && i < array.length;
            i++
        ) {
            sum += array[i];
        }

        return {
            start,
            end,
            sum
        };
    };


    // ==================================================
    // QUESTION 3
    // AVERAGE OF SUBARRAY
    // ==================================================

    const getAverageState = () => {

        const k = question?.k || 5;

        let start = Math.max(0, step - k + 1);
        let end = step;

        let sum = 0;

        for (
            let i = start;
            i <= end && i < array.length;
            i++
        ) {
            sum += array[i];
        }

        const size = end - start + 1;

        const average =
            size > 0
                ? sum / size
                : 0;

        return {
            start,
            end,
            sum,
            average
        };
    };


    // ==================================================
    // QUESTION 4
    // MAXIMUM CONSECUTIVE ONES
    // ==================================================

    const getConsecutiveOnesState = () => {

        let current = 0;
        let maximum = 0;

        for (
            let i = 0;
            i <= step && i < array.length;
            i++
        ) {

            if (array[i] === 1) {

                current++;

                maximum =
                    Math.max(
                        maximum,
                        current
                    );

            } else {

                current = 0;
            }
        }

        return {
            current,
            maximum
        };
    };


    // ==================================================
    // QUESTION 5
    // LONGEST SUBARRAY SUM <= K
    // ==================================================

    const getLongestSubarrayState = () => {

        const k = question?.k || 4;

        let left = 0;
        let sum = 0;
        let maxLength = 0;

        for (
            let right = 0;
            right <= step && right < array.length;
            right++
        ) {

            sum += array[right];

            while (
                sum > k &&
                left <= right
            ) {

                sum -= array[left];

                left++;
            }

            maxLength =
                Math.max(
                    maxLength,
                    right - left + 1
                );
        }

        return {
            left,
            right: step,
            sum,
            maxLength
        };
    };


    // ==================================================
    // QUESTION 6
    // SMALLEST SUBARRAY SUM >= K
    // ==================================================

    const getSmallestSubarrayState = () => {

        const k = question?.k || 7;

        let left = 0;
        let sum = 0;

        let minLength =
            Infinity;

        let bestStart = 0;
        let bestEnd = 0;

        for (
            let right = 0;
            right <= step && right < array.length;
            right++
        ) {

            sum += array[right];

            while (sum >= k) {

                const length =
                    right - left + 1;

                if (length < minLength) {

                    minLength = length;

                    bestStart = left;
                    bestEnd = right;
                }

                sum -= array[left];

                left++;
            }
        }

        if (minLength === Infinity) {
            minLength = 0;
        }

        return {
            left,
            right: step,
            minLength,
            bestStart,
            bestEnd
        };
    };


    // ==================================================
    // QUESTION 7
    // LONGEST SUBSTRING WITHOUT REPEATING
    // ==================================================

    const getNonRepeatingState = () => {

        const set = new Set();

        let left = 0;
        let maxLength = 0;

        let bestStart = 0;
        let bestEnd = 0;

        for (
            let right = 0;
            right <= step &&
            right < string.length;
            right++
        ) {

            const ch = string[right];

            while (set.has(ch)) {

                set.delete(
                    string[left]
                );

                left++;
            }

            set.add(ch);

            const length =
                right - left + 1;

            if (length > maxLength) {

                maxLength = length;

                bestStart = left;
                bestEnd = right;
            }
        }

        return {
            left,
            right: step,
            maxLength,
            bestStart,
            bestEnd,
            set
        };
    };


    // ==================================================
    // QUESTION 8
    // LONGEST SUBSTRING K DISTINCT
    // ==================================================

    const getKDistinctState = () => {

        const k = question?.k || 2;

        const map = new Map();

        let left = 0;

        let maxLength = 0;

        let bestStart = 0;
        let bestEnd = 0;

        for (
            let right = 0;
            right <= step &&
            right < string.length;
            right++
        ) {

            const ch = string[right];

            map.set(
                ch,
                (map.get(ch) || 0) + 1
            );

            while (map.size > k) {

                const leftChar =
                    string[left];

                map.set(
                    leftChar,
                    map.get(leftChar) - 1
                );

                if (
                    map.get(leftChar) === 0
                ) {
                    map.delete(leftChar);
                }

                left++;
            }

            const length =
                right - left + 1;

            if (length > maxLength) {

                maxLength = length;

                bestStart = left;
                bestEnd = right;
            }
        }

        return {
            left,
            right: step,
            maxLength,
            bestStart,
            bestEnd,
            map
        };
    };


    // ==================================================
    // QUESTION 9
    // MAXIMUM VOWELS
    // ==================================================

    const isVowel = (ch) => {

        return (
            ch === "a" ||
            ch === "e" ||
            ch === "i" ||
            ch === "o" ||
            ch === "u"
        );
    };


    const getMaximumVowelsState = () => {

        const k = question?.k || 3;

        let start =
            Math.max(
                0,
                step - k + 1
            );

        let end = step;

        let vowelCount = 0;

        for (
            let i = start;
            i <= end &&
            i < string.length;
            i++
        ) {

            if (
                isVowel(
                    string[i].toLowerCase()
                )
            ) {
                vowelCount++;
            }
        }

        return {
            start,
            end,
            vowelCount
        };
    };


    // ==================================================
    // QUESTION 10
    // MINIMUM WINDOW SUBSTRING
    // ==================================================

    const getMinimumWindowState = () => {

        const target =
            question?.targetString || "ABC";

        const required = new Map();

        for (const ch of target) {

            required.set(
                ch,
                (required.get(ch) || 0) + 1
            );
        }

        const window = new Map();

        let left = 0;
        let formed = 0;

        let minLength =
            Infinity;

        let bestStart = 0;
        let bestEnd = 0;

        for (
            let right = 0;
            right <= step &&
            right < string.length;
            right++
        ) {

            const ch = string[right];

            window.set(
                ch,
                (window.get(ch) || 0) + 1
            );

            if (
                required.has(ch) &&
                window.get(ch) ===
                required.get(ch)
            ) {
                formed++;
            }

            while (
                formed === required.size
            ) {

                const length =
                    right - left + 1;

                if (length < minLength) {

                    minLength = length;

                    bestStart = left;
                    bestEnd = right;
                }

                const leftChar =
                    string[left];

                window.set(
                    leftChar,
                    window.get(leftChar) - 1
                );

                if (
                    required.has(leftChar) &&
                    window.get(leftChar) <
                    required.get(leftChar)
                ) {

                    formed--;
                }

                left++;
            }
        }

        return {
            left,
            right: step,
            minLength:
                minLength === Infinity
                    ? 0
                    : minLength,
            bestStart,
            bestEnd
        };
    };


    // ==================================================
    // RENDER ARRAY
    // ==================================================

    const renderArray = () => {

        if (!array.length) {
            return null;
        }

        let state = {};

        switch (question?.id) {

            case 1:
                state =
                    getMaximumSumState();
                break;

            case 2:
                state =
                    getMinimumSumState();
                break;

            case 3:
                state =
                    getAverageState();
                break;

            case 4:
                state =
                    getConsecutiveOnesState();
                break;

            case 5:
                state =
                    getLongestSubarrayState();
                break;

            case 6:
                state =
                    getSmallestSubarrayState();
                break;

            default:
                state = {};
        }

        return (

            <div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px"
                    }}
                >

                    {array.map((value, index) => {

                        let active = false;

                        if (
                            state.start !== undefined &&
                            index >= state.start &&
                            index <= state.end
                        ) {
                            active = true;
                        }

                        if (
                            question?.id === 5 &&
                            index >= state.left &&
                            index <= state.right
                        ) {
                            active = true;
                        }

                        if (
                            question?.id === 6 &&
                            index >= state.bestStart &&
                            index <= state.bestEnd
                        ) {
                            active = true;
                        }

                        return (

                            <div
                                key={index}
                                style={{
                                    width: "65px",
                                    height: "65px",
                                    border: "2px solid black",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        active
                                            ? "#00ace6"
                                            : "white",
                                    fontWeight: "bold"
                                }}
                            >

                                <div>
                                    {value}
                                </div>

                                <small>
                                    [{index}]
                                </small>

                            </div>

                        );

                    })}

                </div>


                {/* QUESTION 1 */}

                {question?.id === 1 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Current Window Sum:
                        </strong>{" "}

                        {state.sum}

                    </div>

                )}


                {/* QUESTION 2 */}

                {question?.id === 2 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Current Window Sum:
                        </strong>{" "}

                        {state.sum}

                    </div>

                )}


                {/* QUESTION 3 */}

                {question?.id === 3 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Window Sum:
                        </strong>{" "}

                        {state.sum}

                        {" | "}

                        <strong>
                            Average:
                        </strong>{" "}

                        {state.average.toFixed(2)}

                    </div>

                )}


                {/* QUESTION 4 */}

                {question?.id === 4 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Current Consecutive 1s:
                        </strong>{" "}

                        {state.current}

                        {" | "}

                        <strong>
                            Maximum:
                        </strong>{" "}

                        {state.maximum}

                    </div>

                )}


                {/* QUESTION 5 */}

                {question?.id === 5 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Current Sum:
                        </strong>{" "}

                        {state.sum}

                        {" | "}

                        <strong>
                            Longest Length:
                        </strong>{" "}

                        {state.maxLength}

                    </div>

                )}


                {/* QUESTION 6 */}

                {question?.id === 6 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Smallest Length:
                        </strong>{" "}

                        {state.minLength}

                    </div>

                )}

            </div>
        );
    };


    // ==================================================
    // RENDER STRING
    // ==================================================

    const renderString = () => {

        if (!string.length) {
            return null;
        }

        let state = {};

        switch (question?.id) {

            case 7:
                state =
                    getNonRepeatingState();
                break;

            case 8:
                state =
                    getKDistinctState();
                break;

            case 9:
                state =
                    getMaximumVowelsState();
                break;

            case 10:
                state =
                    getMinimumWindowState();
                break;

            default:
                state = {};
        }

        return (

            <div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "20px"
                    }}
                >

                    {string.split("").map(
                        (char, index) => {

                            let active = false;

                            if (
                                state.left !== undefined &&
                                index >= state.left &&
                                index <= state.right
                            ) {
                                active = true;
                            }

                            if (
                                question?.id === 9 &&
                                index >= state.start &&
                                index <= state.end
                            ) {
                                active = true;
                            }

                            if (
                                question?.id === 10 &&
                                index >= state.bestStart &&
                                index <= state.bestEnd
                            ) {
                                active = true;
                            }

                            return (

                                <div
                                    key={index}
                                    style={{
                                        width: "55px",
                                        height: "65px",
                                        border: "2px solid black",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            active
                                                ? "#00ace6"
                                                : "white",
                                        fontWeight: "bold"
                                    }}
                                >

                                    <div>
                                        {char}
                                    </div>

                                    <small>
                                        [{index}]
                                    </small>

                                </div>

                            );

                        }
                    )}

                </div>


                {/* QUESTION 7 */}

                {question?.id === 7 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Longest Length:
                        </strong>{" "}

                        {state.maxLength}

                        {" | "}

                        <strong>
                            Window:
                        </strong>{" "}

                        {string.substring(
                            state.bestStart,
                            state.bestEnd + 1
                        )}

                    </div>

                )}


                {/* QUESTION 8 */}

                {question?.id === 8 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Distinct Characters:
                        </strong>{" "}

                        {state.map?.size || 0}

                        {" | "}

                        <strong>
                            Longest Length:
                        </strong>{" "}

                        {state.maxLength}

                        {" | "}

                        <strong>
                            Window:
                        </strong>{" "}

                        {string.substring(
                            state.bestStart,
                            state.bestEnd + 1
                        )}

                    </div>

                )}


                {/* QUESTION 9 */}

                {question?.id === 9 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Vowels in Window:
                        </strong>{" "}

                        {state.vowelCount}

                    </div>

                )}


                {/* QUESTION 10 */}

                {question?.id === 10 && (

                    <div style={{ marginTop: "20px" }}>

                        <strong>
                            Minimum Window:
                        </strong>{" "}

                        {state.minLength > 0
                            ? string.substring(
                                state.bestStart,
                                state.bestEnd + 1
                            )
                            : "Not Found"}

                    </div>

                )}

            </div>
        );
    };


    // ==================================================
    // MAIN UI
    // ==================================================

    return (

        <div
            style={{
                border: "2px solid black",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h3>
                Sliding Window Visualization
            </h3>


            <div
                style={{
                    marginBottom: "15px"
                }}
            >

                Step: {step} / {getMaxSteps()}

            </div>


            {array.length > 0
                ? renderArray()
                : renderString()
            }


            {/* CONTROLS */}

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "25px"
                }}
            >

                <button
                    onClick={startVisualization}
                    disabled={running}
                >
                    Start
                </button>


                <button
                    onClick={resetVisualization}
                >
                    Reset
                </button>

            </div>

        </div>
    );
}

export default SlidingWindowVisualizer;