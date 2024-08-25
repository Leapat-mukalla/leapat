import fm from 'gray-matter';
import snarkdown from 'snarkdown';
import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

export type ProjectMatter = {
  data: {
    title: string;
    image: string;
    date: string;
    media: string[];
    completed?: boolean;
  };
  filePath: string;
  readingTime: { text: string; minutes: number; time: number; words: number };
  content: string;
};

export async function getProjects() {
  const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
  const files = fs.readdirSync(directoryPath);

  const projects = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = fm(fileContent);

    if (!data.date) {
      throw new Error(`${data.title} should have date`);
    }

    projects.push({
      data,
      filePath: file.replace('.md', ''),
      readingTime: readingTime(content),
      content,
    } as ProjectMatter);
  }

  // Sort projects by creation date in descending order
  projects.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  return projects;
}

export default async function getProject(file: string) {
  const fs = require('fs');
  const path = require('path');

  const directoryPath = path.join(process.cwd(), 'src', 'content', 'projects');
  const filePath = path.join(directoryPath, file + '.md');
  const fileContent: string = fs.readFileSync(filePath, 'utf8');

  const { data, content } = fm(fileContent);
  return { data, content: snarkdown(content) } as ProjectMatter;
}
