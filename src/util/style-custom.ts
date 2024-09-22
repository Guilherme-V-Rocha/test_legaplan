export const createStyleWithCustomProps = (styles: {
  [key: string]: string | number | undefined
}) => {
  const filteredStyles = Object.keys(styles).reduce((acc, key) => {
    if (styles[key] !== undefined) {
      acc[key] = styles[key]
    }
    return acc
  }, {} as { [key: string]: string | number })

  return filteredStyles as React.CSSProperties
}
