import React from "react"
import { useStringParam } from "src/utils/utils"

const BlogPostPage = () => {
  const slug = useStringParam("slug")
  return <div>Welcome to the blog post: {slug}</div>
}

export default BlogPostPage
