import Head from 'next/head'
import { withSSRContext } from 'aws-amplify'
import { listAuctions } from '../src/graphql/queries'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import Link from 'next/link'

export async function getServerSideProps () {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listAuctions })
  return {
    props: {
      auctions: data.listAuctions.items
    }
  }
}

export default function Home ({ auctions }) {
  return (
    <div>
      <Head>
        <title>Auctions</title>
      </Head>
      <div className='container'>
        <h1>Auctions <Link href='/create-auction'>(+)</Link></h1>
        <div className='img-grid'>
          {auctions.map(auction => {
            return (
              <div key={auction.id} className='img-square'>
                <h2>{auction.name}</h2>
                <h2>{auction.id}</h2>
                {/* use the AmplifyS3Image component to render the auction's image using its S3 key */}
                <AmplifyS3Image imgKey={auction.image.key} height='200px' />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}