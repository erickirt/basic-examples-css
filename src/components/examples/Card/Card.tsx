"use client";
import React from "react";
import { Sheet } from "@silk-hq/components";

import "./Card.css";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type CardRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const CardRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  CardRootProps
>((props, ref) => {
  return <Sheet.Root license="commercial" {...props} ref={ref}></Sheet.Root>;
});
CardRoot.displayName = "CardRoot";

// ============================================================================
// View
// ============================================================================

const CardView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.View
      className={`Card-view ${className ?? ""}`.trim()}
      contentPlacement="center"
      tracks="top"
      enteringAnimationSettings={{
        easing: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1,
      }}
      nativeEdgeSwipePrevention={true}
      {...props}
      ref={ref}
    />
  );
});
CardView.displayName = "CardView";

// ============================================================================
// Backdrop
// ============================================================================

const CardBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`Card-backdrop ${className ?? ""}`.trim()}
      travelAnimation={{
        opacity: ({ progress }) => Math.min(0.4 * progress, 0.4),
      }}
      themeColorDimming="auto"
      {...props}
      ref={ref}
    />
  );
});
CardBackdrop.displayName = "CardBackdrop";

// ============================================================================
// Content
// ============================================================================

const CardContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`Card-content ${className ?? ""}`.trim()}
      travelAnimation={{
        scale: [0.8, 1],
      }}
      {...props}
      ref={ref}
    />
  );
});
CardContent.displayName = "CardContent";

// ============================================================================
// BleedingBackground
// ============================================================================

const CardBleedingBackground = React.forwardRef<
  React.ElementRef<typeof Sheet.BleedingBackground>,
  React.ComponentPropsWithoutRef<typeof Sheet.BleedingBackground>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.BleedingBackground
      className={`Card-bleedingBackground ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    />
  );
});
CardBleedingBackground.displayName = "CardBleedingBackground";

// ============================================================================
// Unchanged Components
// ============================================================================

const CardPortal = Sheet.Portal;
const CardTrigger = Sheet.Trigger;
const CardHandle = Sheet.Handle;
const CardOutlet = Sheet.Outlet;
const CardTitle = Sheet.Title;
const CardDescription = Sheet.Description;

export {
  CardRoot,
  CardPortal,
  CardView,
  CardBackdrop,
  CardContent,
  CardBleedingBackground,
  CardTrigger,
  CardHandle,
  CardOutlet,
  CardTitle,
  CardDescription,
};
