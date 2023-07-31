export function noSpaceBetweenNumberUnit(text: string, units?: string[]) {
  if (!units || units.length === 0) return text

  return text.replaceAll(new RegExp(`\\d+\\s+(${units.join('|')})`, 'g'), match => {
    console.log(match)
    return match.replaceAll(' ', '')
  })
}
