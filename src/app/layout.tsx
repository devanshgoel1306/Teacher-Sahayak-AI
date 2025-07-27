
import type { Metadata } from 'next';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Home, BookCopy, BrainCircuit, Image, Gamepad2, Users, Settings, PanelLeftOpen } from 'lucide-react';
import Link from 'next/link';
import { Toaster } from "@/components/ui/toaster";
import { SahayakLogo } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Sahayak AI',
  description: 'AI Teaching Assistant for educators in India.',
};

const navItems = [
  { href: "/", icon: <Home />, label: "Dashboard" },
  { href: "/generate-content", icon: <BookCopy />, label: "Generate Content" },
  { href: "/worksheets", icon: <Users />, label: "Worksheets" },
  { href: "/knowledge-base", icon: <BrainCircuit />, label: "Knowledge Base" },
  { href: "/visual-aids", icon: <Image />, label: "Visual Aids" },
  { href: "/games", icon: <Gamepad2 />, label: "Educational Games" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 p-2">
                <SahayakLogo className="w-8 h-8" />
                <h1 className="text-xl font-bold font-headline">Sahayak</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                   <SidebarMenuButton asChild>
                    <button suppressHydrationWarning>
                      <Settings />
                      <span>Settings</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="flex items-center justify-between p-2 border-b md:hidden">
               <div className="flex items-center gap-2">
                 <SahayakLogo className="w-6 h-6" />
                 <h1 className="text-lg font-bold font-headline">Sahayak</h1>
               </div>
               <SidebarTrigger variant="ghost" size="icon">
                  <PanelLeftOpen />
              </SidebarTrigger>
            </header>
            <main className="flex-1 p-4 md:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
