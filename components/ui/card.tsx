import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

const Card = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children?: ReactNode }) => (
  <div
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children?: ReactNode }) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h3"> & { children?: ReactNode }) => (
  <h3
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"p"> & { children?: ReactNode }) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  >
    {children}
  </p>
);

const CardContent = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children?: ReactNode }) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
);

const CardFooter = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children?: ReactNode }) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  >
    {children}
  </div>
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
