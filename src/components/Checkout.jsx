import { IoIosArrowRoundBack,IoIosArrowDown } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import drink from "../assets/pngwing.png"
import { MdDelete } from "react-icons/md";
export default function Checkout() {
  return (
    <section className="px-8 md:px-20 grid-cols-[3.5fr_2fr] grid my-10 gap-4">
        <div className="shadow-2xl rounded-lg px-6">
            <div className="inline-flex items-center border-b-2 border-gray-600 w-full py-3 mb-4">
                <IoIosArrowRoundBack className="text-3xl"/>
                <span>continue shopping</span>
            </div>
            <div className="flex items-center justify-between">
                <div>
                <h1 className="capitalize font-bold text-xl">cart</h1>
                <span className="text-sm">you have 4 items in your cart</span>
                </div>
                <div className="flex items-center">
                    <label htmlFor="">Sort by</label>
                    <span className="flex items-center">date <IoIosArrowDown/></span>
                </div>
            </div>
            <div className="grid gap-4">
                <div className="flex items-center shadow-xl rounded-xl p-4 mb-4 gap-4 justify-between">
                    <div className="flex items-center gap-4">
                    <div className="bg-[#E9F6E2] rounded-md p-4">
                    <img src={drink} className="h-16"/>
                    </div>
                    <div>
                        <h1>Sweet Bell Hami Mix</h1>
                        <h5>4000 <span>in stock</span></h5>
                        <div className="flex items-center gap-2">
                            <span className="p-1 bg-[#E3E3E3] text-black">
                            <FaMinus />
                            </span>
                             1 <span className="p-1 bg-[#E3E3E3] text-black"><FaPlus/></span>  x 4000
                        </div>
                    </div>
                    </div>
                    <div className="text-2xl text-end">
                        <h1>4000</h1>
                        <div className="grid place-content-end">
                        <MdDelete className="text-red-600 text-end"/>  
                        </div>
                         
                    </div>
                </div>
                <div className="flex items-center shadow-xl rounded-xl p-4 mb-4 gap-4 justify-between">
                    <div className="flex items-center gap-4">
                    <div className="bg-[#E9F6E2] rounded-md p-4">
                    <img src={drink} className="h-16"/>
                    </div>
                    <div>
                        <h1>Sweet Bell Hami Mix</h1>
                        <h5>4000 <span>in stock</span></h5>
                        <div className="flex items-center gap-2">
                            <span className="p-1 bg-[#E3E3E3] text-black">
                            <FaMinus />
                            </span>
                             1 <span className="p-1 bg-[#E3E3E3] text-black"><FaPlus/></span>  x 4000
                        </div>
                    </div>
                    </div>
                    <div className="text-2xl text-end">
                        <h1>4000</h1>
                        <div className="grid place-content-end">
                        <MdDelete className="text-red-600 text-end"/>  
                        </div>
                         
                    </div>
                </div>
                <div className="flex items-center shadow-xl rounded-xl p-4 mb-4 gap-4 justify-between">
                    <div className="flex items-center gap-4">
                    <div className="bg-[#E9F6E2] rounded-md p-4">
                    <img src={drink} className="h-16"/>
                    </div>
                    <div>
                        <h1>Sweet Bell Hami Mix</h1>
                        <h5>4000 <span>in stock</span></h5>
                        <div className="flex items-center gap-2">
                            <span className="p-1 bg-[#E3E3E3] text-black">
                            <FaMinus />
                            </span>
                             1 <span className="p-1 bg-[#E3E3E3] text-black"><FaPlus/></span>  x 4000
                        </div>
                    </div>
                    </div>
                    <div className="text-2xl text-end">
                        <h1>4000</h1>
                        <div className="grid place-content-end">
                        <MdDelete className="text-red-600 text-end"/>  
                        </div>
                         
                    </div>
                </div>
                <div className="flex items-center shadow-xl rounded-xl p-4 mb-4 gap-4 justify-between">
                    <div className="flex items-center gap-4">
                    <div className="bg-[#E9F6E2] rounded-md p-4">
                    <img src={drink} className="h-16"/>
                    </div>
                    <div>
                        <h1>Sweet Bell Hami Mix</h1>
                        <h5>4000 <span>in stock</span></h5>
                        <div className="flex items-center gap-2">
                            <span className="p-1 bg-[#E3E3E3] text-black">
                            <FaMinus />
                            </span>
                             1 <span className="p-1 bg-[#E3E3E3] text-black"><FaPlus/></span>  x 4000
                        </div>
                    </div>
                    </div>
                    <div className="text-2xl text-end">
                        <h1>4000</h1>
                        <div className="grid place-content-end">
                        <MdDelete className="text-red-600 text-end"/>  
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
        <div className="shadow-xl px-4 py-6 ">
            <div className="bg-[#E3E3E3] p-2 flex justify-between text-black">
                <button className="bg-white py-2 px-16 text-center">free</button>
                <button className="bg-inherit py-2 px-16 text-center">express</button>
            </div>
        </div>
    </section>
  )
}
