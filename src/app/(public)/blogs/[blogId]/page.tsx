import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

const BlogDetailsPage =async ({params}:
    {params:Promise<{blogId:string}>}) => {
    const {blogId} = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blog = await res.json()



    return (
        <div className='max-w-7xl mx-auto py-30 px-4'>
          <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;