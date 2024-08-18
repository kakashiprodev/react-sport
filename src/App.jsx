import {
    BrowserRouter as Router,
    Route,
    Routes,
    BrowserRouter,
    RouterProvider,
} from "react-router-dom";

import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ChatBox from "./components/Layout/ChatBox";

function App() {
    return (
        <BrowserRouter>
            <img src="./5.jpg" alt="background" className="absolute -z-50" />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <div className="flex">
                                <Home />
                                <ChatBox />
                            </div>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
