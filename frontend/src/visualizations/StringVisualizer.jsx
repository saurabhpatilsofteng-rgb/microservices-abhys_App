
import { useEffect, useRef, useState } from "react";

function StringVisualizer({ question }) {

    const [step, setStep] = useState(0);
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);

    /*
     * ============================================================
     * GET INPUT STRING
     * ============================================================
     */

    const str = question?.inputString || "";


    /*
     * ============================================================
     * RESET WHEN QUESTION CHANGES
     * ============================================================
     */

    useEffect(() => {

        resetVisualization();

        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

    }, [question?.id]);


    /*
     * ============================================================
     * RESET
     * ============================================================
     */

    const resetVisualization = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        setStep(0);
        setRunning(false);
    };


    /*
     * ============================================================
     * MAX STEPS
     * ============================================================
     */

    const getMaxSteps = () => {

        switch (question?.id) {

            case 1:
                return str.length;

            case 2:
                return str.length;

            case 3:
                return str.length;

            case 4:
                return str.length;

            case 5:
                return str.length;

            case 6:
                return str.length;

            case 7:
                return str.length;

            case 8:
                return str.length;

            case 9:
                return str.length;

            case 10:
                return str.length;

            default:
                return str.length;
        }
    };


    /*
     * ============================================================
     * START VISUALIZATION
     * ============================================================
     */

    const startVisualization = () => {

        if (!str.length || running) {
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


    /*
     * ============================================================
     * QUESTION TITLE
     * ============================================================
     */

    const getTitle = () => {

        switch (question?.id) {

            case 1:
                return "Reverse String";

            case 2:
                return "Palindrome";

            case 3:
                return "Character Frequency";

            case 4:
                return "First Non-Repeating Character";

            case 5:
                return "Duplicate Characters";

            case 6:
                return "Anagram";

            case 7:
                return "Remove Duplicate Characters";

            case 8:
                return "Longest Substring Without Repeating";

            case 9:
                return "Vowels and Consonants";

            case 10:
                return "Longest Palindromic Substring";

            default:
                return "String Visualization";
        }
    };


    /*
     * ============================================================
     * QUESTION 1
     * REVERSE STRING
     * ============================================================
     */

    const getReverseString = () => {

        let result = "";

        for (
            let i = str.length - 1;
            i >= 0 && i >= str.length - step;
            i--
        ) {

            result += str[i];
        }

        return result;
    };


    /*
     * ============================================================
     * QUESTION 2
     * PALINDROME
     * ============================================================
     */

    const getPalindromeState = () => {

        let left = 0;
        let right = str.length - 1;

        let mismatch = false;

        const comparisons = Math.min(
            step,
            Math.floor(str.length / 2)
        );

        for (
            let i = 0;
            i < comparisons;
            i++
        ) {

            left = i;
            right = str.length - 1 - i;

            if (str[left] !== str[right]) {

                mismatch = true;
                break;
            }
        }

        return {
            left,
            right,
            mismatch
        };
    };


    /*
     * ============================================================
     * QUESTION 3
     * CHARACTER FREQUENCY
     * ============================================================
     */

    const getCharacterFrequency = () => {

        const frequency = {};

        for (
            let i = 0;
            i < str.length && i < step;
            i++
        ) {

            const ch = str[i];

            frequency[ch] =
                (frequency[ch] || 0) + 1;
        }

        return frequency;
    };


    /*
     * ============================================================
     * QUESTION 4
     * FIRST NON-REPEATING CHARACTER
     * ============================================================
     */

    const getFirstNonRepeating = () => {

        const frequency = {};

        for (const ch of str) {

            frequency[ch] =
                (frequency[ch] || 0) + 1;
        }

        for (
            let i = 0;
            i < str.length && i < step;
            i++
        ) {

            if (frequency[str[i]] === 1) {

                return {
                    index: i,
                    character: str[i]
                };
            }
        }

        return {
            index: -1,
            character: null
        };
    };


    /*
     * ============================================================
     * QUESTION 5
     * DUPLICATE CHARACTERS
     * ============================================================
     */

    const getDuplicateCharacters = () => {

        const frequency = {};

        for (
            let i = 0;
            i < str.length && i < step;
            i++
        ) {

            const ch = str[i];

            frequency[ch] =
                (frequency[ch] || 0) + 1;
        }

        return frequency;
    };


    /*
     * ============================================================
     * QUESTION 6
     * ANAGRAM
     * ============================================================
     */

    const getAnagramState = () => {

        const str2 =
            question?.inputString2 || "";

        const processed1 =
            str.substring(
                0,
                Math.min(step, str.length)
            );

        const processed2 =
            str2.substring(
                0,
                Math.min(step, str2.length)
            );

        const sorted1 =
            processed1
                .split("")
                .sort()
                .join("");

        const sorted2 =
            processed2
                .split("")
                .sort()
                .join("");

        return {
            str2,
            processed1,
            processed2,
            sorted1,
            sorted2,
            equal:
                sorted1 === sorted2 &&
                step >= str.length &&
                step >= str2.length
        };
    };


    /*
     * ============================================================
     * QUESTION 7
     * REMOVE DUPLICATES
     * ============================================================
     */

    const getUniqueCharacters = () => {

        const result = [];

        for (
            let i = 0;
            i < str.length && i < step;
            i++
        ) {

            if (!result.includes(str[i])) {

                result.push(str[i]);
            }
        }

        return result;
    };


    /*
     * ============================================================
     * QUESTION 8
     * LONGEST SUBSTRING WITHOUT REPEATING
     * ============================================================
     */

    const getLongestSubstring = () => {

        const set = new Set();

        let left = 0;
        let maxLength = 0;
        let longest = "";

        const end =
            Math.min(step, str.length);

        for (
            let right = 0;
            right < end;
            right++
        ) {

            const ch = str[right];

            while (set.has(ch)) {

                set.delete(
                    str[left]
                );

                left++;
            }

            set.add(ch);

            const currentLength =
                right - left + 1;

            if (
                currentLength >
                maxLength
            ) {

                maxLength =
                    currentLength;

                longest =
                    str.substring(
                        left,
                        right + 1
                    );
            }
        }

        return {
            left,
            maxLength,
            longest
        };
    };


    /*
     * ============================================================
     * QUESTION 9
     * VOWELS AND CONSONANTS
     * ============================================================
     */

    const getVowelConsonantState = () => {

        let vowels = 0;
        let consonants = 0;

        const processed =
            Math.min(step, str.length);

        for (
            let i = 0;
            i < processed;
            i++
        ) {

            const ch =
                str[i].toLowerCase();

            if (
                ch >= "a" &&
                ch <= "z"
            ) {

                if (
                    ch === "a" ||
                    ch === "e" ||
                    ch === "i" ||
                    ch === "o" ||
                    ch === "u"
                ) {

                    vowels++;

                } else {

                    consonants++;
                }
            }
        }

        return {
            vowels,
            consonants
        };
    };


    /*
     * ============================================================
     * PALINDROME HELPER
     * ============================================================
     */

    const expandFromCenter = (
        text,
        left,
        right
    ) => {

        while (
            left >= 0 &&
            right < text.length &&
            text[left] === text[right]
        ) {

            left--;
            right++;
        }

        return text.substring(
            left + 1,
            right
        );
    };


    /*
     * ============================================================
     * QUESTION 10
     * LONGEST PALINDROMIC SUBSTRING
     * ============================================================
     */

    const getLongestPalindrome = () => {

        if (!str.length) {

            return {
                longest: "",
                center: -1
            };
        }

        let longest = "";

        let center = 0;

        const end =
            Math.min(
                step,
                str.length
            );

        for (
            let i = 0;
            i < end;
            i++
        ) {

            const odd =
                expandFromCenter(
                    str,
                    i,
                    i
                );

            const even =
                expandFromCenter(
                    str,
                    i,
                    i + 1
                );

            if (
                odd.length >
                longest.length
            ) {

                longest = odd;
                center = i;
            }

            if (
                even.length >
                longest.length
            ) {

                longest = even;
                center = i;
            }
        }

        return {
            longest,
            center
        };
    };


    /*
     * ============================================================
     * CHARACTER BOX STYLE
     * ============================================================
     */

    const getCharacterStyle = (index) => {

        let backgroundColor = "white";

        /*
         * QUESTION 1
         * Reverse
         */

        if (question?.id === 1) {

            const reverseStart =
                Math.max(
                    0,
                    str.length - step
                );

            if (
                index >= reverseStart
            ) {

                backgroundColor =
                    "lightblue";
            }
        }


        /*
         * QUESTION 2
         * Palindrome
         */

        if (question?.id === 2) {

            const state =
                getPalindromeState();

            if (
                index === state.left ||
                index === state.right
            ) {

                backgroundColor =
                    state.mismatch
                        ? "lightcoral"
                        : "lightyellow";
            }
        }


        /*
         * QUESTION 3
         * Frequency
         */

        if (question?.id === 3) {

            if (index < step) {

                backgroundColor =
                    "lightblue";
            }
        }


        /*
         * QUESTION 4
         * First non-repeating
         */

        if (question?.id === 4) {

            const result =
                getFirstNonRepeating();

            if (
                index === result.index
            ) {

                backgroundColor =
                    "lightgreen";
            }

            if (index < step) {

                backgroundColor =
                    index === result.index
                        ? "lightgreen"
                        : "lightyellow";
            }
        }


        /*
         * QUESTION 5
         * Duplicate characters
         */

        if (question?.id === 5) {

            const frequency =
                getDuplicateCharacters();

            if (
                frequency[str[index]] > 1
            ) {

                backgroundColor =
                    "lightcoral";
            }
        }


        /*
         * QUESTION 7
         * Remove duplicates
         */

        if (question?.id === 7) {

            const unique =
                getUniqueCharacters();

            if (
                unique.includes(
                    str[index]
                ) &&
                index < step
            ) {

                backgroundColor =
                    "lightgreen";
            }

            if (
                index < step &&
                unique.filter(
                    ch => ch === str[index]
                ).length === 0
            ) {

                backgroundColor =
                    "lightcoral";
            }
        }


        /*
         * QUESTION 8
         * Longest substring
         */

        if (question?.id === 8) {

            const state =
                getLongestSubstring();

            if (
                index >= state.left &&
                index <
                    state.left +
                    state.maxLength
            ) {

                backgroundColor =
                    "lightgreen";
            }
        }


        /*
         * QUESTION 9
         * Vowels and consonants
         */

        if (question?.id === 9) {

            if (index < step) {

                const ch =
                    str[index].toLowerCase();

                if (
                    "aeiou".includes(ch)
                ) {

                    backgroundColor =
                        "lightgreen";

                } else if (
                    ch >= "a" &&
                    ch <= "z"
                ) {

                    backgroundColor =
                        "lightyellow";
                }
            }
        }


        /*
         * QUESTION 10
         * Longest palindrome
         */

        if (question?.id === 10) {

            const result =
                getLongestPalindrome();

            if (
                result.longest &&
                str
                    .substring(
                        result.center -
                            Math.floor(
                                result.longest.length / 2
                            ),
                        result.center +
                            Math.ceil(
                                result.longest.length / 2
                            )
                    )
                    .includes(str[index])
            ) {

                backgroundColor =
                    "lightgreen";
            }
        }

        return backgroundColor;
    };


    /*
     * ============================================================
     * INFORMATION PANEL
     * ============================================================
     */

    const renderInformation = () => {

        /*
         * QUESTION 1
         */

        if (question?.id === 1) {

            return (
                <>
                    <p>
                        Characters Processed: {step}
                    </p>

                    <p>
                        Original String: {str}
                    </p>

                    <p>
                        Reversed So Far:{" "}
                        {getReverseString()}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 2
         */

        if (question?.id === 2) {

            const state =
                getPalindromeState();

            return (
                <>
                    <p>
                        Comparisons: {step}
                    </p>

                    <p>
                        Left Index: {state.left}
                    </p>

                    <p>
                        Right Index: {state.right}
                    </p>

                    <p>
                        Result:{" "}
                        {state.mismatch
                            ? "Not Palindrome"
                            : "Checking..."}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 3
         */

        if (question?.id === 3) {

            const frequency =
                getCharacterFrequency();

            return (
                <>
                    <p>
                        Characters Processed: {step}
                    </p>

                    <p>
                        Frequency:
                    </p>

                    <pre>
                        {JSON.stringify(
                            frequency,
                            null,
                            2
                        )}
                    </pre>
                </>
            );
        }


        /*
         * QUESTION 4
         */

        if (question?.id === 4) {

            const result =
                getFirstNonRepeating();

            return (
                <>
                    <p>
                        Characters Checked: {step}
                    </p>

                    <p>
                        First Non-Repeating:{" "}
                        {result.character || "Searching..."}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 5
         */

        if (question?.id === 5) {

            const frequency =
                getDuplicateCharacters();

            const duplicates =
                Object.keys(frequency)
                    .filter(
                        ch =>
                            frequency[ch] > 1
                    );

            return (
                <>
                    <p>
                        Characters Processed: {step}
                    </p>

                    <p>
                        Duplicate Characters:{" "}
                        {duplicates.length
                            ? duplicates.join(", ")
                            : "None"}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 6
         */

        if (question?.id === 6) {

            const state =
                getAnagramState();

            return (
                <>
                    <p>
                        String 1: {str}
                    </p>

                    <p>
                        String 2: {state.str2}
                    </p>

                    <p>
                        Processed Characters: {step}
                    </p>

                    <p>
                        Sorted String 1:{" "}
                        {state.sorted1}
                    </p>

                    <p>
                        Sorted String 2:{" "}
                        {state.sorted2}
                    </p>

                    {state.equal && (
                        <strong>
                            ✓ Strings are Anagrams
                        </strong>
                    )}
                </>
            );
        }


        /*
         * QUESTION 7
         */

        if (question?.id === 7) {

            const unique =
                getUniqueCharacters();

            return (
                <>
                    <p>
                        Characters Processed: {step}
                    </p>

                    <p>
                        Unique String:{" "}
                        {unique.join("")}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 8
         */

        if (question?.id === 8) {

            const state =
                getLongestSubstring();

            return (
                <>
                    <p>
                        Current Index: {step}
                    </p>

                    <p>
                        Current Window:{" "}
                        {state.longest || "-"}
                    </p>

                    <p>
                        Longest Length:{" "}
                        {state.maxLength}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 9
         */

        if (question?.id === 9) {

            const state =
                getVowelConsonantState();

            return (
                <>
                    <p>
                        Characters Processed: {step}
                    </p>

                    <p>
                        Vowels: {state.vowels}
                    </p>

                    <p>
                        Consonants: {state.consonants}
                    </p>
                </>
            );
        }


        /*
         * QUESTION 10
         */

        if (question?.id === 10) {

            const result =
                getLongestPalindrome();

            return (
                <>
                    <p>
                        Characters Checked: {step}
                    </p>

                    <p>
                        Longest Palindrome:{" "}
                        {result.longest || "Searching..."}
                    </p>

                    <p>
                        Length:{" "}
                        {result.longest.length}
                    </p>
                </>
            );
        }

        return null;
    };


    /*
     * ============================================================
     * NO QUESTION
     * ============================================================
     */

    if (!question) {

        return (
            <div
                style={{
                    border: "1px solid black",
                    padding: "20px",
                    marginTop: "20px"
                }}
            >
                Select a string question.
            </div>
        );
    }


    /*
     * ============================================================
     * RENDER
     * ============================================================
     */

    return (

        <div
            style={{
                border: "1px solid #000",
                padding: "20px",
                marginTop: "20px"
            }}
        >

            <h2>
                {getTitle()}
            </h2>

            <p>
                {question.description}
            </p>


            {/* ====================================================
                STRING VISUALIZATION
            ==================================================== */}

            <div
                style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginTop: "30px"
                }}
            >

                {str.split("").map(
                    (char, index) => (

                        <div
                            key={`${index}-${char}`}
                            style={{
                                textAlign: "center"
                            }}
                        >

                            <div
                                style={{
                                    width: "55px",
                                    height: "55px",
                                    border: "2px solid black",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor:
                                        getCharacterStyle(
                                            index
                                        ),
                                    fontSize: "20px",
                                    fontWeight: "bold"
                                }}
                            >

                                {char === " "
                                    ? "␠"
                                    : char}

                            </div>

                            <div>
                                index {index}
                            </div>

                        </div>
                    )
                )}

            </div>


            {/* ====================================================
                INFORMATION
            ==================================================== */}

            <div
                style={{
                    marginTop: "25px",
                    padding: "15px",
                    borderTop: "1px solid black"
                }}
            >

                {renderInformation()}

            </div>


            {/* ====================================================
                CONTROLS
            ==================================================== */}

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

export default StringVisualizer;

