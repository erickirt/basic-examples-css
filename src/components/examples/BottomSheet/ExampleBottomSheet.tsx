"use client";
import {
  BottomSheetRoot,
  BottomSheetTrigger,
  BottomSheetPortal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetBleedingBackground,
  BottomSheetHandle,
  BottomSheetTitle,
  BottomSheetDescription,
} from "./BottomSheet";
import "./ExampleBottomSheet.css";

const ExampleBottomSheet = () => {
  return (
    <BottomSheetRoot>
      <BottomSheetTrigger>Bottom Sheet</BottomSheetTrigger>
      <BottomSheetPortal>
        <BottomSheetView>
          <BottomSheetBackdrop />
          <BottomSheetContent>
            <BottomSheetBleedingBackground />
            <div className="ExampleBottomSheet-root">
              <BottomSheetHandle
                className="ExampleBottomSheet-handle"
                action="dismiss"
              />
              <div className="ExampleBottomSheet-illustration" />
              <div className="ExampleBottomSheet-information">
                <BottomSheetTitle className="ExampleBottomSheet-title">
                  Activity Added to Your Calendar
                </BottomSheetTitle>
                <BottomSheetDescription className="ExampleBottomSheet-description">
                  Your activity has been successfully scheduled. We'll send you
                  a reminder as the date approaches.
                </BottomSheetDescription>
              </div>
              <BottomSheetTrigger
                className="ExampleBottomSheet-validateTrigger"
                action="dismiss"
              >
                Got it
              </BottomSheetTrigger>
            </div>
          </BottomSheetContent>
        </BottomSheetView>
      </BottomSheetPortal>
    </BottomSheetRoot>
  );
};

export { ExampleBottomSheet };
