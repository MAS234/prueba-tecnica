import orden from "../../assets/orden.png";

function Logo() {
  return (
    <>
      <div className="lg:m-5 m-2 flex items-center justify-start">
        <h2 className="font-bold text-2xl text-[#48D390]">AppPedilo</h2>
        <img src={orden} alt="orden" className="w-20 h-20" />
      </div>
    </>
  );
}

export default Logo;
