
'use client'
import { useState } from "react"

export default function(){

    const [count,setCount]=useState(0);
    return <div className="flex justify-center">
        <div>
            <div className="font-bold m-4 ">Welcome to Interactive Page</div>
            <div className="max-w-md px-4 text-sm">
            This paragraph right here is rendered statically using Next.js.By generating the content on the server at build time
                    ,   Next.js ensures that search engines can easily crawl    and index this page,boosting it's SEO.Plus,serving static content 
                    leads to faster load times and a smooth user experience. 
            </div>
            
            <button type="button" onClick={()=>{
                setCount(count+1);
            }} className="ml-5 px-4 text-sm mt-2 py-2 border-2 border-black hover:bg-gray-200 rounded-md max-w-28">count is {count}</button>
        </div>
    </div>
}