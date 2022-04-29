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
        title="Làm công nhân"
        description="Đăng ký đi làm công nhân liên hệ chị Thắm 0978333963 hoặc để lại sđt chúng tôi tư vấn lựa chọn công việc tốt nhất."
        canonical="https://www.lamcongnhan.ga/"
        openGraph={{
          url: 'https://www.lamcongnhan.ga/',
          title: 'Làm Công Nhân',
          description: 'Tuyển công nhân, lao động đi làm ngay tại các KCN Khai Quang - Vĩnh Yên, KCN Bình Xuyên 1+2, KCN Bá Thiện 1+2, Khu vực Phúc Yên, Mê Linh, Bắc Thăng Long. Thu nhập lên đến 13tr',
          images: [
            {
              url: 'https://www.lamcongnhan.ga/lam-cong-nhan.png',
              width: 800,
              height: 600,
              alt: 'Làm Công Nhân',
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
