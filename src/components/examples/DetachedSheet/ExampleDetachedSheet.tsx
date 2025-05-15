"use client";
import {
  DetachedSheetRoot,
  DetachedSheetPortal,
  DetachedSheetView,
  DetachedSheetBackdrop,
  DetachedSheetContent,
  DetachedSheetTrigger,
  DetachedSheetHandle,
  DetachedSheetTitle,
  DetachedSheetDescription,
} from "./DetachedSheet";
import "./ExampleDetachedSheet.css";

const ExampleDetachedSheet = () => {
  return (
    <DetachedSheetRoot>
      <DetachedSheetTrigger>
        Detached Sheet
      </DetachedSheetTrigger>
      <DetachedSheetPortal>
        <DetachedSheetView>
          <DetachedSheetBackdrop />
          <DetachedSheetContent>
            <div className="ExampleDetachedSheet-root">
              <DetachedSheetHandle
                className="ExampleDetachedSheet-handle"
                action="dismiss"
              />
              <div className="ExampleDetachedSheet-illustration" />
              <div className="ExampleDetachedSheet-information">
                <DetachedSheetTitle className="ExampleDetachedSheet-title">
                  Your Meal is Coming
                </DetachedSheetTitle>
                <DetachedSheetDescription className="ExampleDetachedSheet-description">
                  Your food is on its way and will arrive soon! Sit back and get
                  ready to enjoy your meal.
                </DetachedSheetDescription>
              </div>
              <DetachedSheetTrigger
                className="ExampleDetachedSheet-validateTrigger"
                action="dismiss"
              >
                Got it
              </DetachedSheetTrigger>
            </div>
          </DetachedSheetContent>
        </DetachedSheetView>
      </DetachedSheetPortal>
    </DetachedSheetRoot>
  );
};

export { ExampleDetachedSheet };
