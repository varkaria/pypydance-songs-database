export const getYTImage = (videoId: string) => {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

export const getYTVideoId = (url: string) => {
  return url.replace('https://www.youtube.com/watch?v=', '')
}