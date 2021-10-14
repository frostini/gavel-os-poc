import { PublicLayout } from '../components/layout'
import { SplitWithFormHero } from '../components/hero'
import { CenterText } from '../components/features'

export default function Page() {
  return (
    <>
    <SplitWithFormHero />
    <CenterText/>
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