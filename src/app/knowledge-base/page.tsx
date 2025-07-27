
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { knowledgeBaseAction } from "./actions";
import { Loader2, Copy, Share2 } from "lucide-react";

const languages = ["Hindi", "Marathi", "Kannada", "Telugu", "English", "Bengali"];

const knowledgeBaseSchema = z.object({
  query: z.string().min(5, { message: "Please ask a clear question." }),
  language: z.string().min(1, { message: "Please select a language." }),
});

type KnowledgeBaseFormValues = z.infer<typeof knowledgeBaseSchema>;

export default function KnowledgeBasePage() {
  const { toast } = useToast();
  const [explanation, setExplanation] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<KnowledgeBaseFormValues>({
    resolver: zodResolver(knowledgeBaseSchema),
    defaultValues: {
      query: "",
      language: "English",
    },
  });

  async function onSubmit(data: KnowledgeBaseFormValues) {
    setPending(true);
    setExplanation(null);
    try {
      const result = await knowledgeBaseAction(data);
      if (result.content) {
        setExplanation(result.content);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to get an explanation. Please try again.",
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

  const handleCopy = () => {
    if (explanation) {
      navigator.clipboard.writeText(explanation);
      toast({ title: "Explanation copied to clipboard!" });
    }
  };
  
  const handleShare = () => {
    if (explanation) {
      navigator.share({
        title: 'Sahayak Knowledge Base Explanation',
        text: explanation,
      }).catch(() => toast({
          variant: "destructive",
          title: "Sharing not supported",
          description: "Your browser does not support the Web Share API.",
        }));
    }
  };


  return (
    <div className="space-y-6">
      <PageHeader
        title="Instant Knowledge Base"
        description="Get simple, accurate explanations with analogies for complex student questions."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Ask Sahayak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ask a question...</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder={`e.g., "Why is the sky blue?" or "How do plants make their food?"`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="max-w-xs">
                    <FormLabel>Response Language</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map(lang => <SelectItem key={lang} value={lang}>{lang}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={pending}>
                {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Explanation
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
              <span>Sahayak is thinking...</span>
            </CardTitle>
            <CardDescription>Finding the best way to explain this concept.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
               <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
               <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
               <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
            </div>
          </CardContent>
        </Card>
      )}

      {explanation && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap font-body text-base leading-relaxed bg-muted p-4 rounded-md">{explanation}</pre>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" onClick={handleCopy}><Copy className="mr-2" /> Copy Explanation</Button>
            <Button variant="outline" onClick={handleShare}><Share2 className="mr-2" /> Share</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
