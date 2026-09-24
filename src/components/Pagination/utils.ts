export type PaginationItem = number | 'ellipsis-start' | 'ellipsis-end';

const SIMPLE_VISIBLE_ITEM_COUNT = 7;
const JUMPER_VISIBLE_ITEM_COUNT = 5;

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

export const normalizeTotalPages = (totalPages: number) =>
  Math.max(1, Math.floor(Number.isFinite(totalPages) ? totalPages : 1));

export const clampCurrentPage = (currentPage: number, totalPages: number) => {
  const normalizedTotalPages = normalizeTotalPages(totalPages);
  const normalizedCurrentPage = Math.floor(
    Number.isFinite(currentPage) ? currentPage : 1,
  );

  return Math.min(normalizedTotalPages, Math.max(1, normalizedCurrentPage));
};

export const getPaginationItems = (
  currentPage: number,
  totalPages: number,
  hasJumper: boolean,
): PaginationItem[] => {
  const normalizedTotalPages = normalizeTotalPages(totalPages);
  const normalizedCurrentPage = clampCurrentPage(
    currentPage,
    normalizedTotalPages,
  );
  const visibleItemCount = hasJumper
    ? JUMPER_VISIBLE_ITEM_COUNT
    : SIMPLE_VISIBLE_ITEM_COUNT;

  if (normalizedTotalPages <= visibleItemCount) {
    return range(1, normalizedTotalPages);
  }

  if (hasJumper) {
    if (normalizedCurrentPage <= 3) {
      return [1, 2, 3, 'ellipsis-end', normalizedTotalPages];
    }

    if (normalizedCurrentPage >= normalizedTotalPages - 2) {
      return [
        1,
        'ellipsis-start',
        ...range(normalizedTotalPages - 2, normalizedTotalPages),
      ];
    }

    return [
      'ellipsis-start',
      normalizedCurrentPage - 1,
      normalizedCurrentPage,
      normalizedCurrentPage + 1,
      'ellipsis-end',
    ];
  }

  if (normalizedCurrentPage <= 5) {
    return [...range(1, 5), 'ellipsis-end', normalizedTotalPages];
  }

  if (normalizedCurrentPage >= normalizedTotalPages - 4) {
    return [
      1,
      'ellipsis-start',
      ...range(normalizedTotalPages - 4, normalizedTotalPages),
    ];
  }

  return [
    1,
    'ellipsis-start',
    normalizedCurrentPage - 1,
    normalizedCurrentPage,
    normalizedCurrentPage + 1,
    'ellipsis-end',
    normalizedTotalPages,
  ];
};
