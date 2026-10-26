import AccordionGroup from "@/components/AccordionGroup";
import seasonItems from "@/components/ShowSeasons/seasonItems";
import Accordion from "@/components/Accordion";
import ShowEpisodeCard from "@/components/ShowEpisodeCard";
import "./ShowSeasons.scss";

const ShowSeasons = (props) => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleClassName="h4"
          subtitle={subtitle}
          titleId={`season-${index + 1}`}
          detailsName="seasons"
          isOpen={index === 0}
          key={index}
          hasArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <ShowEpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  );
};

export default ShowSeasons;
