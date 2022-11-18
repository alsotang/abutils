const abutils = {
  slice(ab: AudioBuffer, start?: number, end?: number): AudioBuffer { },
  repeat(ab: AudioBuffer, times: number): AudioBuffer {
  },
  concat(abs: AudioBuffer[]): AudioBuffer { },
  clone(ab: AudioBuffer): AudioBuffer { },
}

export { abutils };