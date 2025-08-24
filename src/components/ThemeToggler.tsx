import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/theme/theme";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed top-5 right-4">
      <button className="btn btn-sm btn-circle" onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default ThemeToggler;
