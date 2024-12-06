import { Footer } from '../../layouts/Footer/Footer'
import { NavBar } from '../../layouts/NavBar/NarBar'
import GalleryBox from './GalleryBox/GalleryBox'
import VideoSection from './VideoSection/VideoSection'
import QuotaSection from './QuotaSection/QuotaSection'

export default function Gallery() {
  return (
    <>
      <NavBar />
      <GalleryBox />
      <VideoSection />
      <QuotaSection />
      <Footer />
    </>
  )
}
