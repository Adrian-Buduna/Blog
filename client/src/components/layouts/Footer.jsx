// icons
import { AiFillFacebook, AiFillMail } from 'react-icons/ai';
import {BsFillPhoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="flex justify-around items-start">
      <div className="mt-8">
        <p >© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="mr-0">
        <dl>
          <dt><h2 className="text-xl">Contact us:</h2></dt>
          <dd ><a className="ml-16 flex items-center gap-2" href="tel:+407*******"><BsFillPhoneFill /><span>+407*******</span></a></dd>
          <dd ><a className="ml-16 flex items-center gap-2" href="mailto:test@test.com"><AiFillMail /><span>test@test.com</span></a></dd>
          <dd ><a className="ml-16 flex items-center gap-2" href="https://google.com" target="_blanck"><AiFillFacebook /> <span>mySocialPage</span></a></dd>
        </dl>
      </div>
    </div>
  )
}

export default Footer