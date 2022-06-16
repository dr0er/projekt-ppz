import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b-4 border-amber-800 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className=" cursor-pointer text-6xl font-bold text-stone-100 md:text-3xl">
              Projekt PPZ - CMS blog
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="mt-4 ml-4 cursor-pointer align-middle text-xl font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
            ))}
        </div> */}
      </div>
    </div>
  )
}

export default Header
