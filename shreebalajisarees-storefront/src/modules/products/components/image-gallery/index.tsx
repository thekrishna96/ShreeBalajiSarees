"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"
import ImageViewer from "../image-viewer"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openViewer = (index: number) => {
    setSelectedImageIndex(index)
    setIsViewerOpen(true)
  }
  return (
    <>
      <div className="flex items-start relative max-w-xl mx-auto">
        <div className="flex flex-col w-full gap-y-6">
          {images.map((image, index) => {
            return (
              <Container
                key={image.id}
                className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-ui-bg-subtle rounded-lg shadow-sm cursor-pointer group"
                id={image.id}
                onClick={() => openViewer(index)}
              >
                {!!image.url && (
                  <>
                    <Image
                      src={image.url}
                      priority={index <= 2 ? true : false}
                      className="absolute inset-0 rounded-lg group-hover:scale-105 transition-transform duration-300 object-contain p-2"
                      alt={`Product image ${index + 1}`}
                      fill
                      sizes="(max-width: 576px) 280px, (max-width: 768px) 400px, (max-width: 992px) 480px, 560px"
                    />
                    {/* Zoom indicator overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </Container>
            )
          })}
        </div>
      </div>

      {/* Image Viewer Modal */}
      <ImageViewer
        images={images}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
        initialIndex={selectedImageIndex}
      />
    </>
  )
}

export default ImageGallery
