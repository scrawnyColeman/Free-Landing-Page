export const getData = () => {
  return {
    services: [
      // <--Beginning of the first service code block-->
      {
        description:
          "Looking for personalized fitness guidance and support? I offer customized workout plans, nutrition advice, and one-to-one online support. Get on track to meet your health and fitness goals from the comfort of your own home",
        heading: "Online Coaching",
        action: {
          //  This is the text that shows in button on Service card number one
          name: "Sign up",
          // This is the URL that the user will visit when they click the button on Service card number one
          actionUrl: "https://typeform.com",
        },
      },
      // <--End of the first service code block-->

      // <--Beginning of the second service code block-->
      {
        heading: "Consultation",
        description:
          "Unsure what you want to achieve? In our 1-hour consultation we will work together to get a clear understanding of your goals and provide you with the knowledge and tools you need to succeed",
        action: {
          //  This is the text that shows in button on Service card number two
          name: "Book a slot",
          // This is the URL that the user will visit when they click the button on Service card number two
          actionUrl: "https://calendly.com",
        },
      },
      // <--End of the second service code block-->

      // <--Beginning of the third service code block-->
      {
        heading: "Contact me",
        description:
          "Experience the benefits of one-on-one personal training with in-person coaching sessions. I will work with you to create a customized workout plan and provide support and motivation to help you reach your goals. Each session is tailored to your individual needs and preferences, ensuring that you get the most out of your training",
        action: {
          //  This is the text that shows in button on Service card number three
          name: "Contact",
          // This is the URL that the user will visit when they click the button on Service card number three
          actionUrl: "mailto://thomashutchinsondev@gmail.com",
        },
      },
      // <--End of the third service code block-->
    ],
    branding: {
      name: "Chris Millar Online coach", // This is required

      /*
       * Remove the // to uncomment one of the two code blocks below
       * Or if you would prefer for the header of your site to be plain, then leave these uncommented
       * Go to the `tailwind.config.cjs` file to set your primary and secondary colour as your branding
       *
       * Feel free to experiment to see which fits your needs best
       */
      // headerImage: {
      //   shape: "background" as const,
      //   url: "/horizontal-img.jpg",
      // },

      // headerImage: {
      //   shape: "background" as const,
      //   url: "/vertical-img.jpg",
      // },

      headerImage: {
        shape: "fit" as const,
        url: "/backgroundless-img.png",
      },
    },
  };
};
