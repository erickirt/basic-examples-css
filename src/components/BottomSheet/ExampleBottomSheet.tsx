"use client";
import {
   BottomSheetRoot,
   BottomSheetTrigger,
   BottomSheetPortal,
   BottomSheetView,
   BottomSheetBackdrop,
   BottomSheetContent,
   BottomSheetTitle,
   BottomSheetDescription,
   BottomSheetHandle,
} from "./BottomSheet";
import "./ExampleBottomSheet.css";

const ExampleBottomSheet = () => {
   return (
      <BottomSheetRoot>
         <BottomSheetTrigger>Bottom Sheet</BottomSheetTrigger>
         <BottomSheetPortal>
            <BottomSheetView>
               <BottomSheetBackdrop />
               <BottomSheetContent className="ExampleBottomSheet-content">
                  <BottomSheetHandle className="ExampleBottomSheet-handle" />
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
               </BottomSheetContent>
            </BottomSheetView>
         </BottomSheetPortal>
      </BottomSheetRoot>
   );
};

export { ExampleBottomSheet };
