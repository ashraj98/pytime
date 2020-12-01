export enum TMDBImageSize {
  Backdrop1 = 'w300',
  Backdrop2 = 'w780',
  Backdrop3 = 'w1280',
  logo1 = 'w45',
  logo2 = 'w92',
  logo3 = 'w185',
  logo4  = 'w300',
  logo5 = 'w500',
  poster1 = 'w92',
  poster2 = 'w154',
  poster3 = 'w185',
  poster4 = 'w342',
  poster5 = 'w500',
  poster6 = 'w780',
  profile1 = 'w45',
  porfile2 = 'w185',
  profile3 = 'h632',
  still1 = 'w92',
  still2 = 'w185',
  still3 = 'w300',
  original = 'original',
}

export default class TMDBUtils {
  public static getTMDBImageSource(size: TMDBImageSize, imagePath: string) {
    return `//image.tmdb.org/t/p/${size}${imagePath}`;
  }

  public static getTMDBVideoURL(videoId: string) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
}
