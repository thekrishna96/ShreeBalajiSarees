"use client"

import { Dialog, DialogPanel, Transition } from "@headlessui/react"
import { XMark } from "@medusajs/icons"
import Image from "next/image"
import { Fragment, useState } from "react"

type ImageViewerProps = {
  images: { id: string; url: string }[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

const ImageViewer = ({ images, isOpen, onClose, initialIndex = 0 }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsZoomed(false)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  const handleClose = () => {
    setIsZoomed(false)
    onClose()
  }

  if (!images.length) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative w-full max-w-6xl">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                >
                  <XMark className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Main Image */}
                <div 
                  className={`relative bg-white rounded-lg overflow-hidden cursor-zoom-${isZoomed ? 'out' : 'in'}`}
                  onClick={toggleZoom}
                  style={{ aspectRatio: '4/5' }}
                >
                  <Image
                    src={images[currentIndex].url}
                    alt={`Product image ${currentIndex + 1}`}
                    fill
                    className={`transition-transform duration-300 ${
                      isZoomed 
                        ? 'object-contain scale-150 cursor-zoom-out' 
                        : 'object-contain cursor-zoom-in'
                    }`}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>

                {/* Image Counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                  </div>
                )}

                {/* Zoom Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                </div>

                {/* Thumbnail Navigation */}
                {images.length > 1 && (
                  <div className="flex justify-center mt-4 gap-2 max-w-full overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => {
                          setCurrentIndex(index)
                          setIsZoomed(false)
                        }}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          index === currentIndex 
                            ? 'border-purple-500 ring-2 ring-purple-300' 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <Image
                          src={image.url}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ImageViewer
