import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import { withSSRContext, Storage } from 'aws-amplify'
import { listAuctions } from '../src/graphql/queries'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import Image from 'next/image'
import Link from 'next/link'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export async function getServerSideProps (context) {
  const { Auth, API } = withSSRContext(context)
  const user = await Auth.currentAuthenticatedUser()
  // const { data } = await API.graphql({ query: listAuctions })

  console.log('auctions: ', data)
  return {
    props: {
      parks: "test"
    }
  }
}

const MyApp = ({ parks }) => {

  return (
    <div>
      <Head>
        <title>Auctions</title>
      </Head>
      <div className='container'>
        <h1>Auctions <Link href='/create-auction'>(+)</Link></h1>
        <div className='img-grid'>
          {parks}
          {
          // auctions.map(auction => (
          //     <div key={auction.id} className='img-square'>
          //       <h2>{auction.name}</h2>
          //       <h2>{auction.id}</h2>
          //       <AmplifyS3Image imgKey={auction.image.key} height='200px' />
          //     </div>
          // ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyApp;