import React from 'react'
import { NavItem } from '../../interface/objects'
import NavDropDown from './NavDropDown'
import Link from 'next/link'
import PrimaryButton from '../button/PrimaryButton'

interface NavBarProps {
  isSections: boolean
}

const NavItems: {
  label: string
  src?: string
  menu?: NavItem[]
}[] = [
  {
    label: 'Home',
    src: '/',
  },
  {
    label: 'Products',
    menu: [
      {
        label: 'Product 1',
        src: '/',
      },
      {
        label: 'Product 2',
        src: '/',
      },
      {
        label: 'Product 3',
        src: '/',
      },
    ],
  },
  {
    label: 'Resources',
    menu: [
      {
        label: 'Resource 1',
        src: '/',
      },
      {
        label: 'Resource 2',
        src: '/',
      },
      {
        label: 'Resource 3',
        src: '/',
      },
    ],
  },
  {
    label: 'Pricing',
    src: '/',
  },
]

const NavBar = ({ isSections }: NavBarProps) => {
  return (
    <div
      className={
        'w-full h-[50px] py-4 ' +
        (isSections ? 'grid grid-cols-[280px_1fr] pr-8' : '')
      }
    >
      <div className={isSections ? 'ml-8 w-[77%]' : 'w-auto'}>
        <img
          src="/images/logo_full.svg"
          alt="Logo Full"
          className="w-2/3 h-full object-contain"
        />
      </div>
      <div
        className={
          'flex justify-between items-center ' + (isSections ? 'pl-8' : '')
        }
      >
        <div className="flex flex-row gap-8">
          {NavItems.map((item) =>
            item.menu ? (
              <NavDropDown
                key={item.label}
                label={item.label}
                options={item.menu!}
              />
            ) : (
              <Link
                key={item.label}
                href={item.src!}
                className="font-semibold text-nav_link_color"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/auth/login"
            className="font-semibold text-nav_link_color"
          >
            Login
          </Link>
          <PrimaryButton label="Sign up" isFill={false} />
        </div>
      </div>
    </div>
  )
}

export default NavBar
