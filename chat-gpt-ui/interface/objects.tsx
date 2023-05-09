export interface NavItem {
  label: string
  src: string
}

export interface Message {
  id: string
  prompt: string
  reply: string
}

export interface Chat {
  id: string
  title: string
  createdAt: number
  messages: Message[]
}

export interface SocialLink {
  label: string
  icon: string
}

export interface SignupFields {
  email?: string
  name?: string
  password?: string
}
