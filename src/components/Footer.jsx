import logo from "../assets/Group.png";
import playStore from "../assets/Frame 70.png";
import appleStore from "../assets/Frame 71.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#589C32] px-8 md:px-20 pt-14 pb-7  text-white">
        <div className="flex flex-wrap gap-16 justify-between">
          <div className="lg:w-2/5 md:w-2/5 gap-5 flex flex-col">
            <Link to="/">
              <img src={logo} alt="logo" className="w-1/2" />
            </Link>
            <p className="w-full">
              At FarmFresh, we are committed to delivering the freshest and
              healthiest vegetables straight from the farm to your table. Our
              mission is to make healthy eating easy and accessible for
              everyone. Join us on our journey towards a healthier lifestyle.
            </p>
            <div className="flex gap-4">
              <img src={playStore} alt="logo" className="w-36" />
              <img src={appleStore} alt="logo" className="w-36" />
            </div>
          </div>
          <div className="capitalize lg:w-2/5 md:w-2/5 flex justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">my account</h1>
              <div className="flex flex-col gap-1">
                <Link to="/">log in</Link>
                <Link to="/">register</Link>
                <Link to="/">order history</Link>
                <Link to="/">wishlist</Link>
                <Link to="/">account settings</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">help</h1>
              <div className="flex flex-col gap-1">
                <Link to="/">FAQs</Link>
                <Link to="/">shipping and delivery</Link>
                <Link to="/">return and refunds</Link>
                <Link to="/">contact us</Link>
                <Link to="/">privacy and policy</Link>
                <Link to="/">terms of service</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-semibold">proxy</h1>
              <div className="flex flex-col gap-1">
                <Link to="/">about us</Link>
                <Link to="/">shop</Link>
                <Link to="/">blog</Link>
                <Link to="/">careers</Link>
                <Link to="/">sustainability</Link>
                <Link to="/">community</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
