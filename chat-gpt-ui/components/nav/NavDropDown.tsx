import React from 'react'

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { NavItem } from '../../interface/objects'
import Link from 'next/link'

interface NavDropDownProps {
  label: string
  options: NavItem[]
}

const NavDropDown = ({ label, options }: NavDropDownProps) => {
  return (
    <div className="group">
      <button
        type="button"
        aria-haspopup="menu"
        className="font-semibold text-nav_link_color flex items-center gap-3 "
      >
        {label}
        <img className="w-3" src="/icons/down_arrow.svg" alt="Down Arrow" />
      </button>
      <ul
        className={
          'bg-dropdown_menu_bg_color rounded-md pl-4 pr-10 py-4 absolute hidden flex-col gap-2 group-hover:flex'
        }
      >
        {options.map((option) => (
          <li key={option.label}>
            <Link href={option.src} className="text-dropdown_menu_item_color">
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavDropDown
