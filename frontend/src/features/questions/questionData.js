import { arrayQuestions } from "../../data/arrays";
import { stringQuestions } from "../../data/strings";
import { twoPointerQuestions } from "../../data/twoPointer";
import { slidingWindowQuestions } from "../../data/slidingWindow";
import { hashingQuestions } from "../../data/hashing";
import { hashMapHashSetQuestions } from "../../data/hashMapHasSet";
import { heapPriorityQueueQuestions } from "../../data/heapPriorityKey";
import { linkedListQuestions } from "../../data/linkedList";
import { queueQuestions } from "../../data/queue";

export const questions = [
    ...arrayQuestions,
    ...stringQuestions,
    ...twoPointerQuestions,
    ...slidingWindowQuestions,
    ...hashingQuestions,
    ...hashMapHashSetQuestions,
    ...heapPriorityQueueQuestions,
    ...linkedListQuestions,
    ...queueQuestions
];

console.log("ALL QUESTIONS:", questions);