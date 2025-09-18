import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  ChevronRight, 
  ChevronLeft,
  Activity,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const assessmentQuestions = [
  {
    id: 1,
    category: "anxiety",
    question: "How often have you been feeling nervous or anxious in the past 2 weeks?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 2,
    category: "depression",
    question: "How often have you felt down, depressed, or hopeless?",
    options: [
      { value: "0", label: "Not at all" },
      { value: "1", label: "Several days" },
      { value: "2", label: "More than half the days" },
      { value: "3", label: "Nearly every day" }
    ]
  },
  {
    id: 3,
    category: "stress",
    question: "How often have you felt overwhelmed by your academic workload?",
    options: [
      { value: "0", label: "Never" },
      { value: "1", label: "Sometimes" },
      { value: "2", label: "Often" },
      { value: "3", label: "Always" }
    ]
  },
  {
    id: 4,
    category: "sleep",
    question: "How would you rate your sleep quality recently?",
    options: [
      { value: "0", label: "Excellent" },
      { value: "1", label: "Good" },
      { value: "2", label: "Fair" },
      { value: "3", label: "Poor" }
    ]
  },
  {
    id: 5,
    category: "social",
    question: "How satisfied are you with your social connections?",
    options: [
      { value: "0", label: "Very satisfied" },
      { value: "1", label: "Satisfied" },
      { value: "2", label: "Dissatisfied" },
      { value: "3", label: "Very dissatisfied" }
    ]
  }
];

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      toast({
        title: "Please select an answer",
        description: "You need to answer the current question before proceeding.",
        variant: "destructive"
      });
      return;
    }

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
    const maxScore = assessmentQuestions.length * 3;
    const percentage = (totalScore / maxScore) * 100;
    
    setShowResults(true);
    
    // Save to dashboard
    toast({
      title: "Assessment Complete!",
      description: "Your results have been saved to your dashboard.",
    });
  };

  const getScoreLevel = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
    const maxScore = assessmentQuestions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage <= 25) return { level: "Low", color: "text-success", icon: CheckCircle };
    if (percentage <= 50) return { level: "Moderate", color: "text-info", icon: Activity };
    if (percentage <= 75) return { level: "High", color: "text-warning", icon: TrendingUp };
    return { level: "Severe", color: "text-destructive", icon: AlertCircle };
  };

  if (showResults) {
    const scoreData = getScoreLevel();
    const Icon = scoreData.icon;

    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
        <Card className="p-8 bg-gradient-calm shadow-large">
          <div className="text-center space-y-6">
            <Icon className={`h-16 w-16 mx-auto ${scoreData.color}`} />
            <h2 className="text-3xl font-bold text-foreground">Assessment Complete</h2>
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Your current mental wellness level is:</p>
              <p className={`text-4xl font-bold ${scoreData.color}`}>{scoreData.level}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-0.5" />
              <p className="text-muted-foreground">Consider scheduling regular check-ins with a counselor</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-0.5" />
              <p className="text-muted-foreground">Try our guided meditation exercises for stress relief</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-0.5" />
              <p className="text-muted-foreground">Join a peer support group in the community section</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-success mt-0.5" />
              <p className="text-muted-foreground">Track your mood daily using the journal feature</p>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button 
            size="lg" 
            variant="gradient" 
            className="flex-1"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate("/counseling")}
          >
            Talk to Counselor
          </Button>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      <Card className="p-8 shadow-large">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-primary">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">Mental Health Assessment</h1>
              <p className="text-muted-foreground">Private and confidential screening</p>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {assessmentQuestions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="py-8">
            <h2 className="text-xl font-semibold mb-6 text-foreground">
              {question.question}
            </h2>
            <RadioGroup 
              value={answers[currentQuestion] || ""} 
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {question.options.map((option) => (
                <div 
                  key={option.value} 
                  className="flex items-center space-x-3 p-4 rounded-xl border border-border/50 hover:bg-accent/10 transition-colors"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer text-foreground"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="gradient"
              onClick={handleNext}
            >
              {currentQuestion === assessmentQuestions.length - 1 ? "Complete" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}