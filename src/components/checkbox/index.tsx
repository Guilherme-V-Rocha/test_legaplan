import '@/components/checkbox/checkbox.styles.scss'

type CheckboxProps = {
  isChecked: (value: boolean) => void
  value: boolean
}

export function Checkbox({ isChecked, value }: CheckboxProps) {
  return (
    <label className="container">
      <input
        checked={value}
        type="checkbox"
        onChange={(e) => isChecked(e.target.checked)}
      />
      <div className="checkmark" />
    </label>
  )
}
