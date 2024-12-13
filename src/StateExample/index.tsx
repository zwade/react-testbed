import { useRerenderNotification } from "@/utils/hooks";
import React from "react";

export const StateExample = () => {
    const [count, setCount] = React.useState(0);
    const ref = useRerenderNotification(`Top Level Component: ${count}`);

    const updateFn = () => {
        console.log("Update (start): ", count);

        setCount((c2) => c2 + 1);
        setCount((c2) => c2 + 1);

        console.log("Update (end): ", count);
    }

    return (
        <div>
            <button ref={ref} onClick={updateFn}>Rerender Top Level: {count}</button>
            <ChildComponentA />
            <ChildComponentB update={count} setUpdate={setCount} />
        </div>
    );
}

const ChildComponentA = () => {
    const ref = useRerenderNotification("Child Component A");
    const [update, setUpdate] = React.useState(0);

    return (
        <div>
            <button ref={ref} onClick={() => setUpdate((i) => i + 1)}>Rerender Child A: {update}</button>
        </div>
    );
}


interface BProps {
    update: number;
    setUpdate: (updateFn: (i: number) => number) => void;
}

const ChildComponentB = (props: BProps) => {
    const ref = useRerenderNotification("Child Component B");

    return (
        <div>
            <button ref={ref} onClick={() => props.setUpdate((i) => i + 1)}>Rerender Child B: {props.update}</button>
        </div>
    );
};