export const notVoid = <T>(item: T | void): item is T => {
  return typeof item !== 'undefined'
}
