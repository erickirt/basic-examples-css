"use client";
import React from "react";
import {
   TopSheetRoot,
   TopSheetPortal,
   TopSheetView,
   TopSheetBackdrop,
   TopSheetContent,
   TopSheetTrigger,
   TopSheetTitle,
   TopSheetDescription,
} from "./TopSheet";
import { VisuallyHidden } from "@silk-hq/components";
import "./ExampleTopSheet.css";

const ExampleTopSheet = () => {
   return (
      <TopSheetRoot>
         <TopSheetTrigger>Top Sheet</TopSheetTrigger>
         <TopSheetPortal>
            <TopSheetView>
               <TopSheetBackdrop />
               <TopSheetContent className="ExampleTopSheet-content">
                  <TopSheetTrigger action="dismiss" asChild>
                     <button className="ExampleTopSheet-dismissTrigger">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="ExampleTopSheet-dismissIcon"
                        >
                           <path d="M18 6 6 18" />
                           <path d="m6 6 12 12" />
                        </svg>
                        <VisuallyHidden.Root>Dismiss Sheet</VisuallyHidden.Root>
                     </button>
                  </TopSheetTrigger>
                  <div className="ExampleTopSheet-information">
                     <TopSheetTitle className="ExampleTopSheet-title">
                        Serene Haven is Available
                     </TopSheetTitle>
                     <div className="ExampleTopSheet-illustration" />
                     <TopSheetDescription className="ExampleTopSheet-description">
                        Your dream home, Serene Haven, is ready for you. A rare blend of
                        luxury and charm—don't miss it!
                     </TopSheetDescription>
                     <TopSheetTrigger
                        className="ExampleTopSheet-validateTrigger"
                        action="dismiss"
                     >
                        Book it Now
                     </TopSheetTrigger>
                  </div>
               </TopSheetContent>
            </TopSheetView>
         </TopSheetPortal>
      </TopSheetRoot>
   );
};

export { ExampleTopSheet };
