import React, { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import { withSSRContext, Storage } from 'aws-amplify'
import { API } from 'aws-amplify';
import { listAuctions } from '../src/graphql/queries'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import Image from 'next/image'
import Link from 'next/link'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { useAuth } from "../contexts/auth";

// export async function getServerSideProps (context) {
  // const { Auth, API } = withSSRContext(context)
  
//   // const user = await Auth.currentAuthenticatedUser()
  // const { data } = await API.graphql({ query: listAuctions })
//   console.log(user)

  // return {
    // props: {
//       user: user.username,
      // auctions: data.listAuctions.items
    // }
  // }
// }

const MyApp = () => {
  const { user } = useAuth();
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    async function loadData() {
      await API.graphql({ query: listAuctions })
                .then(auctions => {
                  setAuctions(auctions.data.listAuctions.items)
                })
    }
    loadData()
  }, [])
  
  return (
    <div>
      <Head>
        <title>Auctions</title>
      </Head>
      <div className='container'>
        <h1>Auctions <Link href='/create-auction'>(+)</Link></h1>
        <h1>
          { user ? user.username : null }
        </h1>
        <div className='img-grid'>
          {
          auctions.map(auction => (
            <div key={auction.id} className='img-square'>
              <h2>{auction.name}</h2>
              <h2>{auction.id}</h2>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default MyApp;