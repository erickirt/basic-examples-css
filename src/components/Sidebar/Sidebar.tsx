"use client";
import React from "react";
import { Sheet, VisuallyHidden } from "@silk-hq/components";
import "./Sidebar.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type SidebarRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const SidebarRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  SidebarRootProps
>((props, ref) => {
  return (
    <Sheet.Root
      license="commercial"
      sheetRole="dialog"
      {...props}
      ref={ref}
    ></Sheet.Root>
  );
});
SidebarRoot.displayName = "SidebarRoot";

// ============================================================================
// View
// ============================================================================

const SidebarView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`Sidebar-view ${className ?? ""}`.trim()}
      contentPlacement="left"
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
SidebarView.displayName = "SidebarView";

// ============================================================================
// Backdrop
// ============================================================================

const SidebarBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`Sidebar-backdrop ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
SidebarBackdrop.displayName = "SidebarBackdrop";

// ============================================================================
// Content
// ============================================================================

const SidebarContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`Sidebar-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      <VisuallyHidden.Root>
        <Sheet.Title>Sidebar Example</Sheet.Title>
        <Sheet.Trigger action="dismiss">Close Sidebar example</Sheet.Trigger>
      </VisuallyHidden.Root>
      {children}
    </Sheet.Content>
  );
});
SidebarContent.displayName = "SidebarContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const SidebarPortal = Sheet.Portal;
const SidebarTrigger = Sheet.Trigger;
const SidebarHandle = Sheet.Handle;
const SidebarOutlet = Sheet.Outlet;
const SidebarTitle = Sheet.Title;
const SidebarDescription = Sheet.Description;

export {
  SidebarRoot,
  SidebarPortal,
  SidebarView,
  SidebarBackdrop,
  SidebarContent,
  SidebarTrigger,
  SidebarHandle,
  SidebarOutlet,
  SidebarTitle,
  SidebarDescription,
};
