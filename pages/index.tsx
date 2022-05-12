import type { NextPage } from 'next'
import Head from 'next/head'
import { PostWidget, PostCard, Categories } from '../components'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React Testing2', excerpt: 'Learn React Testing2' },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Projekt PPZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
