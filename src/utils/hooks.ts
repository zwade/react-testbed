import React from "react";

export const useRerenderNotification = (name: string) => {
    const [el, setEl] = React.useState<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        console.log(`${name} has been rerendered`);
    });

    React.useEffect(() => {
        if (el) {
            el.classList.add("rerendered");

            setTimeout(() => {
                el.classList.remove("rerendered");
            }, 100);
        }
    });

    return setEl;
}