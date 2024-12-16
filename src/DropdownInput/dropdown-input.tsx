export type Option<T extends string> = { value: T, name: string }

export interface Props<T extends string> {
    value: T;
    onChange: (value: T) => void;
    options: Option<T>[]
}

export const DropdownInput = <T extends string>(props: Props<T>) => {
    return (
        <select value={props.value} onChange={(e) => props.onChange(e.target.value as T)}>
            {
                props.options.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.name}
                    </option>
                ))
            }
        </select>
    )
}