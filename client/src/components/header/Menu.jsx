// elements
import HamburgerButton from "./HamburgerButton"
import HeaderLinks from "./HeaderLinks"
// img
import icon from "../../img/icon.png"
const menu = () => {
  return (
    <div className="flex justify-between">
      <div>
      <img className="w-20" src={icon} alt="" />
      </div>

      <div className="mt-2">
        <div className="block sm:hidden">
          <HamburgerButton />
        </div>

        <div className="hidden sm:block">
          <HeaderLinks />
        </div>
      </div>
    </div>
  )
}

export default menu