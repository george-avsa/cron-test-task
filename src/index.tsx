import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "App/style.scss";

const RootComponent = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<RootComponent />);
