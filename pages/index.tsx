import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { NextSeo } from 'next-seo';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-3 lg:px-10 mb-8">
      <NextSeo
      title={"flex direction"}
      description="All sorts of blog posts are here"
    />
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
          {posts.map((post, index) => (
              <div className='lg:col-span-3 col-span-1' key={index}>
                  <PostCard key={index} post={post} />
              </div>
          ))}
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug="" categories=""/>
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  // const func = async (post) => {
  //   const item = post.node
  //   const { base64, img }  = await getPlaiceholder(item.featuredImage.url, { size: 10 })
  //   item.featuredImage = {...img, blurDataURL: base64,}
  //   return {
  //     ...item
  //   }
  // }
  // posts.map(post => func(post))

  return {
    props: { posts },
    revalidate: 1
  };

  
}