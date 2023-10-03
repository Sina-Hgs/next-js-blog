import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Sina Haghshenas
          </Link>
        </h1>

        <div className="flex flex-row justify-center items-center text-white/90 hover:text-white">
          <Link
            href="https://github.com/Sina-Hgs"
            target="_blank"
            className="text-inherit text-3xl hover:scale-110 transition-all"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
