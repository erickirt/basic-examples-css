"use client";
import React from "react";
import {
   Sheet,
   SheetViewProps,
   useClientMediaQuery,
} from "@silk-hq/components";
import "./DetachedSheet.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type DetachedSheetRootProps = Omit<SheetRootProps, "license"> & {
   license?: SheetRootProps["license"];
};

const DetachedSheetRoot = React.forwardRef<
   React.ElementRef<typeof Sheet.Root>,
   DetachedSheetRootProps
>((props, ref) => {
   return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
DetachedSheetRoot.displayName = "DetachedSheetRoot";

// ============================================================================
// View
// ============================================================================

const DetachedSheetView = React.forwardRef<
   React.ElementRef<typeof Sheet.View>,
   React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
   const largeViewport = useClientMediaQuery("(min-width: 650px)");
   const contentPlacement = largeViewport ? "center" : "bottom";
   const tracks: SheetViewProps["tracks"] = largeViewport
      ? ["top", "bottom"]
      : "bottom";

   return (
      <Sheet.View
         className={`DetachedSheet-view contentPlacement-${contentPlacement} ${className ?? ""
            }`}
         contentPlacement={contentPlacement}
         tracks={tracks}
         nativeEdgeSwipePrevention={true}
         {...props}
         ref={ref}
      />
   );
});
DetachedSheetView.displayName = "DetachedSheetView";

// ============================================================================
// Backdrop
// ============================================================================

const DetachedSheetBackdrop = React.forwardRef<
   React.ElementRef<typeof Sheet.Backdrop>,
   React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
   return (
      <Sheet.Backdrop
         className={`DetachedSheet-backdrop ${className ?? ""}`.trim()}
         travelAnimation={{
            opacity: ({ progress }) => Math.min(progress * 0.2, 0.2),
         }}
         themeColorDimming="auto"
         {...props}
         ref={ref}
      />
   );
});
DetachedSheetBackdrop.displayName = "DetachedSheetBackdrop";

// ============================================================================
// Content
// ============================================================================

const DetachedSheetContent = React.forwardRef<
   React.ElementRef<typeof Sheet.Content>,
   React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
   return (
      <Sheet.Content
         className={`DetachedSheet-content ${className ?? ""}`.trim()}
         {...props}
         ref={ref}
      >
         <div className="DetachedSheet-innerContent">{children}</div>
      </Sheet.Content>
   );
});
DetachedSheetContent.displayName = "DetachedSheetContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const DetachedSheetPortal = Sheet.Portal;
const DetachedSheetTrigger = Sheet.Trigger;
const DetachedSheetHandle = Sheet.Handle;
const DetachedSheetOutlet = Sheet.Outlet;
const DetachedSheetTitle = Sheet.Title;
const DetachedSheetDescription = Sheet.Description;

export {
   DetachedSheetRoot,
   DetachedSheetPortal,
   DetachedSheetView,
   DetachedSheetBackdrop,
   DetachedSheetContent,
   DetachedSheetTrigger,
   DetachedSheetHandle,
   DetachedSheetOutlet,
   DetachedSheetTitle,
   DetachedSheetDescription,
};
