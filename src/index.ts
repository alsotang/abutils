const audioContext = new AudioContext()

const abutils = {
  /** The repeat() method constructs and returns a new AudioBuffer which contains the specified number of copies of the AudioBuffer on which it was called, concatenated together. */
  repeat(ab: AudioBuffer, times: number): AudioBuffer {
    const { sampleRate, length, numberOfChannels } = ab
    const newLength = length * times
    const newAB = audioContext.createBuffer(numberOfChannels, newLength, sampleRate)
    for (let i = 0; i < numberOfChannels; i++) {
      const channel = newAB.getChannelData(i)
      const oldChannel = ab.getChannelData(i)
      for (let j = 0; j < times; j++) {
        channel.set(oldChannel, j * length)
      }
    }
    return newAB
  },
  /** The slice() method extracts a section of a AudioBuffer and returns it as a new AudioBuffer, without modifying the original AudioBuffer. */
  slice(ab: AudioBuffer, startSecond: number = 0, endSecond: number = ab.duration): AudioBuffer {
    const start = Math.floor(startSecond * ab.sampleRate)
    const end = Math.floor(endSecond * ab.sampleRate)
    const { sampleRate, length, numberOfChannels } = ab
    const newLength = end - start
    const newAB = audioContext.createBuffer(numberOfChannels, newLength, sampleRate)
    for (let i = 0; i < numberOfChannels; i++) {
      const channel = newAB.getChannelData(i)
      const oldChannel = ab.getChannelData(i)
      channel.set(oldChannel.slice(start, end), 0)
    }
    return newAB
  },
  /** clone a AudioBuffer */
  clone(ab: AudioBuffer): AudioBuffer {
    return this.slice(ab);
  },
}

export { abutils };