import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import { withSSRContext, Storage } from 'aws-amplify'
import { listAuctions } from '../src/graphql/queries'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps () {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listAuctions })
  const { items } = data.listAuctions
  // const yee = await Promise.all(
  //   items.map( async item => {
  //     const test = await Storage.get(item.image.key, { level: 'public' });
  //     return {...item, test}
  //   })
  // )
  

  return {
    props: {
      auctions: items
    }
  }
}

export default function Home ({ auctions }) {

  const handleSubmit = async key => {
    const image = await Storage.get(key)
    return image
  }

  return (
    <div>
      <Head>
        <title>Auctions</title>
      </Head>
      <div className='container'>
        <h1>Auctions <Link href='/create-auction'>(+)</Link></h1>
        <div className='img-grid'>
          {auctions.map(auction => {
            // const test = await Storage.get(auction.image.key);
// let hi;
// let test;
// const AsynconFilteredChanged = async () => {
  // const test = await Storage.get(auction.image.key);
  // debugger
  // (test &&
    // <Image 
      // src={test} 
      // alt="Picture of the author" />)
  
// }
// const Hello = 
// let hello = asynconFilteredChanged()

// ;(async () => {
  // console.log(users)
  // await asynconFilteredChanged()
  // return test
// })()
// debugger
// const testing = async function() {

  
//   debugger
//   return signedURL
// }
// const hi = testing()
// const hello =  Storage.get(auction.image.key)
/* <Image  */
                  // src={hello}
                    // height='200px' />
// debugger
const imageUrl = handleSubmit(auction.image.key)
debugger
return (
              <div key={auction.id} className='img-square'>
                <h2>{auction.name}</h2>
                <h2>{auction.id}</h2>
                {/* use the AmplifyS3Image component to render the auction's image using its S3 key */}
                <AmplifyS3Image imgKey={auction.image.key} height='200px' />
                {
                  // imageUrl
                  // <Image src={handleSubmit(auction.image.key)} />
                }
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}