import React, { useRef } from 'react'

const audioContext = new (window.AudioContext)()
const analyser = audioContext.createAnalyser()
analyser.fftSize = 2048

const bufferLength = analyser.frequencyBinCount
const dataArray = new Uint8Array(bufferLength)

const ArtificialIntelligenceAudio: React.FC = () => {
  const canvasIns = useRef<HTMLCanvasElement>(null)

  const draw = () => {
    const canvas = canvasIns.current

    if (canvas) {
      const ctx = canvas.getContext('2d')

      requestAnimationFrame(draw)

      if (!canvas || !ctx) {
        return
      }

      analyser.getByteTimeDomainData(dataArray)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.lineWidth = 2
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, 'rgba(0, 255, 255, 0.7)')
      gradient.addColorStop(1, 'rgba(255, 0, 255, 0.7)')
      ctx.strokeStyle = gradient

      ctx.beginPath()
      const sliceWidth = canvas.width * 1 / bufferLength

      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128
        const y = v * canvas.height / 2

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.quadraticCurveTo(x, y, x + sliceWidth / 2, y)
        }

        x += sliceWidth
      }

      ctx.lineTo(canvas.width, canvas.height / 2)
      ctx.stroke()
    }
  }

  const handleResume = async () => {
    await audioContext.resume()
    console.log('Resuming audio context...')
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        console.log('Audio stream:', stream)
        const source = audioContext.createMediaStreamSource(stream)
        source.connect(analyser)
        draw()
      })
      .catch(error => {
        console.error('Error accessing audio stream:', error)
      })
  }
  return (
    <div
      className='pt-14 px-7'
      onClick={handleResume}>
      <canvas
        ref={canvasIns}
        className='w-full h-[400px]'
        width="800"
        height="400">
      </canvas>
    </div>
  )
}

export default ArtificialIntelligenceAudio
