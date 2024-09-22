import '@/components/modal/modal.styles.scss'
import { createStyleWithCustomProps } from '@/util/style-custom'
import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  top?: string
}
export function Modal({ children, top }: ModalProps) {
  return (
    <>
      <section
        className="modal"
        style={createStyleWithCustomProps({ '--top': top })}
      >
        {children}
      </section>
      <div className="overlay"></div>
      <div className="background"></div>
    </>
  )
}
