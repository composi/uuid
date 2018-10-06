/**
 * Function to create an RFC4122 version 4 compliant uuid. If a truthy value is passed as an argument, it will return a uuid without hyphens.
 * @param {boolean} [bool] True or false.
 * @return {string} string
 */
export function uuid(bool) {
  let d = new Date().getTime()
  const HEX_16 = 16
  const HEX_3 = 0x3
  const HEX_8 = 0x8
  const ZERO = 0
  const seed = bool
    ? 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
    : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    // Use high-precision timer if available
    d += performance.now()
  }
  return seed.replace(/[xy]/g, function(c) {
    let r = (d + Math.random() * HEX_16) % HEX_16 | ZERO
    d = Math.floor(d / HEX_16)
    return (c === 'x' ? r : (r & HEX_3) | HEX_8).toString(HEX_16)
  })
}
