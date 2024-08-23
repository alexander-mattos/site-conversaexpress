import Link from 'next/link'
import Image from 'next/image'


export const Logo: React.FC = (props) => {
  return (
    <Link href="/">
        <div className="flex flex-col items-center">
            <Image
              src="/static/logo/logo.png"
              width={190}
              height={90}
              alt="Logo ConversaExpress"
              quality="100"
              priority
            >
            </Image>
        </div>
    </Link>
)
}