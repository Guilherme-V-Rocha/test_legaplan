import { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string
  children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
