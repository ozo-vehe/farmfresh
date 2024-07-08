import image from "../assets/bg_img.png";
import shipping from "../assets/shipping.png";
import payment from "../assets/payment.png";
import money from "../assets/money.png";
import support from "../assets/support.png";

function Header() {

  return (
    <header className="h-screen flex items-start lg:items-center relative">
      <img className="absolute top-0 left-0 w-full h-[80vh] lg:h-[90vh] object-cover -z-10" src={image} alt="Background Image"/>
      <div className="header_text px-10 pt-20 lg:py-0">
        <h3 className="text-[#BF9B0B]">Taste the Freshness</h3>
        <h1 className="text-5xl lg:text-6xl md:text-6xl font-bold text-slate-800">Experience the <br/> True <span className="text-green-800">Taste of Fresh</span></h1>
        <p className="slate-500 mt-10 mb-5">Farm-Fresh Vegetables Delivered Straight to Your Door</p>

        <button className="text-slate-100 bg-green-500 cursor-pointer w-[200px] rounded-lg py-3 px-3">Shop now</button>
      </div>

      <div className="bg-white shadow-md rounded-[18px] absolute bottom-0 left-[50%] -translate-x-1/2 flex flex-wrap items-center justify-center gap-7 px-10 py-6 w-full lg:w-[70%] md:w-[80%] sm:w-full">
        <div className="services flex flex-col items-center">
          <img src={shipping} alt="Free shipping" />
          <div className="service_details text-center mt-4">
            <h3 className="font-bold">Free shipping </h3>
            <p className="text-sm text-gray-500">Free shipping within Lagos</p>
          </div>
        </div>

        <div className="services flex flex-col items-center">
          <img src={money} alt="money back" />
          <div className="service_details text-center mt-4">
            <h3 className="font-bold">100% Money back</h3>
            <p className="text-sm text-gray-500">30 days money payment</p>
          </div>
        </div>

        <div className="services flex flex-col items-center">
          <img src={support} alt="Support" />
          <div className="service_details text-center mt-4">
            <h3 className="font-bold">Support 24/7</h3>
            <p className="text-sm text-gray-500">We support 24hrs a day</p>
          </div>
        </div>

        <div className="services flex flex-col items-center">
          <img src={payment} alt="Payment" />
          <div className="service_details text-center mt-4">
            <h3 className="font-bold">Secure payment</h3>
            <p className="text-sm text-gray-500">We ensure secure payment</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
