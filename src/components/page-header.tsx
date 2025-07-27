"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  backHref?: string;
}

export function PageHeader({ title, description, backHref = "/" }: PageHeaderProps) {
  return (
    <div className="flex items-start mb-6">
      <Button variant="ghost" size="icon" className="mr-2" asChild>
        <Link href={backHref}>
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </Button>
      <div>
        <h1 className="text-2xl font-bold tracking-tight font-headline">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
