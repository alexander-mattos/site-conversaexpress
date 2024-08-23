"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  ButtonGroup,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";
import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiBox,
  FiCode,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";
import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";
import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="ConversaExpress"
        description="ConversaExpress - A Ferramenta Mais Fácil Do Brasil Para Gerenciar Seu Atendimento"
        canonical="https://conversaexpress.com.br"
        openGraph={{
          url: "https://conversaexpress.com.br/",
          title: "ConversaEpress",
          description: "ConversaExpress - A Ferramenta Mais Fácil Do Brasil Para Gerenciar Seu Atendimento.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "ConversaExpress",
        }}
      />
      <Box>

        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                A Ferramenta Mais Fácil Do Brasil
                <Br /> Para Gerenciar Seu Atendimento.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                De chatbots a webhooks, <Em>simplifique seu atendimento</Em>
                <Br /> em uma única plataforma.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="https://app.conversaexpress.com.br/signup">
                  Experimente 7 dias Grátis
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/#vantagens"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Saiba Mais
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/tela1.png"
                  width={1200}
                  height={762}
                  alt="Screenshot ConversaExpress"
                  quality="100"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="vantagens"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="2"
        features={[
          {
            title: "Integração Total",
            icon: FiSmile,
            description: "Conecte-se ao WhatsApp e use chatbots como Typebot com facilidade.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Atendimento Ágil",
            icon: FiSliders,
            description:
              "Responda mais rápido usando automações e aumente a satisfação do cliente.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Monitoramento em Tempo Real",
            icon: FiGrid,
            description:
              "Acompanhe as interações dos clientes e otimize as respostas.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Customização Flexível",
            icon: FiThumbsUp,
            description:
              "Adapte o sistema às suas necessidades com poderosas integrações via webhook.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {

  return (
    <Highlights>      
      <HighlightsTestimonialItem
        name="João"
        description="Diretor de TI"
        avatar="/static/images/eelco.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Eu estava cético sobre a implementação de um novo sistema, mas o ConversaExpress superou minhas expectativas. A interface é intuitiva, fácil de usar e a equipe de suporte é sempre disponível para ajudar. Nossa produtividade aumentou em 30% desde que começamos a usar o sistema.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Fique sempre dois passos a frente de seus concorrentes"
      >
        <Text color="muted" fontSize="lg">
          Pensamos em todas as funcionalidades que você precisa para que você possa
          ter mais tempo para dedicar ao seu cliente e torná-lo único.
        </Text>
        <Wrap mt="8">
          {[
            "WhatsApp",
            "Typebot",
            "Chatwoot",
            "WoofedCRM",
            "Webhooks",
            "Kanban",
            "Agendamento de Mensagens",
            "Chat Interno",
            "Resposta Rápida",
            "Envio em Massa",
            "Campanhas",
            "Chatbot Nativo",
            "ChatGPT",
            "N8N",
            "LangFlow",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="recursos"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Explore os Recursos Avançados
          <Br /> do Nosso Sistema.
        </Heading>
      }
      description={
        <>
          Conheça as ferramentas projetadas para
          <Br />
          otimizar seu atendimento ao cliente.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Integração Completa.",
          icon: FiBox,
          description:
            "Conecte-se ao WhatsApp, chatbots e utilize integrações via webhook sem esforço.",
          variant: "inline",
        },
        {
          title: "Chatbots Inteligentes.",
          icon: FiLock,
          description:
            "Automatize respostas e interações com nossos chatbots avançados.",
          variant: "inline",
        },
        {
          title: "Dashboard Unificado.",
          icon: FiSearch,
          description:
            "Gerencie todas interações de clientes em um só lugar de forma eficiente.",
          variant: "inline",
        },
        {
          title: "Análise de Dados.",
          icon: FiUserPlus,
          description:
            "Acesse relatórios e análises detalhadas para tomar decisões informadas.",
          variant: "inline",
        },
        {
          title: "Alta Segurança.",
          icon: FiFlag,
          description:
            "Garanta a segurança dos dados com criptografia avançada e compliance.",
          variant: "inline",
        },
        {
          title: "Chatbot Nativo.",
          icon: FiTrendingUp,
          description:
            "Comece hoje mesmo a automatizar seus atendimentos com o chatbot nativo.",
          variant: "inline",
        },
        {
          title: "Personalização do Sistema.",
          icon: FiToggleLeft,
          description:
            "Customize interfaces e fluxos de trabalho para atender suas necessidades específicas.",
          variant: "inline",
        },
        {
          title: "Fácil Navegação.",
          icon: FiTerminal,
          description:
            "Interface intuitiva que facilita o uso diário.",
          variant: "inline",
        },
        {
          title: "Atendimento e Suporte Contínuo.",
          icon: FiCode,
          description: (
            <>
              Aproveite suporte técnico 24/7 para solucionar qualquer questão rapidamente.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text textAlign="center" color="muted">
        
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "ConversaExpress 🚀 ",
        href: "https://app.conversaexpress.com.br/signup",
        action: false,
      },
    },
  };
}