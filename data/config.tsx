import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'ConversaExpress',
    description: 'ConversaExpress',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'vantagens',
        label: 'Vantagens',
      },
      {
        id: 'pricing',
        label: 'Planos',
      },
      {
        id: 'faq',
        label: 'Dúvidas',
      },
      {
        label: 'Entrar',
        href: 'https://app.conversaexpress.com.br/signin',
      },
      {
        label: 'Teste 7 Dias Grátis',
        href: 'https://app.conversaexpress.com.br/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Desenvolvido por {' '}
        <Link href="https://conversaexpress.com.br/">ConversaExpress</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:contato@conversaexpress.com.br',
        label: 'Contato',
      },
      {
        href: 'https://conversaexpress.com.br',
        label: 'Contact',
      },
      {
        href: 'https://instagram.com/conversaexpress',
        label: <FaInstagram size="14" />,
      },
      {
        href: 'https://youtube.com/conversaexpress',
        label: <FaYoutube size="14" />,
      },
    ],
  },
}

export default siteConfig