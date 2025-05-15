"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";

import "./BottomSheet.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type BottomSheetRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const BottomSheetRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  BottomSheetRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
BottomSheetRoot.displayName = "BottomSheetRoot";

// ============================================================================
// View
// ============================================================================

const BottomSheetView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`BottomSheet-view ${className ?? ""}`.trim()}
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
BottomSheetView.displayName = "BottomSheetView";

// ============================================================================
// Backdrop
// ============================================================================

const BottomSheetBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`BottomSheet-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...props}
      ref={ref}
    />
  );
});
BottomSheetBackdrop.displayName = "BottomSheetBackdrop";

// ============================================================================
// Content
// ============================================================================

const BottomSheetContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`BottomSheet-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
BottomSheetContent.displayName = "BottomSheetContent";

// ============================================================================
// BleedingBackground
// ============================================================================

const BottomSheetBleedingBackground = React.forwardRef<
  React.ElementRef<typeof Sheet.BleedingBackground>,
  React.ComponentPropsWithoutRef<typeof Sheet.BleedingBackground>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.BleedingBackground
      className={`BottomSheet-bleedingBackground ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
BottomSheetBleedingBackground.displayName = "BottomSheetBleedingBackground";

// ============================================================================
// Unchanged Components
// ============================================================================

const BottomSheetPortal = Sheet.Portal;
const BottomSheetTrigger = Sheet.Trigger;
const BottomSheetHandle = Sheet.Handle;
const BottomSheetOutlet = Sheet.Outlet;
const BottomSheetTitle = Sheet.Title;
const BottomSheetDescription = Sheet.Description;

export {
  BottomSheetRoot,
  BottomSheetPortal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetBleedingBackground,
  BottomSheetTrigger,
  BottomSheetHandle,
  BottomSheetOutlet,
  BottomSheetTitle,
  BottomSheetDescription,
};
