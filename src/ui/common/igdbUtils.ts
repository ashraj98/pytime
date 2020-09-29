export enum IGDBImageSize {
  CoverSmall = 'cover_small',
  CoverBig = 'cover_big',
  LogoMedium = 'logo_med',
  ScreenshotMedium = 'screenshot_med',
  ScreenshotBig = 'screenshot_big',
  ScreenshotHuge = 'screenshot_huge',
  Thumbnail = 'thumb',
  Micro = 'micro',
  HD = '720p',
  FullHD = '1080p',
}

export default class IGDBUtils {
  public static getIGDBImageSource(size: IGDBImageSize, imageId: string) {
    return `//images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;
  }

  public static getIGDBVideoURL(videoId: string) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
}
