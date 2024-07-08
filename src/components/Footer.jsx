import logo from "../assets/Group.png";
import playStore from "../assets/Frame 70.png";
import appleStore from "../assets/Frame 71.png";

export default function Footer() {
  return (
    <>
    <footer className="bg-[#589C32] px-8 md:px-20 pt-14 pb-7  text-white">
      <div className="flex justify-between">
      <div className="w-2/5 gap-5 flex flex-col">
        <img src={logo} alt="logo" className="w-60 w-1/2" />
        <p className="w-full">
          At FarmFresh, we are committed to delivering the freshest and
          healthiest vegetables straight from the farm to your table. Our
          mission is to make healthy eating easy and accessible for everyone.
          Join us on our journey towards a healthier lifestyle.
        </p>
        <div className="flex gap-4">
        <img src={playStore} alt="logo" className="w-36" />
        <img src={appleStore} alt="logo" className="w-36" />
        </div>
      </div>
      <div className="capitalize w-2/5 flex justify-between">
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">my account</h1>
            <div>
            <h4>log in</h4>
            <h4>register</h4>
            <h4>order history</h4>
            <h4>wishlist</h4>
            <h4>account settings</h4>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">help</h1>
            <div>
            <h4>FAQs</h4>
            <h4>shipping and delivery</h4>
            <h4>return and refunds</h4>
            <h4>contact us</h4>
            <h4>privacy and policy</h4>
            <h4>terms of service</h4>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">proxy</h1>
            <div>
            <h4>about us</h4>
            <h4>shop</h4>
            <h4>blog</h4>
            <h4>careers</h4>
            <h4>sustainability</h4>
            <h4>community</h4>
            </div>
        </div>
      </div>
      </div>
    </footer>
    </>
  );
}
