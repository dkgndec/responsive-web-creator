import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, X, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const { toast } = useToast();

  const getPageContent = () => {
    const mainContent = document.querySelector('main')?.innerText 
      || document.body.innerText;
    return mainContent.slice(0, 10000);
  };

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);

    try {
      const content = getPageContent();
      
      const { data, error } = await supabase.functions.invoke('summarize', {
        body: { 
          content,
          url: window.location.href 
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setSummary(data.summary);
    } catch (error) {
      console.error('Error summarizing:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to summarize page',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 md:w-96 max-h-[70vh] shadow-xl z-50 flex flex-col overflow-hidden">
          <div className="bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <h3 className="font-semibold">AI Page Summary</h3>
            </div>
            <p className="text-sm opacity-90 mt-1">
              Get a quick summary of this page
            </p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto min-h-[200px]">
            {!summary && !isLoading && (
              <div className="text-center text-muted-foreground py-8">
                <Sparkles className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Click the button below to summarize this page</p>
              </div>
            )}

            {isLoading && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Analyzing page...</span>
              </div>
            )}

            {summary && (
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {summary}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t">
            <Button 
              onClick={handleSummarize} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Summarizing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Summarize Page
                </>
              )}
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
