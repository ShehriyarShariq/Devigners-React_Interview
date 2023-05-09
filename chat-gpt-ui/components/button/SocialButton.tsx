import React, { useMemo } from 'react'
import { SocialLink } from '../../interface/objects'

interface SocialButtonProps {
  type: string
  isFill: boolean
  onClick: Function
  isLogin: boolean
}

const SocialButton = ({
  type,
  isFill,
  onClick,
  isLogin,
}: SocialButtonProps) => {
  const buttonDetails: SocialLink = useMemo(() => {
    switch (type) {
      case 'google':
        return {
          label: `Sign ${isLogin ? 'in' : 'up'} with Google`,
          icon: '/icons/google_logo.svg',
        }
      case 'facebook':
        return {
          label: `Sign ${isLogin ? 'in' : 'up'} with Facebook`,
          icon: '/icons/facebook_logo.svg',
        }
      case 'apple':
        return {
          label: `Sign ${isLogin ? 'in' : 'up'} with Apple`,
          icon: '/icons/apple_logo.svg',
        }
      default:
        return { label: '', icon: '' }
    }
  }, [])

  return (
    <div
      className={
        'h-[50px] font-semibold bg-social_button_bg_color text-social_button_text_color border-[1px] border-social_button_border_color flex items-center justify-center rounded-lg hover:cursor-pointer hover:filter hover:brightness-90 ' +
        (isFill ? 'w-full' : 'w-auto px-6')
      }
      onClick={() => onClick()}
    >
      <img
        src={buttonDetails.icon}
        alt={buttonDetails.label}
        className="w-6 h-6 mr-2"
      />
      <div className="font-semibold">{buttonDetails.label}</div>
    </div>
  )
}

export default SocialButton
