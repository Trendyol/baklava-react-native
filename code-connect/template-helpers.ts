import type { InstanceHandle, LayerHandle, SelectorOptions } from 'figma';

/**
 * Reads the text content of a layer inside a Code Connect template.
 *
 * The Figma template API returns `ErrorHandle` instead of throwing when a layer
 * cannot be resolved, so every lookup is narrowed here and degrades to an empty
 * string instead of breaking the whole snippet.
 */
export const findText = (
  node: LayerHandle | InstanceHandle | null | undefined,
  layerName: string,
  opts?: SelectorOptions,
): string => {
  if (node?.type !== 'INSTANCE') {
    return '';
  }

  const text = node.findText(layerName, opts);

  return text.type === 'TEXT' ? text.textContent : '';
};

/**
 * Reads an enum/boolean component property inside a Code Connect template,
 * falling back to `undefined` when the layer cannot be resolved.
 */
export const getEnum = <O extends Record<string, unknown>>(
  node: LayerHandle | InstanceHandle | null | undefined,
  propName: string,
  options: O,
): O[keyof O] | undefined =>
  node?.type === 'INSTANCE' ? node.getEnum(propName, options) : undefined;
