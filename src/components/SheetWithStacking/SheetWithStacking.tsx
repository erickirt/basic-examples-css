"use client";
import React, { createContext, useContext } from "react";
import {
  Sheet,
  SheetStack,
  SheetViewProps,
  useClientMediaQuery,
  VisuallyHidden,
  type SheetContentProps,
} from "@silk-hq/components";
import "./SheetWithStacking.css";

// ============================================================================
// Context
// ============================================================================

type SheetWithStackingContextValue = {
  travelStatus: string;
  setTravelStatus: (status: string) => void;
  contentPlacement: "left" | "right" | "top" | "bottom";
};

const SheetWithStackingContext =
  createContext<SheetWithStackingContextValue | null>(null);

// ============================================================================
// Stack
// ============================================================================

const SheetWithStackingStack = React.forwardRef<
  React.ElementRef<typeof SheetStack.Root>,
  React.ComponentPropsWithoutRef<typeof SheetStack.Root>
>((props, ref) => {
  return <SheetStack.Root {...props} ref={ref} />;
});
SheetWithStackingStack.displayName = "SheetWithStackingStack";

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type SheetWithStackingRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const SheetWithStackingRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  SheetWithStackingRootProps
>((props, ref) => {
  const [travelStatus, setTravelStatus] = React.useState("idleOutside");
  const largeViewport = useClientMediaQuery("(min-width: 700px)");
  const contentPlacement = largeViewport ? "right" : "bottom";

  return (
    <SheetWithStackingContext.Provider
      value={{
        travelStatus,
        setTravelStatus,
        contentPlacement,
      }}
    >
      <Sheet.Root
        license="commercial"
        forComponent="closest"
        {...props}
        ref={ref}
      />
    </SheetWithStackingContext.Provider>
  );
});
SheetWithStackingRoot.displayName = "SheetWithStackingRoot";

// ============================================================================
// View
// ============================================================================

const SheetWithStackingView = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, children, ...props }, ref) => {
  const context = useContext(SheetWithStackingContext);
  if (!context)
    throw new Error(
      "SheetWithStackingView must be used within a SheetWithStackingContext.Provider"
    );
  const { setTravelStatus, contentPlacement } = context;

  return (
    <Sheet.View
      className={`SheetWithStacking-view contentPlacement-${contentPlacement} ${
        className ?? ""
      }`}
      contentPlacement={contentPlacement}
      nativeEdgeSwipePrevention={true}
      onTravelStatusChange={setTravelStatus}
      {...props}
      ref={ref}
    >
      {children}
    </Sheet.View>
  );
});
SheetWithStackingView.displayName = "SheetWithStackingView";

// ============================================================================
// Backdrop
// ============================================================================

const SheetWithStackingBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      travelAnimation={{ opacity: [0, 0.33] }}
      themeColorDimming="auto"
      className={className}
      {...props}
      ref={ref}
    />
  );
});
SheetWithStackingBackdrop.displayName = "SheetWithStackingBackdrop";

// ============================================================================
// Content
// ============================================================================

const SheetWithStackingContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  const context = useContext(SheetWithStackingContext);
  if (!context)
    throw new Error(
      "SheetWithStackingContent must be used within a SheetWithStackingContext.Provider"
    );
  const { contentPlacement } = context;

  const stackingAnimation: SheetContentProps["stackingAnimation"] =
    contentPlacement === "right"
      ? {
          translateX: ({ progress }: { progress: number }) =>
            progress <= 1
              ? progress * -10 + "px"
              : // prettier-ignore
                "calc(-12.5px + 2.5px *" + progress + ")",
          scale: [1, 0.933],
          transformOrigin: "0 50%",
        }
      : {
          translateY: ({ progress }: { progress: number }) =>
            progress <= 1
              ? progress * -10 + "px"
              : // prettier-ignore
                "calc(-12.5px + 2.5px *" + progress + ")",
          scale: [1, 0.933],
          transformOrigin: "50% 0",
        };

  return (
    <Sheet.Content
      className={`SheetWithStacking-content contentPlacement-${contentPlacement} ${
        className ?? ""
      }`}
      stackingAnimation={stackingAnimation}
      {...props}
      ref={ref}
    >
      <div className="SheetWithStacking-innerContent">{children}</div>
    </Sheet.Content>
  );
});
SheetWithStackingContent.displayName = "SheetWithStackingContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const SheetWithStackingPortal = Sheet.Portal;
const SheetWithStackingTrigger = Sheet.Trigger;
const SheetWithStackingTitle = Sheet.Title;
const SheetWithStackingDescription = Sheet.Description;

export {
  SheetWithStackingStack,
  SheetWithStackingRoot,
  SheetWithStackingView,
  SheetWithStackingPortal,
  SheetWithStackingBackdrop,
  SheetWithStackingContent,
  SheetWithStackingTrigger,
  SheetWithStackingTitle,
  SheetWithStackingDescription,
};
