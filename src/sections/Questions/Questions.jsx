import Link from "@/components/Link";
import "./Questions.scss";
import Section from "@/layouts/Section";
import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/AccordionItem";

const Questions = () => {
  const title = "Frequently Asked Questions";
  const description =
    "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.";
  const button = (
    <Link
      className="questions__button button"
      content="Ask a Question"
      href="/support"
    ></Link>
  );
  const questionItems = [
    {
      title: "What is StreamVibe?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "How much does StreamVibe cost?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "What content is available on StreamVibe?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "How can I watch StreamVibe?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "How do I sign up for StreamVibe?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "What is the StreamVibe free trial?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "How do I contact StreamVibe customer support?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
    {
      title: "What are the StreamVibe payment methods?",
      description:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
    },
  ];
  return (
    <Section
      title={title}
      description={description}
      titleId="questions-title"
      className="questions"
      actions={button}
    >
      <Accordion cols={2}>
        {questionItems.map((item, index) => (
          <AccordionItem
            key={index}
            isOpen={index === 0}
            titleId={`question-${index}`}
            detailsName="questions"
            {...item}
          ></AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default Questions;
