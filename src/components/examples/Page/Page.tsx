"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";
import "./Page.css";

// ============================================================================
// Root
// ============================================================================
type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type PageRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const PageRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  PageRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
PageRoot.displayName = "PageRoot";

// ============================================================================
// View
// ============================================================================
const PageView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`Page-view ${className ?? ""}`.trim()}
      contentPlacement="right"
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
PageView.displayName = "PageView";

// ============================================================================
// Backdrop
// ============================================================================
const PageBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`Page-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...props}
      ref={ref}
    />
  );
});
PageBackdrop.displayName = "PageBackdrop";

// ============================================================================
// Content
// ============================================================================
const PageContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`Page-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
PageContent.displayName = "PageContent";

// ============================================================================
// Unchanged Components
// ============================================================================
const PagePortal = Sheet.Portal;
const PageTrigger = Sheet.Trigger;
const PageHandle = Sheet.Handle;
const PageOutlet = Sheet.Outlet;
const PageTitle = Sheet.Title;
const PageDescription = Sheet.Description;

export {
  PageRoot,
  PagePortal,
  PageView,
  PageBackdrop,
  PageContent,
  PageTrigger,
  PageHandle,
  PageOutlet,
  PageTitle,
  PageDescription,
};
