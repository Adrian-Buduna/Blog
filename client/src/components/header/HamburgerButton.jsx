
const HamburgerButton = () => {
  return (
    <div>
      <ul className="group hover:cursor-pointer">
        <li className="h-1 w-12 mt-2 rounded-2xl bg-black group-hover:bg-orange-500 transition ease-in-out delay-150 "></li>
        <li className="h-1 w-12 mt-2 rounded-2xl bg-black group-hover:bg-orange-500 transition ease-in-out delay-150 "></li>
        <li className="h-1 w-12 mt-2 rounded-2xl bg-black group-hover:bg-orange-500 transition ease-in-out delay-150 "></li>
      </ul>
    </div>
  )
}

export default HamburgerButton