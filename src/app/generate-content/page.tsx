

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { generateLocalContentAction } from "./actions";
import { Loader2, Copy, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const languages = ["Marathi", "Hindi", "Kannada", "Telugu", "English", "Bengali"];
const contentTypes = ["Story", "Poem", "Explanation", "Dialogue"];

const generateContentSchema = z.object({
  topic: z.string().min(10, { message: "Please describe the content you need in more detail." }),
  language: z.string().min(1, { message: "Please select a language." }),
  contentType: z.string().min(1, { message: "Please select a content type." }),
  gradeLevel: z.string().optional(),
});

type GenerateContentFormValues = z.infer<typeof generateContentSchema>;

export default function GenerateContentPage() {
  const { toast } = useToast();
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const form = useForm<GenerateContentFormValues>({
    resolver: zodResolver(generateContentSchema),
    defaultValues: {
      topic: "",
      language: "English",
      contentType: "Story",
      gradeLevel: "4",
    },
  });

  async function onSubmit(data: GenerateContentFormValues) {
    setPending(true);
    setGeneratedContent(null);
    try {
      const result = await generateLocalContentAction(data);
      if (result.content) {
        setGeneratedContent(result.content);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate content. Please try again.",
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
    if (generatedContent) {
      if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = generatedContent;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          toast({ title: "Content copied to clipboard!" });
        } catch (err) {
          toast({ variant: "destructive", title: "Failed to copy" });
        }
        document.body.removeChild(textArea);
        return;
      }
      navigator.clipboard.writeText(generatedContent).then(function() {
        toast({ title: "Content copied to clipboard!" });
      }, function(err) {
        toast({ variant: "destructive", title: "Failed to copy" });
      });
    }
  };
  
  const handleShare = () => {
    if (generatedContent) {
      navigator.share({
        title: 'Sahayak Generated Content',
        text: generatedContent,
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
        title="Generate Hyper-Local Content"
        description="Create culturally relevant stories, poems, and explanations for your students."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Content Request</CardTitle>
              <CardDescription>Tell Sahayak what content you need. Be as specific as possible.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell Sahayak what content you need...</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder={`e.g., "Explain the water cycle"`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Language</FormLabel>
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
                <FormField
                  control={form.control}
                  name="contentType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a content type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contentTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Grade (Optional)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 4" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={pending}>
                {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate
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
              <span>Generating...</span>
            </CardTitle>
            <CardDescription>Sahayak is creating your content. This may take a few seconds.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
               <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
               <div className="h-4 bg-muted rounded animate-pulse w-5/6"></div>
               <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
               <div className="h-4 bg-muted rounded animate-pulse w-4/6"></div>
            </div>
          </CardContent>
        </Card>
      )}

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Generated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap font-body text-base leading-relaxed bg-muted p-4 rounded-md">{generatedContent}</pre>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline" onClick={handleCopy}><Copy className="mr-2" /> Copy Text</Button>
            <Button variant="outline" onClick={handleShare}><Share2 className="mr-2" /> Share</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
