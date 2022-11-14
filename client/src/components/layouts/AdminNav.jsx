// SVG
import settingsSvg from "../../img/setings.svg"
import adminSvg from "../../img/admin.svg"

const AdminNav = () => {
  return (
    <div>
          <img className="rounded-3xl bg-teal-700 hover:cursor-pointer hover:bg-orange-500 transition ease-in-out delay-150 p-2 w-24" src={adminSvg} alt="Admin Menu" />  
    </div>
  )
}

export default AdminNav