import { assert } from 'chai'
import { getSampleArrayBuffer } from './sample_sound'
import { abutils } from '..'

let audioBuffer: AudioBuffer
const audioContext = new AudioContext()

/** for debug */
function playSound(ab: AudioBuffer) {
  const source = audioContext.createBufferSource()
  source.buffer = ab
  source.connect(audioContext.destination)
  // `start` should after user interaction
  document.addEventListener('click', () => {
    source.start()
  }, { once: true })
}

describe('abutils', () => {

  before(async () => {
    // init audioBuffer
    const arrayBuffer = getSampleArrayBuffer()
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  })
  it('repeat twice', () => {
    const newAB = abutils.repeat(audioBuffer, 2)
    assert.equal(newAB.length, audioBuffer.length * 2)
    assert.equal(newAB.duration, audioBuffer.duration * 2)
    // playSound(newAB)
  })

  it('slice from 1 second', () => {
    const newAB = abutils.slice(audioBuffer, 1)
    assert.equal(newAB.length, audioBuffer.length - audioBuffer.sampleRate)
    assert.equal(newAB.duration, audioBuffer.duration - 1)
    // playSound(newAB)
  })

  it('clone', () => {
    const newAB = abutils.clone(audioBuffer)
    assert.equal(newAB.length, audioBuffer.length)
    assert.equal(newAB.duration, audioBuffer.duration)
    // playSound(newAB)
  })
})