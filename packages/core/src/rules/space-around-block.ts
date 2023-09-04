function spaceAroundBlock(prevText?: string, nextText?: string) {
  return [prevText && `${prevText} `, nextText && ` ${nextText}`] as [typeof prevText, typeof nextText]
}

export const spaceAroundCode: typeof spaceAroundBlock = (prevText, nextText) => {
  return spaceAroundBlock(prevText, nextText)
}

export const spaceAroundLink: typeof spaceAroundBlock = (prevText, nextText) => {
  return spaceAroundBlock(prevText, nextText)
}
