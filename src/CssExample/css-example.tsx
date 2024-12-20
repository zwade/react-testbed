import "./css-example.scss";

interface PricingProps {
    planName: string;
    planPrice: number;
    children: React.ReactNode;
}

const PricingElement = (props: PricingProps) => {
    return (
        <div className="pricing-element">
            <div className="title">{props.planName}</div>
            <div className="pricing">${props.planPrice.toFixed(2)}</div>
            <div className="description">{props.children}</div>
        </div>
    );
}

export const CssExample = () => {
    return (
        <div className="root">
            <div className="pricings">
                <PricingElement planName="Starter" planPrice={0.0}>
                    <div>
                        Get started with our <b>exciting</b> new product!!!
                    </div>
                    <div>
                        We offer you nothing at all!!!!
                    </div>
                    <div>
                        Goodbye thx for nothing.
                    </div>
                </PricingElement>

                <PricingElement planName="Basic" planPrice={3}>
                    <div>Thanks for the cash</div>
                    <div>Not!!!!</div>
                    <div>Surely you can do better than that T_T</div>
                </PricingElement>

                <PricingElement planName="Enterprise" planPrice={100000}>
                    <div>Thanks you get my undivided attention for 30 minutes</div>
                    <div>Once every decade</div>
                    <div>!!</div>
                </PricingElement>
            </div>
        </div>
    )
}

export const CssShrinkExample = () => {
    return (
        <div className="outer">
            <div className="inner-1">Hello world my name is Zach!!</div>
            <div className="inner-2">And this is my great website</div>
        </div>
    )
}

export const CssStyleExample = () => {
    return (
        <div className="parent">
            <div className="outer">
                <div className="inner inner-1">
                    <div>One</div>
                    <div>Two</div>
                    <div>Three</div>
                    <input />
                </div>

                <div className="inner inner-2">
                    This is the second inner style
                </div>
            </div>
        </div>
    )
}

const CssGridSingle = () => {
    return (
        <div className="grid-example">
            <div className="profile-pic">ZW</div>
            <div className="name">Zach Wade</div>
            <div className="phone">5719267316</div>
            <div className="email">zacharywade@gmail.com</div>
            <div className="actions">⡇</div>
        </div>
    )
}

export const CssGridExample = () => {
    return (
        <div className="grid-list">
            <CssGridSingle />
            <CssGridSingle />
            <CssGridSingle />
        </div>
    )
};

const CssTableRow = () => {
    return (
        <div className="row">
            <div>1337</div>
            <div>Zach Wade</div>
            <div>571xxxxxxx</div>
            <div>zacharywade@gmail.com</div>
            <div><button>Actions</button></div>
        </div>
    )
}

export const CssTableExample = () => {
    return (
        <div className="table">
            <div className="row header">
                <div>ID</div>
                <div>Name</div>
                <div>Phone</div>
                <div>Email</div>
            </div>

            <CssTableRow />
            <CssTableRow />
            <CssTableRow />
            <CssTableRow />
        </div>
    )
}