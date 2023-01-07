import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";

import Typography from "../components/Typography";
import Button from "../components/Button";

import { getData } from "../YOUR_COPY_GOES_HERE";
import Head from "next/head";

type Props = {
  services: {
    heading: string;
    description: string;
    action?: {
      name: string;
      actionUrl: string;
    };
  }[];
  branding: {
    name: string;
    headerImage?: {
      url: string;
      shape: "background" | "fit";
    };
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  services,
  branding,
}) => (
  <>
    <Head>
      <title>Online Fitness</title>
      <meta
        name="description"
        content="A basic landing page made by Thomas Hutchinson Dev"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="relative h-screen">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <Typography.Heading
          isLight
          tag="h1"
          className="text-shadow z-10 select-none text-center sm:text-5xl"
        >
          {branding?.name ?? ""}
        </Typography.Heading>
      </div>
      {branding?.headerImage?.shape === "background" ? (
        <div className="absolute top-0 bottom-0 left-0 right-0  overflow-hidden">
          <Image
            src={branding.headerImage.url}
            width={500}
            height={700}
            alt="cover-image"
            className="h-auto min-h-full w-auto min-w-full select-none object-cover"
          />
        </div>
      ) : branding?.headerImage?.shape === "fit" ? (
        <div className="absolute bottom-0 right-0 flex h-full flex-col justify-end overflow-hidden ">
          <Image
            src={branding.headerImage.url}
            width={500}
            height={700}
            alt="cover-image"
            className="h-4/5 w-auto select-none "
          />
        </div>
      ) : null}
    </div>

    {services.length ? (
      <section
        id="services"
        className="border-b bg-white pt-4 pb-12 shadow-inner"
      >
        <div className="container mx-auto flex w-full flex-wrap ">
          <div className="services mx-auto flex w-full flex-col flex-wrap items-center gap-4 lg:flex-row lg:justify-center">
            {services.map(({ description, heading, action }) => (
              <div
                key={`service-${heading}`}
                className="flex w-full items-center md:w-96 lg:h-96"
              >
                <div className="space-y-4 border-2 p-4">
                  <div className="space-y-4">
                    <Typography.Subheading tag="h6">
                      {heading}
                    </Typography.Subheading>
                    <Typography.Body className="lg:h-48 lg:overflow-y-scroll">
                      {description}
                    </Typography.Body>
                  </div>

                  {action !== undefined && (
                    <Button to={action.actionUrl} className="w-full">
                      {action?.name}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ) : null}

    <footer className="flex justify-center">
      <p className="p-4 text-center text-white">
        Copyright &copy; 2023. All rights reserved. Created by&nbsp;
        <span className="text-gray-300">Thomas Hutchinson Dev.</span>
      </p>
    </footer>
  </>
);

export const getStaticProps: GetStaticProps<Props> = async (_) => ({
  props: getData(),
});

export default Home;
