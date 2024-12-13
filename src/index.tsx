import { createRoot } from "react-dom/client";
import { App } from "./App/app";

import "./index.scss";

const root = createRoot(document.getElementById("root")!).render(<App />);
