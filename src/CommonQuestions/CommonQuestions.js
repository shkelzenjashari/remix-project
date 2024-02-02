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
              <a href="tel:049160599"> 049160599 </a>
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
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x13549f214c9cabb1:0xb223c9c6e50d4cea?source=g.page.share"
                target="_blank"
              >
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
