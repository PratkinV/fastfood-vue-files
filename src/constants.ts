import type { StickerConfig } from './types';

export const ALL = 'ALL';
export const NEW = 'NEW';
export const POPULAR = 'POPULAR';

export const STICKER_CONFIG: StickerConfig = {
  [NEW]: {
    label: 'НОВИНКА',
    backgroundColor: '#e2458e',
  },
  [POPULAR]: {
    label: 'ПОПУЛЯРНО',
    backgroundColor: '#563c88',
  }
}