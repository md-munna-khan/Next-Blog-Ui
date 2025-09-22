/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IBlogPost } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{
    next:{
      revalidate:30
    }
  });
  const {data:blogs} = await res.json();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts </h2>
      <div className=" grid grid-cols-3 gap-8 max-w-6xl text-4xl my-8 mx-auto">
        {
          blogs.slice(0,3).map((blog:IBlogPost)=>(
              <BlogCard key={blog?.id} post={blog}   />
          ))
        }
      </div>
    </div>
  );
}
