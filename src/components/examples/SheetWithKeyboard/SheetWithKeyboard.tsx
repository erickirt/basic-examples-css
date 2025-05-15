"use client";
import React, { useRef, useCallback } from "react";
import {
  Sheet,
  useClientMediaQuery,
  type SheetViewProps,
} from "@silk-hq/components";
import "./SheetWithKeyboard.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type SheetWithKeyboardRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const SheetWithKeyboardRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  SheetWithKeyboardRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
SheetWithKeyboardRoot.displayName = "SheetWithKeyboardRoot";

// ============================================================================
// View
// ============================================================================

const SheetWithKeyboardView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  const viewRef = useRef<HTMLElement>(null);
  const largeViewport = useClientMediaQuery("(min-width: 800px)");
  const contentPlacement = largeViewport ? "center" : "bottom";
  const tracks: SheetViewProps["tracks"] = largeViewport
    ? ["top", "bottom"]
    : "bottom";

  const travelHandler = useCallback<
    Exclude<SheetViewProps["onTravel"], undefined>
  >(({ progress }) => {
    if (!viewRef.current) return;

    // Dismiss the on-screen keyboard as soon as travel
    // occurs by focusing the view element.
    if (progress < 0.999) {
      viewRef.current.focus();
    }
  }, []);

  return (
    <Sheet.View
      className={`SheetWithKeyboard-view ${className ?? ""}`.trim()}
      contentPlacement={contentPlacement}
      tracks={tracks}
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      onTravel={travelHandler}
      ref={viewRef}
      {...props}
    />
  );
});
SheetWithKeyboardView.displayName = "SheetWithKeyboardView";

// ============================================================================
// Backdrop
// ============================================================================

const SheetWithKeyboardBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`SheetWithKeyboard-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...props}
      ref={ref}
    />
  );
});
SheetWithKeyboardBackdrop.displayName = "SheetWithKeyboardBackdrop";

// ============================================================================
// Content
// ============================================================================

const SheetWithKeyboardContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`SheetWithKeyboard-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      {children}
    </Sheet.Content>
  );
});
SheetWithKeyboardContent.displayName = "SheetWithKeyboardContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const SheetWithKeyboardPortal = Sheet.Portal;
const SheetWithKeyboardTrigger = Sheet.Trigger;
const SheetWithKeyboardHandle = Sheet.Handle;
const SheetWithKeyboardOutlet = Sheet.Outlet;
const SheetWithKeyboardTitle = Sheet.Title;
const SheetWithKeyboardDescription = Sheet.Description;

export {
  SheetWithKeyboardRoot,
  SheetWithKeyboardPortal,
  SheetWithKeyboardView,
  SheetWithKeyboardBackdrop,
  SheetWithKeyboardContent,
  SheetWithKeyboardTrigger,
  SheetWithKeyboardHandle,
  SheetWithKeyboardOutlet,
  SheetWithKeyboardTitle,
  SheetWithKeyboardDescription,
};
