import type { ReactNode } from 'react';

export type ListItemCollapseButtonVariant = 'filled' | 'ghost';

export type ListItemCollapseButtonVisibility = 'always' | 'expanded';

export type ListItemProps = {
  /** Leading slot (Checkbox, Radio, index, etc.) */
  leading?: ReactNode;
  /** Free content area (under title / main body) */
  children?: ReactNode;
  /** Trailing slot; overrides `showActionButton` when provided */
  trailing?: ReactNode;
  /** Always-visible footer free content */
  footer?: ReactNode;
  /** Content shown only when collapse is expanded */
  collapseContent?: ReactNode;

  /** Remote image URL from list data — not a component slot */
  image?: string;
  /** Optional count badge overlay on the image (Figma Count) */
  imageBadge?: number | string;
  /** Image press (e.g. open preview); Modal is consumer-owned */
  onImagePress?: () => void;

  /** Selected row background highlight */
  selected?: boolean;
  /** Body / content press */
  onPress?: () => void;
  disabled?: boolean;
  testID?: string;

  collapsible?: boolean;
  defaultExpanded?: boolean;
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Label when collapsed — default: "Show More" */
  expandLabel?: string;
  /** Label when expanded — default: "Collapse" */
  collapseLabel?: string;
  /**
   * Collapse toggle style.
   * - `filled`: light gray background (Figma expanded / default)
   * - `ghost`: no background (e.g. "6 Varyantı Göster")
   */
  collapseButtonVariant?: ListItemCollapseButtonVariant;
  /**
   * When to show the collapse toggle.
   * - `always`: collapsed + expanded (default)
   * - `expanded`: only when open (e.g. variant rows with trailing chevron)
   */
  collapseButtonVisibility?: ListItemCollapseButtonVisibility;

  /** Optional title rendered above children */
  title?: string;
  /** Renders default trailing chevron; always tappable (detail navigation) */
  showActionButton?: boolean;
  /** Trailing / action button press (detail). Falls back to `onPress` if omitted */
  onActionPress?: () => void;
};
