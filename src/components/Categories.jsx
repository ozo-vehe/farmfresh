import meats from "../assets/meats.png";
import vegetables from "../assets/vegetables.png";
import coftea from "../assets/coftea.png";
import strawberry from "../assets/strawberry.png";
import right from "../assets/right.png";
import left from "../assets/left.png";

function Categories() {

  return (
    <main className="py-10 px-4 md:px-20 lg:px-20">
      <h2 className="text-center font-bold text-3xl mb-20 text-[#488129]">Featured Categories </h2>

      <div className="categories_navigator flex items-center justify-end gap-4 mb-4">
        <img className="w-[40px] cursor-pointer" src={left} alt="Left" />
        <img className="w-[40px] cursor-pointer" src={right} alt="Right" />
      </div>
      
      <div className="product_samples flex flex-wrap items-center justify-center lg:justify-between gap-5">
        <div className="w-[200px] lg:w-[300px] md:w-[300px] py-4 h-[300px] flex flex-col items-center justify-center product bg-[#D3ECC4] rounded-[8px]">
          <img className="w-[90%] mb-2" src={vegetables} alt="Begetables" />
          <p>Vegetables</p>
        </div>

        <div className="w-[200px] lg:w-[300px] md:w-[300px] py-4 h-[300px] flex flex-col items-center justify-center product bg-[#D3ECC4] rounded-[8px]">
          <img className="w-[90%] mb-2" src={strawberry} alt="Strawberry" />
          <p>Vegetables</p>
        </div>

        <div className="w-[200px] lg:w-[300px] md:w-[300px] py-4 h-[300px] flex flex-col items-center justify-center product bg-[#D3ECC4] rounded-[8px]">
          <img className="w-[90%] mb-2" src={meats} alt="Meats" />
          <p>Vegetables</p>
        </div>

        <div className="w-[200px] lg:w-[300px] md:w-[300px] py-4 h-[300px] flex flex-col items-center justify-center product bg-[#D3ECC4] rounded-[8px]">
          <img className="w-[90%] mb-2" src={coftea} alt="Coffee and tea" />
          <p>Vegetables</p>
        </div>
      </div>
    </main>
  )
}

export default Categories
