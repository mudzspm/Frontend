import PriceCard from "./section/priceCard";
import SummeryCard from "./section/summeryCard";



const CartLogin = () => {
  return (
    <>
<div className="bg-[#F7F8FA] h-[100vh]">


    <div className="max-w-full h-[10.75rem] bg-red-600"
      style={{
        backgroundImage:
          'linear-gradient(0deg, #98CCD4 0%, #E3F4F6 85.52%, #FFF 100%)',
      }}
      >
      </div>

   
<div className="flex justify-evenly ">

<PriceCard />

  
<SummeryCard />

  
</div>
</div>
    </>
  )
}

export default CartLogin;