export type Lang = 'fa' | 'en';

export interface CatalogMethod {
  id: string;
  slug: string | null;
  icon: string;
  status: 'interactive' | 'lesson' | 'catalog';
  color: string;
}

export interface CatalogCategory {
  id: string;
  title: string;
  desc: string;
  methods: CatalogMethod[];
}

export interface CatalogEntry {
  title: string;
  founder: string;
  desc: string;
}

export interface LocaleData {
  catalog?: {
    title: string;
    subtitle: string;
    categories: CatalogCategory[];
    statusLabels: Record<string, string>;
    entries: Record<string, CatalogEntry>;
  };
  [key: string]: unknown;
}

export type I18NStore = Record<Lang, LocaleData>;
