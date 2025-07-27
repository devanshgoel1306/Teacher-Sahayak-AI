
"use client";

import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createDifferentiatedMaterialsAction } from "./actions";
import type { CreateDifferentiatedMaterialsOutput, CreateDifferentiatedMaterialsInput } from "@/ai/flows/create-differentiated-materials";
import { Loader2, UploadCloud, Download, X, ArrowLeft } from "lucide-react";
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const gradeLevelsOptions = Array.from({ length: 10 }, (_, i) => ({
  id: `Grade ${i + 1}`,
  label: `Grade ${i + 1}`,
}));

const subjectsByGrade: Record<string, string[]> = {
    "Grade 1": ["Language", "Mathematics", "Environmental Science"],
    "Grade 2": ["Language", "Mathematics", "Environmental Science"],
    "Grade 3": ["Language", "Mathematics", "Environmental Science", "Social Studies"],
    "Grade 4": ["Language", "Mathematics", "Environmental Science", "Social Studies"],
    "Grade 5": ["Language", "Mathematics", "Environmental Science", "Social Studies"],
    "Grade 6": ["English", "Hindi", "Mathematics", "Science", "Social Science"],
    "Grade 7": ["English", "Hindi", "Mathematics", "Science", "Social Science"],
    "Grade 8": ["English", "Hindi", "Mathematics", "Science", "Social Science"],
    "Grade 9": ["English", "Hindi", "Mathematics", "Science", "Social Science"],
    "Grade 10": ["English", "Hindi", "Mathematics", "Science", "Social Science"],
};

const lessonsBySubject: Record<string, string[]> = {
    "Mathematics": ["Numbers", "Addition and Subtraction", "Multiplication", "Division", "Geometry", "Measurement"],
    "Science": ["Living and Non-living things", "Plants", "Animals", "Human Body", "Water", "Air"],
    "Social Studies": ["My Family", "Festivals", "Our Helpers", "Our Country"],
    "English": ["Alphabet", "Vowels and Consonants", "Nouns", "Verbs", "Sentences"],
    "Language": ["Alphabet", "Nouns", "Verbs", "Sentences"],
    "Environmental Science": ["Our Environment", "Plants and Animals", "Our Body", "Seasons"],
    "Social Science": ["History", "Geography", "Civics"],
    "Hindi": ["Varnmala", "Sangya", "Kriya", "Vakya"],
};

export default function DifferentiatedWorksheetsPage() {
  const { toast } = useToast();
  
  // State Management
  const [activeMode, setActiveMode] = useState<'image' | 'manual' | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');
  const [numQuestions, setNumQuestions] = useState<number | string>(5);
  
  const [generatedWorksheets, setGeneratedWorksheets] = useState<CreateDifferentiatedMaterialsOutput['worksheets'] | null>(null);
  const [pending, setPending] = useState(false);
  
  const subjectsForGrade = useMemo(() => {
    if (!selectedGrade) return [];
    return subjectsByGrade[selectedGrade] ?? [];
  }, [selectedGrade]);

  const lessonsForSubject = useMemo(() => {
    if (!selectedSubject) return [];
    return lessonsBySubject[selectedSubject] ?? [];
  }, [selectedSubject]);


  const resetAllFields = () => {
    setPreviews([]);
    if (previews.length > 0) {
      previews.forEach(url => URL.revokeObjectURL(url));
    }
    setFiles([]);
    setSelectedGrade('');
    setSelectedSubject('');
    setSelectedLesson('');
    setNumQuestions(5);
    setGeneratedWorksheets(null);
    setPending(false);
  };

  const handleModeSelect = (mode: 'image' | 'manual') => {
    resetAllFields();
    setActiveMode(mode);
  };
  
  const resetMode = () => {
    resetAllFields();
    setActiveMode(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    if (newFiles.length > 0) {
      setFiles(newFiles);
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setPreviews(newPreviews);
    }
  };

  const removeImage = (index: number) => {
    const newFiles = [...files];
    const newPreviews = [...previews];
    
    newFiles.splice(index, 1);
    const urlToRemove = newPreviews.splice(index, 1)[0];
    URL.revokeObjectURL(urlToRemove);

    setFiles(newFiles);
    setPreviews(newPreviews);
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  async function handleSubmit() {
    if (!selectedGrade) {
      toast({ variant: "destructive", title: "Please select a grade level." });
      return;
    }
    
    if (activeMode === 'image' && files.length === 0) {
      toast({ variant: "destructive", title: "Please upload at least one image." });
      return;
    }

    if (activeMode === 'manual' && (!selectedSubject || !selectedLesson)) {
      toast({ variant: "destructive", title: "Please select a subject and a lesson." });
      return;
    }
    
    setPending(true);
    setGeneratedWorksheets(null);
    try {
      const input: CreateDifferentiatedMaterialsInput = {
        gradeLevels: [selectedGrade] as any, // API expects an array
        numberOfQuestionsPerGrade: Number(numQuestions) || 5,
      };

      if (activeMode === 'image') {
        input.photoDataUris = await Promise.all(files.map(file => fileToBase64(file)));
      } else {
        input.subject = selectedSubject;
        input.lessonTopic = selectedLesson;
      }

      const result = await createDifferentiatedMaterialsAction(input);
      if (result.worksheets && result.worksheets.length > 0) {
        setGeneratedWorksheets(result.worksheets);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate worksheets. Please try a clearer photo or a different topic.",
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
  };
  
  const handleDownload = (content: string, grade: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `worksheet-${grade.replace(' ', '-')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast({ title: "Worksheet downloaded as a text file." });
  };

  const isSubmitDisabled = pending || !selectedGrade || (activeMode === 'image' && files.length === 0) || (activeMode === 'manual' && (!selectedLesson || !selectedSubject));
  
  const handleGradeChange = (gradeId: string) => {
    setSelectedGrade(gradeId);
    if (activeMode === 'manual') {
        const currentSubjects = subjectsByGrade[gradeId] ?? [];
        if (!currentSubjects.includes(selectedSubject)) {
            setSelectedSubject('');
            setSelectedLesson('');
        }
    }
  }

  const GradeSelector = () => (
    <div>
        <label className="text-base font-medium">Select Grade Level</label>
        <p className="text-sm text-muted-foreground mb-2">
            Choose the grade to generate worksheets for.
        </p>
        <Select value={selectedGrade} onValueChange={handleGradeChange}>
            <SelectTrigger className="w-full md:w-1/3">
                <SelectValue placeholder="Select a grade..." />
            </SelectTrigger>
            <SelectContent>
                {gradeLevelsOptions.map(grade => <SelectItem key={grade.id} value={grade.id}>{grade.label}</SelectItem>)}
            </SelectContent>
        </Select>
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Differentiated Worksheets"
        description="Generate worksheets from textbook photos or by selecting a topic."
      />
        <Card>
            <CardHeader>
              <CardTitle className="font-headline">Generation Method</CardTitle>
               {activeMode && (
                  <Button variant="ghost" size="sm" className="w-fit p-0 h-auto" onClick={resetMode}>
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Choose a different method
                  </Button>
               )}
            </CardHeader>
            <CardContent className="space-y-4">
              {!activeMode && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <Button variant="outline" className="h-24 text-base" onClick={() => handleModeSelect('image')}>
                    <UploadCloud className="mr-2"/> Upload Textbook Photos
                  </Button>
                  <Button variant="outline" className="h-24 text-base" onClick={() => handleModeSelect('manual')}>
                    Select Topic Manually
                  </Button>
                </div>
              )}

              {activeMode === 'image' && (
                <div className="pt-4 space-y-4">
                  <GradeSelector />
                  <div className={cn(!selectedGrade && "opacity-50 pointer-events-none")}>
                      <label className="text-sm font-medium">Textbook Page Photos</label>
                      <div className="relative flex justify-center items-center w-full h-32 px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-input mt-2">
                        <div className="space-y-1 text-center">
                            <UploadCloud className="w-12 h-12 mx-auto text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">Tap or drag and drop to upload photos</p>
                        </div>
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                          />
                      </div>
                      {previews.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                          {previews.map((src, index) => (
                             <div key={index} className="relative group">
                               <Image src={src} alt={`Preview ${index + 1}`} width={150} height={150} className="w-full h-auto object-contain rounded-md border" />
                               <Button
                                 type="button"
                                 variant="destructive"
                                 size="icon"
                                 className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100"
                                 onClick={() => removeImage(index)}
                                >
                                  <X className="h-4 w-4" />
                                  <span className="sr-only">Remove image</span>
                                </Button>
                             </div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              )}
              
              {activeMode === 'manual' && (
                <div className="pt-4 space-y-4">
                  <GradeSelector />
                  <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", !selectedGrade && "opacity-50 pointer-events-none")}>
                    <div>
                        <label className="text-sm font-medium">Subject</label>
                        <Select 
                          onValueChange={(value) => {
                              setSelectedSubject(value);
                              setSelectedLesson('');
                          }} 
                          value={selectedSubject} 
                          disabled={!selectedGrade}
                        >
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjectsForGrade.map(subject => <SelectItem key={subject} value={subject}>{subject}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Lesson / Topic</label>
                        <Select onValueChange={setSelectedLesson} value={selectedLesson} disabled={!selectedSubject}>
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a lesson" />
                        </SelectTrigger>
                        <SelectContent>
                            {lessonsForSubject.map(lesson => <SelectItem key={lesson} value={lesson}>{lesson}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}
                
              {activeMode && (
                  <div className="pt-4 max-w-xs">
                      <label className="text-sm font-medium">Questions per Worksheet (Optional)</label>
                      <Input type="number" placeholder="e.g., 5" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} className="mt-2"/>
                  </div>
              )}
            </CardContent>
            {activeMode && (
                <CardFooter>
                  <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
                    {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate Worksheet
                  </Button>
                </CardFooter>
            )}
        </Card>
      
       {pending && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span>Generating Worksheet...</span>
            </CardTitle>
            <CardDescription>Sahayak is analyzing the page and creating materials. This may take a moment.</CardDescription>
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

      {generatedWorksheets && (
        <Card>
           <CardHeader>
            <CardTitle className="font-headline">Generated Worksheet</CardTitle>
            <CardDescription>Here is the differentiated material for your selected grade. You can view, download, or save it.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={generatedWorksheets.length > 0 ? generatedWorksheets[0].gradeLevel : undefined}>
              <TabsList>
                {generatedWorksheets.map(ws => (
                   <TabsTrigger key={ws.gradeLevel} value={ws.gradeLevel}>{ws.gradeLevel}</TabsTrigger>
                ))}
              </TabsList>
              {generatedWorksheets.map(ws => (
                <TabsContent key={ws.gradeLevel} value={ws.gradeLevel} className="mt-4">
                   <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold font-headline mb-2">Worksheet</h3>
                      <pre className="whitespace-pre-wrap font-body text-base leading-relaxed bg-muted p-4 rounded-md">{ws.worksheetContent}</pre>
                    </div>
                     <div>
                      <h3 className="text-lg font-semibold font-headline mb-2">Answer Key</h3>
                      <pre className="whitespace-pre-wrap font-body text-base leading-relaxed bg-muted p-4 rounded-md">{ws.answerKey}</pre>
                    </div>
                     <div className="flex gap-2 pt-4">
                        <Button variant="outline" onClick={() => handleDownload(ws.worksheetContent + '\\n\\n---\\n\\n' + ws.answerKey, ws.gradeLevel)}><Download className="mr-2" /> Download</Button>
                     </div>
                   </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
