import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    sector: z.string(),
    type: z.enum(['Client Project', 'Strategic Collaboration', 'Strategic Analysis', 'Practice Project']),
    summary: z.string(),
    servicioRelacionado: z.string().optional(),
    cover: z.string().optional(),
    order: z.number().default(99),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    cover: z.string().optional(),
    servicioRelacionado: z.string().optional(),
    metaDescription: z.string(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/content/settings' }),
  schema: z.object({
    heroImage: z.string(),
    eyebrow: z.string(),
    heroTitle: z.string(),
    heroClaim: z.string(),
    statementLine1: z.string(),
    statementLine2: z.string(),
    problemTitle: z.string(),
    problemBody: z.string(),
    aboutTitle: z.string(),
    aboutBody: z.string(),
    finalCtaText: z.string(),
  }),
});

const contacto = defineCollection({
  loader: glob({ pattern: 'contacto.yaml', base: './src/content/settings' }),
  schema: z.object({
    email: z.string(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
  }),
});

export const collections = { proyectos, insights, settings, contacto };
