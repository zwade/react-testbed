// Primitives
const a1: number = 3;
const a2: string = "hello world";
const a3: boolean = true;
const a4: undefined = undefined;

// Objects
const array: string[] = ["1", "2", "3"];
const records: Record<string, number> = { "hello": 3, "world": 4 };

type MyStruct = { "foo": number, "bar": string }
const struct: MyStruct = { foo: 1, bar: "baz" }

// Functions
const numberParser: (inputString: string, base: number) => number = parseInt;
const numberParser2 = parseInt;

// Classical

interface HasName {
    publicName: string;
}

interface PrintName extends HasName {
    printName(): void;
}

const fn = (arg1: string) => { return 2; }

class IAmAClass implements PrintName {
    private name: string;
    public publicName: string;

    constructor() {
        this.name = "I am a class";
        this.publicName = "Cool Class";
    }

    public printName() {
        console.log(this.name);
    }
}

class IAmAlsoAClass extends IAmAClass {
    // pass
}

const x2 = new IAmAClass();
const y2: HasName = new IAmAlsoAClass();

// Composite Types
const union: string | number = "3";

type S1 = { foo: string }
type S2 = { bar: number }
const intersection: S1 & S2 = { foo: "hello", bar: 5 };

// Literal Types
const l1: 1 = 1;
const l2: "hello world" = "hello world";

// Discriminated Unions

type DUnion =
    | { kind: "first", a: number }
    | { kind: "second", a: string }
    | { kind: "third", b: number, c: string };

/*
type DUnion = First(number) | Second(number) | Third((number, string));
*/

const test = (u: DUnion) => {
    switch (u.kind) {
        case "first":
        case "second": {
            console.log(u.a);
            break
        }
        case "third": {
            console.log(u.c);
        }
    }
}

type Loadable<T extends string | number> =
    | { kind: "loading" }
    | { kind: "data", data: T }
    | { kind: "error", error: Error }
    ;

const printName = (data: Loadable<number>) => {
    if (data.kind === "data") {
        console.log(data.data);
    }
}

// Assignability

type A = { foo: string; bar: number };
type B = { foo: string; }

const as1 = (b: B) => {
    console.log(b.foo);
}

const a: A = { foo: "hello", bar: 3 };
const b: B = a;

as1(a);

type A2 = string | number;
type B2 = string | number | boolean;

const widened: number = l1;
