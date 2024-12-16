import React from "react";

export interface Props {
    value: string;
    onChange: (data: string) => void;
}

export const TextInput = (props: Props) => {
    return (
        <div>
            <input
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    );
}
