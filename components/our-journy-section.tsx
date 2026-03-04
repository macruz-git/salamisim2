'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
{
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20picture-GRHE0iAJdRargcdv4sQTToz52K1brq.jpg',
    alt: 'Our Journey - Main'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7498957f-250a-44fb-92f1-5eb1f22daa25-dOegbHAyCPRFi18oU8PoBIBuIvwtXl.jpg',
    alt: 'Our Journey - Classroom Celebration'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26460298-2022-4593-aa60-fd6886549963-PKVSKniaqISKYlFcXk4slAEN0uLIHq.jpg',
    alt: 'Our Journey - First Quarter Achievers'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b633e398-059d-4790-922e-03011dcac874-EIVSF0AU4RyqZMUhqfEfk2Iaoh1WAM.jpg',
    alt: 'Our Journey - Awards Ceremony'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fa4f40c0-cfc5-408f-b98b-b6c4e96fd5a1-62xY3HX2vUOobNELvrK2hdQNrTtNpO.jpg',
    alt: 'Our Journey - Night Event'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b52bd916-c16d-444e-8e1c-9b348b4f37d5-haVrMDp1RxshmF2ayUQYplVxva7lqS.jpg',
    alt: 'Our Journey - Economics Project'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/78bafeaf-9db8-49e1-ab5f-34a237edc503-rlzwnzd9PnaxrDvHzPM7Ii8i81ZDCG.jpg',
    alt: 'Our Journey - Project Display'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab16db78-ac40-4ac4-99ff-3b725bab5ed8-rrPoiNJVUaM8m1NTB8zYrY2PvzPGF4.jpg',
    alt: 'Our Journey - Team Bonding'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/671c32c3-c710-44b4-9196-d98a295ff1d3-AM0L20PJ4Ie7sOlsQHDg47dzMOiV0Y.jpg',
    alt: 'Our Journey - Event Celebration'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/90277576-d851-46bd-b06a-7cddbd380b91-9XRlJDerh95EPgb1Re6QA40jmfJM2u.jpg',
    alt: 'Our Journey - Photo Booth Moments'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/772ab55b-deec-48f3-9e13-5b5158fd2e00-wZ6LO5ds49CTMGMyDVZo90G6zrsy24.jpg',
    alt: 'Our Journey - B2 Class Photo'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/916525d2-871b-459f-a9f8-c451efa5ca36-b98GCqR9Y1iNZrsIsjeHsHST68AMxW.jpg',
    alt: 'Our Journey - Mentoring Session'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/65d8f697-5857-42c8-8dd3-ef87bb4e358f-WNFBe3X55P2F36ejqwAu5ee2i7Txo2.jpg',
    alt: 'Our Journey - Year End Party'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/932ea144-f908-4558-84b8-fbbf8a08480d-2GXPm1O0BaH2NaTsoHs7R0vUh8KSFe.jpg',
    alt: 'Our Journey - Team Working'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/62fe84f8-d122-4e46-81e0-54cec8bf195e-klIrU1ZqEjI3RL6CMqotedR0gmIrBb.jpg',
    alt: 'Our Journey - Collaborative Work'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b03ecbeb-2d9b-45a6-87b9-bcb50d67d757-cvDTdUFaqhdCKkmYPenrc7b2rISeXh.jpg',
    alt: 'Our Journey - Group Activity'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c732c44d-efc7-4dcd-8b23-8b6fd04ce38e-EuAykjlFJe4yt79QszicRN969S79IE.jpg',
    alt: 'Our Journey - Team Building'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7518f964-fd9f-4346-af70-4fcc38f69f6f-5c1PoEJDBqh8dD3djFJ4bsliBQzF62.jpg',
    alt: 'Our Journey - Workshop'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/75503571-229e-4345-b9ab-3e65877bd346-L1rLaN6IrCuizKRO13H0szCuIRH1Hn.jpg',
    alt: 'Our Journey - Creative Work'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/331529b0-b579-4a15-833b-ad7180ebe914-EW9TysJEgCiyDR24NKqYRvI3D7PZSm.jpg',
    alt: 'Our Journey - Team Discussion'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/719fe2d3-7ab0-48b9-b244-7cc3ab246212-a7rNKtalc8eH7gNXe5NSwrbuEtwKZs.jpg',
    alt: 'Our Journey - Focus'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cf0e3052-573d-46d5-a472-1b8cbbfea7f2-iOltwgxmXsvBTDpcuVfnpoVaeqToc7.jpg',
    alt: 'Our Journey - Team Effort'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ccb4307-0573-4087-aace-d25a7d069c71-lvEFxKS2u9pYenO4jlzs5U2MlRDiBm.jpg',
    alt: 'Our Journey - Happy Moment'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/211e9251-8434-4636-8ec2-9deb402d6893-KgQq38mTrIJeHsfbOMxYru7ISMNuG3.jpg',
    alt: 'Our Journey - Dedication'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edf24ac8-b461-40bd-b18b-4482c254432c-hgLBvDaInmdq89yGw4qxvC1Bwzwtqs.jpg',
    alt: 'Our Journey - Progress'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4224ab57-a015-4b95-817c-bfd728ddd824-buyyqsiVpPxPS7u0pYvJoXeIR9Mj7a.jpg',
    alt: 'Our Journey - Teamwork'
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc91082f-d90e-45c9-ab36-668b0bfd0d51-hXoCpjyryMaY2gH0DnvkEzs8475wgh.jpg',
    alt: 'Our Journey - Final'
  }
]

export function OurJourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Our Journey
          </h2>
          <p className="text-lg text-foreground/70">
            Moments of creativity, collaboration, and innovation
          </p>
        </div>

        {/* Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Image Section */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
              {/* Navigation Arrows Overlay */}
              <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPrevious}
                  className="bg-white/90 hover:bg-white text-slate-900 rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-white/90 hover:bg-white text-slate-900 rounded-full p-3 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
            </div>


          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* Title Card */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Memories in Motion
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Explore our gallery of unforgettable moments. From first projects to celebrated achievements, each frame tells a story of dedication and teamwork.
              </p>
            </div>

            {/* Counter */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center">
              <p className="text-slate-400 text-sm mb-2">Gallery</p>
              <p className="text-4xl font-bold text-white">
                {currentIndex + 1} <span className="text-slate-400 text-2xl">/ {galleryImages.length}</span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg p-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Previous</span>
              </button>
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="flex-1 bg-gold hover:bg-gold/90 text-slate-900 font-semibold rounded-lg p-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                aria-label="View Gallery"
              >
                View Gallery
              </button>
              <button
                onClick={goToNext}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg p-3 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                aria-label="Next"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-auto rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-gold hover:bg-gold/90 text-slate-900 rounded-full transition-all duration-300 m-4"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            {/* Gallery Grid */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Gallery View</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsGalleryOpen(false)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
