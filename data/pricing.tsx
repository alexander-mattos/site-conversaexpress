import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Escolha o Plano Perfeito para Você',
  description:
    'Flexibilidade e funcionalidades que crescem junto com o seu negócio.',
  plans: [
    {
      id: 'start',
      title: 'Plano Start',
      description: 'Funções Básicas, perfeito para começar.',
      price: 'R$ 29,90/mês',
      features: [
        {
          title: '1 usuário',
        },
        {
          title: '1 conexão com WhatsApp',
        },
        {
          title: '5 filas de atendimento',
        },
        {
          title: 'Agendamento de Mensagens',
        },
        {
          title: 'Kanban',
        },
      ],
      action: {
        href: 'https://app.conversaexpress.com.br/signup',
      },
    },
    {
      id: 'pro',
      title: 'Plano Pro',
      description: 'Para pequenos e médios negócios.',
      price: 'R$ 199,90/mês',
      isRecommended: true,
      features: [
        {
          title: '10 usuários',
        },
        {
          title: '10 conexão com WhatsApp',
        },
        {
          title: '10 filas de atendimento',
        },
        {
          title: 'Envio em Massa',
        },
        {
          title: 'Agendamento de Mensagens',
        },
        {
          title: 'Chat Interno',
        },
        {
          title: 'Kanban',
        },
        null,
        {
          title: 'Integrações',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://app.conversaexpress.com.br/signup',
      },
    },
    {
      id: 'enterprise',
      title: 'Plano Enterprise',
      description: 'Para empresas em pleno crescimento.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            R$ 799,90
          </Text>
          <Text>R$ 399,90/mês</Text>
        </HStack>
      ),
      features: [
        {
          title: '99 usuários*',
        },
        {
          title: '100 conexões com WhatsApp',
        },
        {
          title: '50 filas de atendimento',
        },
        {
          title: 'Envio em Massa',
        },
        {
          title: 'Agendamento de Mensagens',
        },
        {
          title: 'Chat Interno',
        },
        {
          title: 'API Externa',
        },
        {
          title: 'Kanban',
        },
        null,
        {
          title: 'Integrações',
          iconColor: 'green.500',
        },
        {
          title: 'ChatGPT',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'https://app.conversaexpress.com.br/signup',
      },
    },
  ],
}