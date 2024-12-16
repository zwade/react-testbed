import React from "react";
import { TextInput } from "./text-input"
import { DropdownInput, Option } from "@/DropdownInput/dropdown-input";

type Food = "apple" | "orange" | "banana";

const FoodOptions: Option<Food>[] = [
    { value: "apple", name: "Apple" },
    { value: "banana", name: "Banana" },
    { value: "orange", name: "Orange" },
]

export const InputExample = () => {
    const [value, setValue] = React.useState("");
    const [food, setFood] = React.useState<Food>("orange");

    React.useEffect(() => {
        console.log(value);
    }, [value]);

    React.useEffect(() => {
        switch (food) {
            case "apple": {
                console.log("The user choose correctly");
                break;
            }
            case "banana":
            case "orange": {
                console.log("The user has bad taste", food);
            }
        }
    }, [food]);

    return (
        <div>
            {value}
            <TextInput value={value} onChange={setValue}/>
            <DropdownInput value={food} onChange={setFood} options={FoodOptions}/>
        </div>
    );
}