'use client'

import { useParams } from 'next/navigation'

export default function Page() {
    throw new Error("Hello bhaiya");
    
  let languages=["python","javascript","java","c++","c#"]
  const params = useParams()
  if(languages.includes(params.slug)){
      return <p>Post: {params.slug}</p>
  }
  else{
    return <div>Pages not found</div>
  }
}