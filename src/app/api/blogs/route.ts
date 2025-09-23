import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const blogs=[
    {
            "id": 8,
            "title": "Ratione et dolor ius",
            "content": "Dolores voluptatibus",
            "thumbnail": "https://assets.vercel.com/image/upload/front/nextjs/twitter-card.png",
            "isFeatured": true,
            "tags": [
                "Doloribus ullam est"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2025-09-23T06:55:28.608Z",
            "updatedAt": "2025-09-23T06:55:28.608Z",
            "author": {
                "id": 1,
                "name": "Tanmoy Parvez",
                "email": "tanmoy@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T02:59:11.962Z",
                "updatedAt": "2025-09-22T02:59:11.962Z"
            }
        },
        {
            "id": 7,
            "title": "learn react",
            "content": "learn react with video",
            "thumbnail": "https://www.monocubed.com/wp-content/uploads/2021/12/Best-React-Libraries.jpg",
            "isFeatured": true,
            "tags": [
                "css",
                "html",
                ""
            ],
            "views": 11,
            "authorId": 1,
            "createdAt": "2025-09-23T06:42:07.693Z",
            "updatedAt": "2025-09-23T06:42:39.424Z",
            "author": {
                "id": 1,
                "name": "Tanmoy Parvez",
                "email": "tanmoy@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T02:59:11.962Z",
                "updatedAt": "2025-09-22T02:59:11.962Z"
            }
        },
        {
            "id": 6,
            "title": "Getting Started with javaScript",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 8,
            "authorId": 3,
            "createdAt": "2025-09-22T11:17:49.602Z",
            "updatedAt": "2025-09-22T14:02:08.399Z",
            "author": {
                "id": 3,
                "name": "munna",
                "email": "munna@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T03:07:07.207Z",
                "updatedAt": "2025-09-22T03:07:07.207Z"
            }
        },
        {
            "id": 5,
            "title": "Getting Started with css",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 7,
            "authorId": 3,
            "createdAt": "2025-09-22T10:42:51.435Z",
            "updatedAt": "2025-09-22T14:02:20.648Z",
            "author": {
                "id": 3,
                "name": "munna",
                "email": "munna@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T03:07:07.207Z",
                "updatedAt": "2025-09-22T03:07:07.207Z"
            }
        },
        {
            "id": 4,
            "title": "Getting Started with React",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 8,
            "authorId": 3,
            "createdAt": "2025-09-22T10:20:16.806Z",
            "updatedAt": "2025-09-22T14:02:03.729Z",
            "author": {
                "id": 3,
                "name": "munna",
                "email": "munna@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T03:07:07.207Z",
                "updatedAt": "2025-09-22T03:07:07.207Z"
            }
        },
        {
            "id": 3,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 3,
            "authorId": 3,
            "createdAt": "2025-09-22T10:14:45.135Z",
            "updatedAt": "2025-09-22T13:37:34.228Z",
            "author": {
                "id": 3,
                "name": "munna",
                "email": "munna@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T03:07:07.207Z",
                "updatedAt": "2025-09-22T03:07:07.207Z"
            }
        },
        {
            "id": 2,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 7,
            "authorId": 3,
            "createdAt": "2025-09-22T09:30:00.168Z",
            "updatedAt": "2025-09-22T13:37:34.239Z",
            "author": {
                "id": 3,
                "name": "munna",
                "email": "munna@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T03:07:07.207Z",
                "updatedAt": "2025-09-22T03:07:07.207Z"
            }
        },
        {
            "id": 1,
            "title": "Getting Started with Next.js",
            "content": "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://teamraft.com/wp-content/uploads/nextjs.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "React",
                "Web Development"
            ],
            "views": 12,
            "authorId": 1,
            "createdAt": "2025-09-22T03:00:02.280Z",
            "updatedAt": "2025-09-22T14:05:29.846Z",
            "author": {
                "id": 1,
                "name": "Tanmoy Parvez",
                "email": "tanmoy@gmail.com",
                "password": "tanmoy1234",
                "role": "USER",
                "phone": "01234567890",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-22T02:59:11.962Z",
                "updatedAt": "2025-09-22T02:59:11.962Z"
            }
        }
]

export async function GET() {
  return Response.json(blogs)
}

export const POST = async(request:Request)=>{
    const blog = await request.json();
    const newBlog ={
        ...blog,
        id: blogs.length + 1,

    };
    blogs.push(newBlog);
    return new NextResponse(JSON.stringify(newBlog),{
        status:201,
        headers:{
            "Content-Type":"application/json",

        },

    });
}