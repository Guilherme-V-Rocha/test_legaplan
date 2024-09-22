import '@/components/card/card.styles.scss'
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="card">{children}</div>
}
