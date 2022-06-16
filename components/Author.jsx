import React from 'react'
import Image from 'next/image'

import { grpahCMSImageLoader } from '../util'

const Author = ({ author }) => (
  <div className="relative mt-20 mb-8 rounded-lg bg-amber-900 bg-opacity-80 p-12 text-center">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height="100px"
        width="100px"
        className="rounded-full align-middle"
        src={author.photo.url}
      />
    </div>
    <h2 className="mt-4 mb-4 text-2xl font-bold text-white">{author.name}</h2>
    <h3 className="text-lg text-white">{author.bio}</h3>
  </div>
)

export default Author
