import { ReactElement, useState } from "react";

export function useMultiStep(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const next = () => {
        setCurrentStepIndex(prev => {
            if (prev >= steps.length) return prev
            return prev + 1
        })
    }

    const prev = () => {
        setCurrentStepIndex(prev => {
            if (prev <= 0) return prev
            return prev - 1
        })
    }

    const goto = (index: number) => {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        stepCount: steps.length,
        next,
        prev,
        goto
    }
}