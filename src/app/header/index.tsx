import '@/app/header/header.styles.scss'
import LogoMark from '@/images/logoMark.svg'
import LogoType from '@/images/logoType.svg'
import Image from 'next/image'

export function Header() {
  return (
    <header>
      <div className="logo">
        <Image src={LogoMark} alt="logo mark" />
        <Image src={LogoType} alt="logo type" />
      </div>
      <h1>Bem-vindo de volta, Marcus</h1>
      <h2>Segunda, 01 de dezembro de 2025</h2>
    </header>
  )
}
