"use client";
import {
  ToastRoot,
  ToastPortal,
  ToastView,
  ToastContent,
  ToastTrigger,
  ToastTitle,
  ToastDescription,
} from "./Toast";
import "./ExampleToast.css";

const ExampleToast = () => {
  return (
    <ToastRoot>
      <ToastTrigger className="ExampleToast-trigger">Toast</ToastTrigger>
      <ToastPortal>
        <ToastView>
          <ToastContent>
            <div className="ExampleToast-root">
              <div className="ExampleToast-illustration" />
              <ToastTitle className="ExampleToast-title">
                Message from Luca
              </ToastTitle>
              <ToastDescription className="ExampleToast-description">
                How about Japanese? I'm good to meet up at 8.
              </ToastDescription>
            </div>
          </ToastContent>
        </ToastView>
      </ToastPortal>
    </ToastRoot>
  );
};

export { ExampleToast };
