"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./PageFromBottom.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type PageFromBottomRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const PageFromBottomRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  PageFromBottomRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
PageFromBottomRoot.displayName = "PageFromBottomRoot";

// ============================================================================
// View
// ============================================================================

const PageFromBottomView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`PageFromBottom-view ${className ?? ""}`.trim()}
      contentPlacement="bottom"
      swipe={false}
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
PageFromBottomView.displayName = "PageFromBottomView";

// ============================================================================
// Backdrop
// ============================================================================

const PageFromBottomBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`PageFromBottom-backdrop ${className ?? ""}`.trim()}
      travelAnimation={{ opacity: [0, 0.1] }}
      {...props}
      ref={ref}
    />
  );
});
PageFromBottomBackdrop.displayName = "PageFromBottomBackdrop";

// ============================================================================
// Content
// ============================================================================

const PageFromBottomContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`PageFromBottom-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      <div className="PageFromBottom-topBar">
        <Sheet.Trigger
          className="PageFromBottom-dismissTrigger"
          action="dismiss"
        >
          Close
        </Sheet.Trigger>
      </div>
      {children}
    </Sheet.Content>
  );
});
PageFromBottomContent.displayName = "PageFromBottomContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const PageFromBottomPortal = Sheet.Portal;
const PageFromBottomTrigger = Sheet.Trigger;
const PageFromBottomHandle = Sheet.Handle;
const PageFromBottomOutlet = Sheet.Outlet;
const PageFromBottomTitle = Sheet.Title;
const PageFromBottomDescription = Sheet.Description;

export {
  PageFromBottomRoot,
  PageFromBottomPortal,
  PageFromBottomView,
  PageFromBottomBackdrop,
  PageFromBottomContent,
  PageFromBottomTrigger,
  PageFromBottomHandle,
  PageFromBottomOutlet,
  PageFromBottomTitle,
  PageFromBottomDescription,
};
