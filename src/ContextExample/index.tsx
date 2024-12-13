import { useRerenderNotification } from "@/utils/hooks";
import React from "react";

interface State {
    rerenderCount: number;
    setRerenderCount: (updateFn: (count: number) => number) => void;
}

export const StateContext = React.createContext<State>({} as any);

export const ContextExample = () => {
    const ref = useRerenderNotification("Top Level Component");
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <StateContext.Provider value={{ rerenderCount: count, setRerenderCount: setCount }}>
                <button ref={ref} onClick={() => setCount((i) => i + 1)}>Rerender Top Level: {count}</button>
                <ChildComponentA />
                <ChildComponentB />
            </StateContext.Provider>
        </div>
    );
}

const ChildComponentA = () => {
    const ref = useRerenderNotification("Child Component A");
    const { setRerenderCount, rerenderCount } = React.useContext(StateContext);

    return (
        <div>
            <button ref={ref} onClick={() => setRerenderCount((i) => i + 1)}>Rerender Child A: {rerenderCount}</button>
        </div>
    );
}

const ChildComponentB = () => {
    const ref = useRerenderNotification("Child Component B");
    const { setRerenderCount, rerenderCount } = React.useContext(StateContext);

    return (
        <div>
            <button ref={ref} onClick={() => setRerenderCount((i) => i + 1)}>Rerender Child B: {rerenderCount}</button>
        </div>
    );
}