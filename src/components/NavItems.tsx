import {navLinks} from "@/constants/index"

const NavItems = () => {
  return (
    <ul className='nav-ul'>
     {navLinks.map((item ) => (
      <li className='nav-li' key={item.id}>
        <a href={item.href} className='nav-li_a'>{item.name}</a>
      </li>
      ))}

    </ul>
  )
}

export default NavItems
