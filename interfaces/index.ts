export interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
}

export interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}