import { useState } from 'react'
import { API, Storage } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { createAuction } from '../src/graphql/mutations'
import config from '../src/aws-exports'
import Link from 'next/link'

function CreateAuction () {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    // upload the image to S3
    const uploadedImage = await Storage.put(image.name, image)
    console.log(uploadedImage)
    // submit the GraphQL query 
    const newAuction = await API.graphql({
      query: createAuction,
      variables: {
        input: {
          name,
          image: {
            // use the image's region and bucket (from aws-exports) as well as the key from the uploaded image
            region: config.aws_user_files_s3_bucket_region,
            bucket: config.aws_user_files_s3_bucket,
            key: uploadedImage.key
          }
        }
      }
    })
    console.log(newAuction)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Create an Auction</h2>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name' onChange={e => setName(e.target.value)} />
      <label htmlFor='image'>Image</label>
      <input type='file' id='image' onChange={e => setImage(e.target.files[0])} />
      <input type='submit' value='create' />
    </form>
    <h1>View all Auctions <Link href='/auctions'>(+)</Link></h1>
    </>
  )
}

export default withAuthenticator(CreateAuction)