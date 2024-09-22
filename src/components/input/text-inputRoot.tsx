import '@/components/input/input.styles.scss'
import { ReactNode } from 'react'

type TextInputRootProps = {
  children: ReactNode
}

export function TextInputRoot({ children }: TextInputRootProps) {
  return <div className="inputRoot">{children}</div>
}
