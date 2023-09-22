import "./App.css";
import { Routes, Route } from "react-router-dom";

// reactquery
import { QueryClient, QueryClientProvider } from "react-query";

// imports
import { Contact, Home, Register } from "./pages";

// new queryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
