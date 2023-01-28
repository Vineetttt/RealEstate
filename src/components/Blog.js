import React from "react";
import BlogDetails from "../components/BlogData";
const Blog=()=>{
    return(
        <>
        <div className="pt-5">
        <h1 className="text-center pt-[120px] text-[24px] md:text-[38px] lg:text-[38px] font-semibold">Our Latest Property News</h1>
        <p className="text-center text-[15px] md:text-[18px] lg:text-[18px] pt-[16px]">There are many variations of passages of Lorem Ipsum available but the this in <br/> majority have suffered alteration in some</p>
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 lg:mt-20 lg:mx-36 md:mx-40 md:mt-10 px-8">
    {BlogDetails.map(blog=>(
        <div className=" mt-8 lg:mt-0" >
            <div className="px-8 pt-8">
                <div><img src={blog.blogImage} alt=""/></div>
            </div>
            <div>
                <p className="text-blue-500 text-[12px] pt-7 px-8">Appartment</p>
                <h1 className="text-[20px] md:text-[22px] lg:text-[22px] font-semibold pt-3 px-8">{blog.blogName}</h1>
                <p className="text-[16px] pt-3 pb-5 px-8">It is a long established fact that a reader is <br/> will be distracted by the readable....</p>
            </div>
        </div>
    ))}
    </div>
    <div className="flex flex-col justify-center items-center pt-24">
        <button className="text-white bg-blue-500 w-40 h-14 font-bold">Read More Blogs</button>
    </div>
        </>
    )
}
export default Blog;