/* eslint-disable @typescript-eslint/no-explicit-any */
import ErrorImage from "../assets/error_syuz.svg";
function Error({ error }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={ErrorImage} alt="error_image" className="w-20 h-20" />
      <p className="text-xl font-semibold text-[#1E2D4C]">{error}</p>
    </div>
  );
}

export default Error;
