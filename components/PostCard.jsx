// import React from 'react'

// const PostCard = ({ post }) => {
//   return (
//     <div>
//       {post.title}
//       {post.excerpt}
//     </div>
//   )
// }

// export default PostCard
import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import Link from 'next/link'

// import { grpahCMSImageLoader } from '../util

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt=""
          className="absolute h-80 w-full rounded-t-lg object-cover  object-top shadow-lg lg:rounded-lg"
        />
      </div>
    </div>
  )
}

export default PostCard
