import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Làm Công Nhân!
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        ĐĂNG KÝ ĐI LÀM NGAY{' '}
        <a
          href="tel:0978333963"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Liên hệ chị Thắm 0978.333.963
        </a>{' '}
        hoặc{' '}
        <a
          href="https://m.me/lamcongnhan.ga"
          className="underline hover:text-success duration-200 transition-colors"
        >
          để lại số điện thoại để được Chúng tôi tư vấn chọn lựa công việc tốt nhất
        </a>
        .
      </h4>
    </section>
  )
}
