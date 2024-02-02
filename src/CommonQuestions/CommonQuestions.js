import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "./commonQuestions.css";
import Arrow from "./Arrow";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <h1 className="headline">Pytjet me te shpeshta</h1>
      <div className="accordion">
        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1>A mund te bej rezervim</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Per rezervime mund te na kontaktoni permes numrit te telefonit :
              049160599
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1>Ku gjindeni me lokacion</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lokacioni eshte ne lagjen Tophane, Prishtine.
              <a href=" g.page/remix-gaming-center?share" target="_blank">
                Per directions kliko ketu
              </a>
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary id="panel-header" aria-controls="panel-content">
            <h1>Cilat jane performancat e kompjutereve</h1>
            <Arrow />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              CPU: i9-14900K <br /> GPU: RTX 4070 <br /> MOUSE: LOGITECH
              SUPERLIGHT
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CommonQuestions;
