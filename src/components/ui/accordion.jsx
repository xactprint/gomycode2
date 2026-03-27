import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

// Since we are mocking shadcn/ui without full radix-ui primitives for simplicity in this demo,
// we will build a simpler Accordion component using useState,
// but sticking to the visual style of shadcn/ui.

function Accordion({ className, children, ...props }) {
  // Simple state management for demo purposes
  // Ideally this should support multiple open items or single open item based on props

  // We'll use a Context to share state
  return (
    <div className={cn("space-y-1", className)} {...props}>
      {children}
    </div>
  );
}

const AccordionItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("border-b", className)} {...props}>
      {children}
    </div>
  ),
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, onClick, isOpen, ...props }, ref) => (
    <div className="flex">
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          )}
        />
      </button>
    </div>
  ),
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ className, children, isOpen, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        isOpen ? "block" : "hidden",
        className,
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  ),
);
AccordionContent.displayName = "AccordionContent";

// Wrapper to make it easy to use
function SimpleAccordion({ items }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent isOpen={openIndex === index}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  SimpleAccordion,
};
