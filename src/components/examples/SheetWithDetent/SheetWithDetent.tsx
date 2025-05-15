"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Sheet, Scroll, type SheetViewProps } from "@silk-hq/components";
import "./SheetWithDetent.css";

// ============================================================================
// Context
// ============================================================================

type SheetWithDetentContextValue = {
  reachedLastDetent: boolean;
  setReachedLastDetent: React.Dispatch<React.SetStateAction<boolean>>;
  viewRef: React.RefObject<HTMLElement>;
};

const SheetWithDetentContext =
  createContext<SheetWithDetentContextValue | null>(null);

const useSheetWithDetentContext = () => {
  const context = useContext(SheetWithDetentContext);
  if (!context) {
    throw new Error(
      "useSheetWithDetentContext must be used within a SheetWithDetentContextProvider"
    );
  }
  return context;
};

// ============================================================================
// Root
// ============================================================================

type SheetRootProps = React.ComponentPropsWithoutRef<typeof Sheet.Root>;
type SheetWithDetentRootProps = Omit<SheetRootProps, "license"> & {
  license?: SheetRootProps["license"];
};

const SheetWithDetentRoot = React.forwardRef<
  React.ElementRef<typeof Sheet.Root>,
  SheetWithDetentRootProps
>((props, ref) => {
  const [reachedLastDetent, setReachedLastDetent] = useState(false);
  const viewRef = useRef<HTMLElement>(null);

  return (
    <SheetWithDetentContext.Provider
      value={{
        reachedLastDetent,
        setReachedLastDetent,
        viewRef,
      }}
    >
      <Sheet.Root license="commercial" {...props} ref={ref} />
    </SheetWithDetentContext.Provider>
  );
});
SheetWithDetentRoot.displayName = "SheetWithDetentRoot";

// ============================================================================
// View
// ============================================================================

const SheetWithDetentView = React.forwardRef<
  React.ElementRef<typeof Sheet.View>,
  React.ComponentPropsWithoutRef<typeof Sheet.View>
>(({ className, children, ...props }, ref) => {
  const { reachedLastDetent, setReachedLastDetent, viewRef } =
    useSheetWithDetentContext();

  const travelHandler = useMemo(() => {
    if (!reachedLastDetent) return undefined;

    const handler: SheetViewProps["onTravel"] = ({ progress }) => {
      if (!viewRef.current) return;

      // Dismiss the on-screen keyboard.
      if (progress < 0.999) {
        viewRef.current.focus();
      }
    };
    return handler;
  }, [reachedLastDetent, viewRef]);

  const assignRef = React.useCallback((node: HTMLElement | null) => {
    // @ts-ignore - intentionally breaking the readonly nature for compatibility
    viewRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref !== null && ref !== undefined && node !== null) {
      ref.current = node;
    }
  }, []);

  return (
    <Sheet.View
      className={`SheetWithDetent-view ${className ?? ""}`.trim()}
      detents={!reachedLastDetent ? "66vh" : undefined}
      swipeOvershoot={false}
      nativeEdgeSwipePrevention={true}
      onTravelStatusChange={(travelStatus) => {
        if (travelStatus === "idleOutside") setReachedLastDetent(false);
      }}
      onTravelRangeChange={(range) => {
        if (range.start === 2) setReachedLastDetent(true);
      }}
      onTravel={travelHandler}
      ref={assignRef}
      {...props}
    >
      {children}
    </Sheet.View>
  );
});
SheetWithDetentView.displayName = "SheetWithDetentView";

// ============================================================================
// Backdrop
// ============================================================================

const SheetWithDetentBackdrop = React.forwardRef<
  React.ElementRef<typeof Sheet.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Sheet.Backdrop>
>(({ className, ...props }, ref) => {
  return (
    <Sheet.Backdrop
      className={`SheetWithDetent-backdrop ${className ?? ""}`.trim()}
      themeColorDimming="auto"
      {...props}
      ref={ref}
    />
  );
});
SheetWithDetentBackdrop.displayName = "SheetWithDetentBackdrop";

// ============================================================================
// Content
// ============================================================================

const SheetWithDetentContent = React.forwardRef<
  React.ElementRef<typeof Sheet.Content>,
  React.ComponentPropsWithoutRef<typeof Sheet.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Sheet.Content
      className={`SheetWithDetent-content ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      {children}
    </Sheet.Content>
  );
});
SheetWithDetentContent.displayName = "SheetWithDetentContent";

// ============================================================================
// Scroll
// ============================================================================

const SheetWithDetentScrollRoot = React.forwardRef<
  React.ElementRef<typeof Scroll.Root>,
  React.ComponentPropsWithoutRef<typeof Scroll.Root>
>((props, ref) => {
  return <Scroll.Root {...props} ref={ref} />;
});
SheetWithDetentScrollRoot.displayName = "SheetWithDetentScrollRoot";

const SheetWithDetentScrollView = React.forwardRef<
  React.ElementRef<typeof Scroll.View>,
  React.ComponentPropsWithoutRef<typeof Scroll.View>
>(({ className, children, ...props }, ref) => {
  const { reachedLastDetent } = useSheetWithDetentContext();

  return (
    <Scroll.View
      className={`SheetWithDetent-scrollView ${className ?? ""}`.trim()}
      scrollGestureTrap={{ yEnd: true }}
      scrollGesture={!reachedLastDetent ? false : "auto"}
      safeArea="layout-viewport"
      onScrollStart={{
        dismissKeyboard: true,
      }}
      {...props}
      ref={ref}
    >
      {children}
    </Scroll.View>
  );
});
SheetWithDetentScrollView.displayName = "SheetWithDetentScrollView";

const SheetWithDetentScrollContent = React.forwardRef<
  React.ElementRef<typeof Scroll.Content>,
  React.ComponentPropsWithoutRef<typeof Scroll.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <Scroll.Content
      className={`SheetWithDetent-scrollContent ${className ?? ""}`.trim()}
      {...props}
      ref={ref}
    >
      {children}
    </Scroll.Content>
  );
});
SheetWithDetentScrollContent.displayName = "SheetWithDetentScrollContent";

// ============================================================================
// Unchanged Components
// ============================================================================

const SheetWithDetentPortal = Sheet.Portal;
const SheetWithDetentTrigger = Sheet.Trigger;
const SheetWithDetentHandle = Sheet.Handle;
const SheetWithDetentTitle = Sheet.Title;
const SheetWithDetentDescription = Sheet.Description;

export {
  SheetWithDetentRoot,
  SheetWithDetentPortal,
  SheetWithDetentView,
  SheetWithDetentBackdrop,
  SheetWithDetentContent,
  SheetWithDetentScrollRoot,
  SheetWithDetentScrollView,
  SheetWithDetentScrollContent,
  SheetWithDetentTrigger,
  SheetWithDetentHandle,
  SheetWithDetentTitle,
  SheetWithDetentDescription,
  useSheetWithDetentContext,
};
