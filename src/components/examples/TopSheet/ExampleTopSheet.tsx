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
import "./ExampleTopSheet.css";

import { SheetDismissButton } from "@/components/examples/_GenericComponents/SheetDismissButton/SheetDismissButton";

const ExampleTopSheet = () => {
  return (
    <TopSheetRoot>
      <TopSheetTrigger>Top Sheet</TopSheetTrigger>
      <TopSheetPortal>
        <TopSheetView>
          <TopSheetBackdrop />
          <TopSheetContent>
            <div className="ExampleTopSheet-root">
              <TopSheetTrigger action="dismiss" asChild>
                <SheetDismissButton className="ExampleTopSheet-dismissTrigger" />
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
            </div>
          </TopSheetContent>
        </TopSheetView>
      </TopSheetPortal>
    </TopSheetRoot>
  );
};

export { ExampleTopSheet };
