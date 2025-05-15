"use client";
import {
  CardRoot,
  CardPortal,
  CardView,
  CardBackdrop,
  CardContent,
  CardTrigger,
  CardTitle,
  CardDescription,
} from "./Card";
import "./ExampleCard.css";

import { SheetDismissButton } from "../_GenericComponents/SheetDismissButton/SheetDismissButton";

const ExampleCard = () => {
  return (
    <CardRoot>
      <CardTrigger>
        Card
      </CardTrigger>
      <CardPortal>
        <CardView>
          <CardBackdrop />
          <CardContent>
            <div className="ExampleCard-root">
              <CardTrigger action="dismiss" asChild>
                <SheetDismissButton className="ExampleCard-dismissTrigger" />
              </CardTrigger>
              <div className="ExampleCard-illustration" />
              <div className="ExampleCard-information">
                <CardTitle className="ExampleCard-title">
                  Paint and Sip
                </CardTitle>
                <CardDescription className="ExampleCard-description">
                  Join our art workshop and let your imagination flow. Paint,
                  create, and have fun.
                </CardDescription>
                <CardTrigger
                  className="ExampleCard-validateTrigger"
                  action="dismiss"
                >
                  Reserve Spot
                </CardTrigger>
              </div>
            </div>
          </CardContent>
        </CardView>
      </CardPortal>
    </CardRoot>
  );
};

export { ExampleCard };
