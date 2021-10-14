import { PublicLayout } from '../components/layout'
import { SplitWithFormHero } from '../components/hero'
import { 
  CenterTextFeature,
  SplitRightImageFeature,
  SplitLeftImageFeature,
  Faq
} from '../components/features'

export default function Page() {
  return (
    <>
      <SplitWithFormHero />
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <CenterTextFeature/>
          <SplitLeftImageFeature/>
          <SplitRightImageFeature/>
          <Faq/>
        </div>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <PublicLayout>
      {page}
    </PublicLayout>
  )
}