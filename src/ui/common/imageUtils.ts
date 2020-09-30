class ImageUtils {
  public static getImageSource(url: string) {
    return `url("${url}")`;
  }

  public static imageWithOverlay(url: string, opacity: number) {
    return `linear-gradient(
      rgba(0, 0, 0, ${opacity}), 
      rgba(0, 0, 0, ${opacity})
    ),
    url(${url})`;
  }
}

export default ImageUtils;
