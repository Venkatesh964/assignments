export default function(){
    return <div>
                    

        <div className="flex justify-center ">
            <div>
                <div className="font-bold px-5">
                    Welcome to Static Page
                </div>
                <div className=" max-w-md text-sm p-5">
                    This paragraph right here is rendered statically using Next.js.By generating the content on the server at build time
                    ,   Next.js ensures that search engines can easily crawl    and index this page,boosting it's SEO.Plus,serving static content 
                    leads to faster load times and a smooth user experience. And if I need interactivity Next.js allows me to use the "use client" directive for specific components
                </div>
                <div className="max-w-md text-sm px-5">
                    Pretty cool,right? Now navigate to the 'Client page' to check how interactivity is added in Next.js!
                </div>
            </div>
        </div>
    </div>
}