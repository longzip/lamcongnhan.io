import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is a page preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Tuyển <strong>công nhân, lao động</strong> đi làm ngay tại các KCN Khai Quang - Vĩnh Yên, KCN Bình Xuyên 1+2, KCN Bá Thiện 1+2, Khu vực Phúc Yên, Mê Linh, Bắc Thăng Long. Thu nhập lên đến 13tr{' '}
              <a
                href="tel:0978333963"
                className="underline hover:text-success duration-200 transition-colors"
              >
                Đăng ký đi làm ngay: Chị Thắm 0978.333.963
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
