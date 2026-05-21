import { RiMoonClearFill } from "react-icons/ri";
import { PiSunFill } from "react-icons/pi";

const ThemeToggler = ({
  toggleFunction,
  colormode,
}: {
  toggleFunction: () => void;
  colormode: boolean;
}) => {
  return (
    <label
      htmlFor="AcceptConditions"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-white duration-250 [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-white"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        checked={colormode === false}
        defaultChecked={colormode === false}
        onChange={() => toggleFunction()}
        className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
      />

      <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex size-6 items-center justify-center rounded-full bg-black text-white font-extrabold transition-all duration-250 peer-checked:start-6 peer-checked:text-red-700">
        <PiSunFill className="hidden" data-checked-icon />
        <RiMoonClearFill data-unchecked-icon />
      </span>
    </label>
  );
};

export default ThemeToggler;
