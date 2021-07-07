function Blog({ posts }){

    return (
            <ul>
                {posts.map((post,index)=>(
                <li key='index'>{post.title}</li>
                ))}       
            </ul>)
}
export async function getStaticProps(){
    // getStaticProps （静态生成）
    // export async function getStaticProps(context) {
    //     return {
    //       props: {}, // will be passed to the page component as props
    //     }
    //   }
    // params包含使用动态路由的页面的路由参数。例如，如果页面名称是[id].js，则params看起来像{ id: ... }。要了解更多信息，请查看动态路由文档。您应该将它与 一起使用getStaticPaths，我们稍后会解释。
    // preview是true页面是否处于预览模式，undefined否则。请参阅预览模式文档。
    // previewData包含由 设置的预览数据setPreviewData。请参阅预览模式文档。
    // locale 包含活动区域设置（如果启用）。
    // locales 包含所有支持的语言环境（如果启用）。
    // defaultLocale 包含配置的默认语言环境（如果启用）。
    // getStaticProps 应该返回一个对象：
    // props-带有将被页面组件接收的道具的可选对象。它应该是一个可序列化的对象
    // revalidate-以秒为单位的可选数量，在此之后可以发生页面重新生成（默认为：false或不重新验证）。更多关于增量静态再生
    // notFound- 一个可选的布尔值，允许页面返回 404 状态和页面。下面是它如何工作的一个
    // const res =await fetch('https://.../posts')
    // const posts = await res.json();
    const posts =[{title:123}];
    // console.log(12321321)
    return {
        props:{
            posts,
        }
    }
}
export default Blog