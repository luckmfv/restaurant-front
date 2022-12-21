export const phoneValidator = (value: string): boolean => {
  const normalizedValue = String(value).replaceAll(/[^0-9.]/g, '')

  return normalizedValue.length === 10 || normalizedValue.length === 11
}
