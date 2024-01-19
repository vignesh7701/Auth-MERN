import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"
import { useSelector } from "react-redux";
 
const Header = () => {

  const { currentUser } = useSelector((state) => state.user);


  return (
    <div className="bg-sky-700 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="md:flex gap-5 items-center">
          <img src={Logo} alt="logo" className="w-6 md:w-12 xl:w-[63px] " />
          <h1 className="font-bold text-sm sm:text-lg md:text-xl xl:text-2xl">
            Authenicator
          </h1>
        </Link>
        <ul className="flex text-white gap-4 text-xs sm:text-md md:text-lg  font-main ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header