import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client"
createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <App />
    </StrictMode>
)