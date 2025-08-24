import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./contexts/theme/theme";
import ThemeToggler from "./components/ThemeToggler";

const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="App">
        <ThemeToggler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<NoteDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: theme === "dark" ? "#1f2937" : "#eee",
            color: theme === "dark" ? "#eee" : "#1f2937",
          },
        }}
      />
    </>
  );
};

export default App;
