"use client";
import { VisuallyHidden } from "@silk-hq/components";
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

const ExampleCard = () => {
   return (
      <CardRoot>
         <CardTrigger>
            Card
         </CardTrigger>
         <CardPortal>
            <CardView>
               <CardBackdrop />
               <CardContent className="ExampleCard-content">
                  <CardTrigger action="dismiss" asChild>
                     <button
                        className="ExampleCard-dismissTrigger"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="ExampleCard-dismissIcon"
                        >
                           <path d="M18 6 6 18" />
                           <path d="m6 6 12 12" />
                        </svg>
                        <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
                     </button>
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
               </CardContent>
            </CardView>
         </CardPortal>
      </CardRoot>
   );
};

export { ExampleCard };
