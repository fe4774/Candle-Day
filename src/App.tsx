import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proposition from "./pages/Proposition";
import Classic from "./pages/Classic";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Classic />} />
          <Route path="/premium" element={<Proposition />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
