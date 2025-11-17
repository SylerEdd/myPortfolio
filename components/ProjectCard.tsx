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
  image: string;
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
    <Card className="p-6 bg-slate-800/80 border-purple-800/30 hover:border-purple-500/50 transition-colors">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-white">{title}</h3>
          <Badge
            variant="secondary"
            className="ml-2 bg-purple-900/50 text-purple-200 border-purple-700/50"
          >
            {type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-purple-400 text-purple-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <p className="text-gray-300 mb-3">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        )}
      </a>
    </Card>
  );
}
