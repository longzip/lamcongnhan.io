import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      <div class="1hbspt-form" id="hbspt-form-lam-cong-nhan"></div>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Tư vấn và hỗ trợ bạn lựa chọn công việc tốt nhất.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://zalo.me/0978333963"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              ZALO 0978333963
            </a>
            <a
              href="https://www.facebook.com/lamcongnhan.ga/"
              className="mx-3 font-bold hover:underline"
            >
              Xem chúng tôi trên Facebook
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
