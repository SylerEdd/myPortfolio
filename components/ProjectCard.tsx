import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  type: string;
  technologies: string[];
  description: string;
  highlights?: string[];
  link: string;
}

export function ProjectCard({
  title,
  type,
  technologies,
  description,
  highlights,
  link,
}: ProjectCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg">{title}</h3>
          <Badge variant="secondary" className="ml-2">
            {type}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <p className="text-gray-600  mb-3">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-600  space-y-1">
            {highlights.map((hightlight, index) => (
              <li key={index}>{hightlight}</li>
            ))}
          </ul>
        )}
      </a>
    </Card>
  );
}
