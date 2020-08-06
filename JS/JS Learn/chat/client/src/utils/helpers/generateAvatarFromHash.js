import tinycolor from 'tinycolor2'
import md5 from 'crypto-js/md5'
import Base64 from 'crypto-js/enc-base64'


const getCorrectIndex = number => {
  return number > 255 ? 255 : number < 0 ? 0 : number
}
export default hash => {
  const random = Base64.stringify(md5(hash))
  const [r, g, b] = random.substr(0, 3)
    .split('')
    .map(char => getCorrectIndex(char.charCodeAt(0)))
  return {
    color: tinycolor({r, g, b})
      .lighten(10)
      .saturate(10)
      .toHexString(),
    colorLighten: tinycolor({r, g, b})
      .lighten(30)
      .saturate(30)
      .toHexString()
  }
}