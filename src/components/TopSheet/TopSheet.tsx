"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./TopSheet.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type TopSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const TopSheetRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  TopSheetRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
TopSheetRoot.displayName = "TopSheetRoot";

// ============================================================================
// View
// ============================================================================

const TopSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`TopSheet-view ${className ?? ""}`.trim()}
      contentPlacement="top"
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
TopSheetView.displayName = "TopSheetView";

// ============================================================================
// Backdrop
// ============================================================================

const TopSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`TopSheet-backdrop ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
TopSheetBackdrop.displayName = "TopSheetBackdrop";

// ============================================================================
// Content
// ============================================================================

const TopSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`TopSheet-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      <Sheet.BleedingBackground className="TopSheet-bleedingBackground" />
      {children}
    </Sheet.Content>
  );
});
TopSheetContent.displayName = "TopSheetContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const TopSheetPortal = Sheet.Portal;
const TopSheetTrigger = Sheet.Trigger;
const TopSheetHandle = Sheet.Handle;
const TopSheetOutlet = Sheet.Outlet;
const TopSheetTitle = Sheet.Title;
const TopSheetDescription = Sheet.Description;

export {
  TopSheetRoot,
  TopSheetPortal,
  TopSheetView,
  TopSheetBackdrop,
  TopSheetContent,
  TopSheetTrigger,
  TopSheetHandle,
  TopSheetOutlet,
  TopSheetTitle,
  TopSheetDescription,
};
