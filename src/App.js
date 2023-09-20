import "./App.css";
import { Routes, Route } from "react-router-dom";

// reactquery
import { QueryClient, QueryClientProvider } from "react-query";

// imports
import { Contact, Home, Register } from "./pages";
import { Header } from "./components";

// new queryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
};

export default App;
