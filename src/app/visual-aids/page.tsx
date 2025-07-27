
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { generateVisualAidAction } from "./actions";
import { Loader2, Download, Copy } from "lucide-react";
import Image from "next/image";
import type { DesignVisualAidOutput } from "@/ai/flows/design-visual-aids-flow";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const visualAidSchema = z.object({
  description: z.string().min(10, { message: "Please describe the visual aid in more detail." }),
  gradeLevel: z.string().optional(),
});

type VisualAidFormValues = z.infer<typeof visualAidSchema>;

type GeneratedContent = DesignVisualAidOutput['visualAid'] | null;

const GeneratedTable = ({ data }: { data: Extract<GeneratedContent, { type: 'table' }>['data'] | null }) => {
  if (!data) return null;
  return (
    <Table>
      {data.caption && <TableCaption>{data.caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {data.headers.map((header, i) => (
            <TableHead key={i}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.rows.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => (
              <TableCell key={j}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};


export default function VisualAidsPage() {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<VisualAidFormValues>({
    resolver: zodResolver(visualAidSchema),
    defaultValues: {
      description: "",
      gradeLevel: "5",
    },
  });

  async function onSubmit(data: VisualAidFormValues) {
    setPending(true);
    setGeneratedContent(null);
    try {
      const result = await generateVisualAidAction(data);
      if (result?.visualAid) {
        setGeneratedContent(result.visualAid);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate visual aid. Please try refining your description.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
      });
    } finally {
      setPending(false);
    }
  }

  const handleDownload = () => {
    if (generatedContent?.type === 'image' && generatedContent.data) {
      const link = document.createElement('a');
      link.href = generatedContent.data;
      link.download = `sahayak-visual-aid.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopy = () => {
    let textToCopy = '';
    if (generatedContent?.type === 'text') {
      textToCopy = generatedContent.data;
    } else if (generatedContent?.type === 'table' && generatedContent.data) {
      const { headers, rows } = generatedContent.data;
      textToCopy = headers.join('\t') + '\n';
      textToCopy += rows.map(row => row.join('\t')).join('\n');
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      toast({ title: "Content copied to clipboard!" });
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Design Visual Aids"
        description="Generate simple line drawings, charts, and tables to draw on your blackboard."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Visual Aid Request</CardTitle>
              <CardDescription>Describe what you need. The simpler the description, the better for blackboard drawings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe the visual aid you need...</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder={`e.g., "simple line drawing of the water cycle"\n"chart showing stages of plant growth"\n"table comparing solids, liquids, and gases"`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gradeLevel"
                render={({ field }) => (
                  <FormItem className="max-w-xs">
                    <FormLabel>Target Grade (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={pending}>
                {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate Visual
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>

      {pending && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span>Generating Visual Aid...</span>
            </CardTitle>
            <CardDescription>Sahayak is sketching your idea. This can take a moment.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="w-full aspect-video bg-muted rounded-lg animate-pulse"></div>
          </CardContent>
        </Card>
      )}

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generated Visual Aid</CardTitle>
          </CardHeader>
          <CardContent>
            {generatedContent.type === 'image' && generatedContent.data && (
               <Image
                src={generatedContent.data}
                alt="Generated visual aid"
                width={512}
                height={512}
                className="rounded-lg border bg-white w-full h-auto object-contain"
              />
            )}
            {generatedContent.type === 'table' && generatedContent.data && (
              <GeneratedTable data={generatedContent.data} />
            )}
            {generatedContent.type === 'text' && generatedContent.data && (
               <pre className="whitespace-pre-wrap font-body text-base leading-relaxed bg-muted p-4 rounded-md">{generatedContent.data}</pre>
            )}
          </CardContent>
          <CardFooter className="gap-2">
            {generatedContent.type === 'image' && (
              <Button variant="outline" onClick={handleDownload}><Download className="mr-2" /> Download Image</Button>
            )}
             {generatedContent.type !== 'image' && (
              <Button variant="outline" onClick={handleCopy}><Copy className="mr-2" /> Copy Content</Button>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
