import Link from "next/link";
import ThemeSwitcher from '@/components/ThemeSwitcher'
import UserMenu from "./UserProfile";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Navbar = async () => {
  const currentUser =  await getCurrentUser();
  return (
    <div>
        <nav className="dark:bg-gray-500 bg-gray-100 p-4">
      <div className="flex justify-between items-center">
        <div className="text-black dark:text-white font-bold flex items-center">
        <ThemeSwitcher />
          Logo
        </div>
        <div className="flex space-x-4 items-center justify-center flex-1">
          <Link href="/">
            <span className="text-black dark:text-white cursor-pointer mx-4">HOME</span>
          </Link>
          <Link href="/genre">
            <span className="text-black k dark:text-white cursor-pointer mx-4">GENRE</span>
          </Link>
          <Link href="/ongoing">
            <span className="text-black k dark:text-white cursor-pointer mx-4">ON-GOING</span>
          </Link>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border border-white bg-white text-black px-3 py-1 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
          <button className="absolute top-0 right-0 mt-1 mr-2">
          </button>
        </div>
        <div className="mx-1">
        {currentUser ? 
        <div className="mx-4 flex items-center gap-8 md:gap-12">
          <UserMenu currentUser={currentUser} />
        </div> 
          : 
        <div>
          
        </div>
          }
        </div>
      </div>
    </nav>
    <hr />
    </div>
  );
};

export default Navbar;