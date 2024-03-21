import { Button } from "../ui/button";



export const Cart = () => {
  return (
      <>
      <div className="text-center items-center justify-center flex flex-col mb-[4.75rem] mt-[3.665rem] p-4">
        <img src="empty.png" alt='EmptyCart ' />
        <Button className="mt-[2.594rem]">
          Back to Home
</Button>
      </div>
      </>
  )
}

export default Cart;
