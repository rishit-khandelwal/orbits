import Navbar from "./navbar.component";

const Page404 = ({ message }) => {
  return (
    <div id="parent" className="parent oops text-white h-screen">
      <Navbar
        className="p-6 py-3 lg:py-3 md:py-3 lg:px-24 md:px-24"
        loginText="text-white"
      />
      <div
        id="child"
        className="child p-8 err-msg text-5xl text-center w-full font-bold text-center mt-11/12"
      >
        Oops!
        <br />
        <div className="block font-medium text-xl mt-10">{message || ""}</div>
      </div>
    </div>
  );
};

export default Page404;
