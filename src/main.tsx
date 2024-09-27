import ScrollToTop from "@/components/Base/ScrollToTop";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Router from "./router";
import "./assets/css/app.css";
import { DirectionProvider } from "./utils/direction-context"; // Import the DirectionContext provider

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <DirectionProvider> {/* Wrap the entire app with DirectionProvider */}
        <BrowserRouter>
            <Provider store={store}>
                <Router />
            </Provider>
            <ScrollToTop />
        </BrowserRouter>
    </DirectionProvider>
);
