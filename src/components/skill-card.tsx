
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function SkillCard({ title, icon, description }: SkillCardProps) {
  return (
    <Card className="hover:shadow-md transition-all h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2 text-primary">{icon}</div>
          <h3 className="font-semibold text-lg">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
