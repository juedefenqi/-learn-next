function Post({ posts }){

    return (
            <ul>
                {posts.map((post,index)=>(
                <li key='index'>{post.title}</li>
                ))}       
            </ul>)
}
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
export async function getStaticProps(){
    const posts =[{title:123}];
    return {
        props:{
            posts,
        }
    }
}
export default Post