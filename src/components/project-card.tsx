
import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export function ProjectCard({ title, description, imageUrl, tags, liveUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border bg-card h-full flex flex-col hover:shadow-md transition-all">
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t pt-4">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={liveUrl} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={repoUrl} target="_blank" rel="noreferrer">
              Code <Github className="ml-1 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
