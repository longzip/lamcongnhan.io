import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  // const imageProfileUrl = author? author.avatar ? author.avatar : '/lam-cong-nhan.jpg' : '/lam-cong-nhan.jpg'

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Image
          // src={author.avatar.url}
          src='/lam-cong-nhan.jpg'
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
