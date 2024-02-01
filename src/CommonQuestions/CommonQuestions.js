import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "./commonQuestions.css";
import Arrow from "./Arrow";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <h1 className="headline">The most common questions</h1>
      <div className="accordion">
        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1> What kind of games do you offer?</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              We offer a wide range of video games, including popular titles
              from various genres such as action, sports, and adventure.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1>Do you have multiplayer options?</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Yes, we have multiplayer options for many of our games, allowing
              customers to play against each other and engage in friendly
              competition.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1>Can I bring my own gaming equipment?</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              {" "}
              Yes, customers are welcome to bring their own gaming equipment,
              although we also provide high-quality gaming gear for use at our
              center.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CommonQuestions;
