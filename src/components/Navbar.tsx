import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10 flex items-center justify-between px-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4 flex-1">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
          ThinkBoard
        </h1>
        <Link
          to="/create"
          className="btn btn-primary mr-12 max-sm:h-8 max-sm:rounded-full max-sm:aspect-square max-sm:p-0"
        >
          <PlusIcon className="size-5" />
          <span className="max-sm:hidden">New Note</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
