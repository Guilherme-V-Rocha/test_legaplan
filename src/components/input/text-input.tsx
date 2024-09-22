import '@/components/input/input.styles.scss'
import { InputHTMLAttributes } from 'react'

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {}

export function TextInputInput(props: TextInputProps) {
  return <input {...props} />
}
