import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import { NextSeo } from 'next-seo'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <>
    <NextSeo
        title="Blog Bưu điện văn hóa xã Tự Lập"
        description="Thông tin về các dịch vụ và lịch làm việc của Bưu điện văn hóa xã Tự Lập. Hotline 0978333963"
        canonical="https://blog.buudienxatulap.ga/"
        openGraph={{
          url: 'https://blog.buudienxatulap.ga/',
          title: 'Blog Bưu điện xã Tự Lập',
          description: 'Các dịch vụ và lịch làm việc của bưu điện xã Tự Lập. Hotline 0978333963',
          images: [
            {
              url: 'https://blog.buudienxatulap.ga/ho-tham.png',
              width: 800,
              height: 600,
              alt: 'Hồ Thị Thắm',
            },
          ],
        }}
      />
      <Layout preview={preview}>
        <Head>
          <title>Blog {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
