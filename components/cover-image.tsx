import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  priority?: boolean
};
const defaultProps = {
  priority: false,
};

const CoverImage = ({ title, src, slug, priority }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-auto', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1200}
      height={1051}
      priority={priority}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

CoverImage.defaultProps = defaultProps;

export default CoverImage
