import '@/components/modal/modal.styles.scss'
import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
}
export function Modal({ children }: ModalProps) {
  return (
    <>
      <section className="modal">{children}</section>
      <div className="overlay"></div>
    </>
  )
}
