'use server'

import { client } from "@/lib/db" // all the methods to interact with the redis database will be available in client object 
import { redirect } from 'next/navigation'
import { v4 as uuidv4 } from "uuid";

export async function createBook(formData) {
  console.log('this is the formData-> ',formData);
  
  const {title, rating, author, blurb} = Object.fromEntries(formData)

  // create book id
  // const uuid = uuidv4()
  // const id = BigInt(`0x${uuid.replace(/-/g, '')}`)
  const id = Date.now()

  // saving the book name in sorted set in order to check if the book already exists
  const bookExist = await client.zAdd('books',{ // retuns the number of elements added to the sorted set or 0 if the element already exists
    score: id,
    value: title,
  }, {NX: true}) // if book already exists, it will not be added to the sorted set

  if (!bookExist) {
    return {error: 'Book already exists'}
  }

  // saving the hash in the redis database
  await client.hSet(`books:${id}`, {
    title,
    rating,
    author,
    blurb
  })

  redirect('/')
}