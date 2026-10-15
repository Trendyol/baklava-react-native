import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Badge from '../Badge/Badge';
import Checkbox from '../Checkbox/Checkbox';
import Icon from '../Icon/Icon';
import RadioButton from '../RadioButton/RadioButton';
import ListItem from './ListItem';

const SAMPLE_IMAGE =
  'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/44/e5/9c/44e59caf-c7f4-90c0-fac6-2b22d3a66a5a/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220.png/1200x600wa.png';

/** Dashed free-content placeholder (Figma slot) */
const PlaceholderSlot = ({ height = 48 }: { height?: number }) => (
  <Box
    borderWidth={1}
    borderStyle="dashed"
    borderColor="neutralLighter"
    borderRadius="xs"
    height={height}
    width="100%"
  />
);

const DetailLines = ({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) => (
  <Box gap="4xs">
    {items.map((item, index) => (
      <Box key={`${item.label}-${index}`} flexDirection="row" gap="4xs">
        <Text variant="body3" color="neutralDark">
          {item.label}:
        </Text>
        <Text variant="body3" color="neutralDarker">
          {item.value}
        </Text>
      </Box>
    ))}
  </Box>
);

const KeyValue = ({
  label,
  value,
  flex = 1,
}: {
  label: string;
  value: string;
  flex?: number;
}) => (
  <Box flex={flex} gap="4xs">
    <Text variant="body3" color="neutralDark">
      {label}
    </Text>
    <Text variant="subtitle3Medium" color="neutralDarker">
      {value}
    </Text>
  </Box>
);

/** Image 3 style — Trendyol Plus box (story-only composition) */
const PlusCommissionBox = () => (
  <Box
    borderWidth={1}
    borderColor="featuredKey"
    borderRadius="m"
    overflow="hidden">
    <Box
      backgroundColor="neutralLightest"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="s"
      paddingVertical="2xs">
      <Text variant="body3" color="featuredKey">
        trendyol plus · Fiyat Aralığı
      </Text>
      <Text variant="body3" color="neutralDark">
        Komisyon
      </Text>
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      padding="s"
      gap="2xs"
      backgroundColor="neutralFull">
      <RadioButton selected={false} onPress={() => undefined} />
      <Box flex={1}>
        <Text variant="body2" color="neutralDarker">
          777.777,77₺ ve altı
        </Text>
      </Box>
      <Text variant="subtitle3Medium" color="primaryKey">
        %6
      </Text>
    </Box>
  </Box>
);

const PriceUpdateField = () => (
  <Box
    borderWidth={1}
    borderColor="neutralLighter"
    borderRadius="m"
    padding="s"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between">
    <Box gap="4xs">
      <Text variant="body3" color="neutralDark">
        Fiyat Güncelle
      </Text>
      <Text variant="subtitle3Medium" color="neutralDarker">
        7.400₺
      </Text>
    </Box>
    <Icon name="edit" size="s" color="neutralDark" />
  </Box>
);

const ProductPricingBlock = () => (
  <Box gap="s">
    <Box flexDirection="row" gap="m">
      <KeyValue label="Trendyol Satış Fiyatı:" value="999.400 ₺" />
      <Box flex={1} gap="4xs">
        <Text variant="body3" color="neutralDark">
          Müşterinin Gördüğü Fiyat:
        </Text>
        <Box flexDirection="row" alignItems="center" gap="2xs">
          <Text variant="subtitle3Medium" color="neutralDarker">
            999.400 ₺
          </Text>
          <Badge text="1" icon="award" size="small" />
        </Box>
      </Box>
    </Box>
    <KeyValue
      label="Komisyonun Hesaplandığı Fiyat / Komisyon:"
      value="7.400 ₺ / %16"
    />
    <KeyValue
      label="Plus Komisyona Esas Fiyat / Komisyon:"
      value="7.400 ₺ / %16"
    />
  </Box>
);

const ListItemMeta: Meta<typeof ListItem> = {
  title: 'ListItem',
  component: ListItem,
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    collapsible: { control: 'boolean' },
    defaultExpanded: { control: 'boolean' },
    showActionButton: { control: 'boolean' },
    collapseButtonVariant: {
      options: ['filled', 'ghost'],
      control: { type: 'radio' },
    },
    collapseButtonVisibility: {
      options: ['always', 'expanded'],
      control: { type: 'radio' },
    },
    image: { control: 'text' },
    imageBadge: { control: 'text' },
    title: { control: 'text' },
    expandLabel: { control: 'text' },
    collapseLabel: { control: 'text' },
    onActionPress: { action: 'onActionPress' },
    onPress: { action: 'onPress' },
    onImagePress: { action: 'onImagePress' },
    onExpandedChange: { action: 'onExpandedChange' },
  },
  args: {
    title: 'Product Title',
    selected: false,
    disabled: false,
    collapsible: false,
    showActionButton: true,
    collapseButtonVariant: 'filled',
    image: SAMPLE_IMAGE,
  },
};

export default ListItemMeta;

type Story = StoryObj<typeof ListItemMeta>;

export const Basic: Story = {
  render: args => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        ListItem
      </Text>
      <Box px="m" py="2xs" backgroundColor="neutralLightest">
        <ListItem {...args}>
          <DetailLines
            items={[
              { label: 'Detail', value: '99999' },
              { label: 'Detail', value: '99999' },
            ]}
          />
        </ListItem>
      </Box>
    </>
  ),
};

export const Selectable: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Selectable
        </Text>
        <Box px="m" py="2xs">
          <ListItem
            selected={selected}
            leading={
              <Checkbox
                checked={selected}
                onPress={() => setSelected(prev => !prev)}
              />
            }
            title="Product Title"
            showActionButton>
            <DetailLines
              items={[
                { label: 'Detail', value: '99999' },
                { label: 'Detail', value: '99999' },
              ]}
            />
          </ListItem>
        </Box>
      </>
    );
  },
};

export const WithImage: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        With Image
      </Text>
      <Box px="m" py="2xs">
        <ListItem
          image={SAMPLE_IMAGE}
          imageBadge={1}
          title="Product Title"
          showActionButton
          onImagePress={() => undefined}>
          <DetailLines
            items={[
              { label: 'Detail', value: '99999' },
              { label: 'Detail', value: '99999' },
            ]}
          />
        </ListItem>
      </Box>
    </>
  ),
};

export const WithTrailing: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Custom Trailing
      </Text>
      <Box px="m" py="2xs" gap="m">
        <ListItem
          title="Trailing: Icon"
          trailing={<Icon name="arrow-right" size="s" color="neutralDark" />}>
          <Text variant="body3" color="neutralDark">
            Custom trailing slot
          </Text>
        </ListItem>
        <ListItem
          title="Trailing: Badge"
          trailing={<Badge text="Yeni" size="small" />}>
          <Text variant="body3" color="neutralDark">
            Badge as trailing
          </Text>
        </ListItem>
      </Box>
    </>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        With Footer
      </Text>
      <Box px="m" py="2xs">
        <ListItem
          title="Lorem ipsum dolor sit amet consectetur."
          showActionButton
          footer={<PlaceholderSlot height={48} />}
        />
      </Box>
    </>
  ),
};

/** Figma placeholder anatomy — dashed free-content slots */
export const PlaceholderSlots: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(true);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Placeholder Slots
        </Text>
        <Text px="m" pb="2xs" variant="body3" color="neutralDark">
          children = title altı slot · footer + collapseContent = alt full-width
          slot’lar
        </Text>
        <Box px="m" py="2xs" backgroundColor="neutralLightest" gap="m">
          <ListItem
            leading={<Checkbox checked={false} />}
            image={SAMPLE_IMAGE}
            title="Lorem Ipsum Dolor Sit Amet Consectetur Netus Orci Odio"
            showActionButton
            collapsible
            expanded={expanded}
            onExpandedChange={setExpanded}
            expandLabel="Collapse"
            collapseLabel="Collapse"
            collapseButtonVariant="filled"
            footer={expanded ? <PlaceholderSlot height={40} /> : undefined}
            collapseContent={
              <Box gap="m">
                <PlaceholderSlot height={40} />
                <PlaceholderSlot height={120} />
              </Box>
            }>
            <PlaceholderSlot height={32} />
          </ListItem>

          <ListItem
            leading={<Checkbox checked={false} />}
            image={SAMPLE_IMAGE}
            title="Lorem Ipsum Dolor Sit Amet Consectetur Netus Orci Odio"
            showActionButton
            collapsible
            defaultExpanded={false}
            expandLabel="Collapse"
            collapseLabel="Collapse"
            collapseButtonVariant="ghost">
            <PlaceholderSlot height={32} />
          </ListItem>

          <ListItem
            leading={<Checkbox checked={false} />}
            title="Lorem ipsum dolor sit amet consectetur."
            showActionButton
            collapsible
            defaultExpanded={false}
            expandLabel="Collapse"
            collapseLabel="Collapse"
            collapseButtonVariant="ghost"
          />
        </Box>
      </>
    );
  },
};

export const CollapseButtonVariants: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Collapse Button Variants
      </Text>
      <Box px="m" py="2xs" gap="m">
        <Text variant="subtitle3Medium">filled (gri bg)</Text>
        <ListItem
          title="Filled collapse button"
          image={SAMPLE_IMAGE}
          showActionButton
          collapsible
          defaultExpanded
          collapseButtonVariant="filled"
          collapseContent={<PlaceholderSlot height={64} />}>
          <Text variant="body3" color="neutralDark">
            Summary
          </Text>
        </ListItem>

        <Text variant="subtitle3Medium">ghost (bgsiz)</Text>
        <ListItem
          title="Ghost collapse button"
          image={SAMPLE_IMAGE}
          showActionButton
          collapsible
          defaultExpanded
          collapseButtonVariant="ghost"
          expandLabel="Show More"
          collapseLabel="Collapse"
          collapseContent={<PlaceholderSlot height={64} />}>
          <Text variant="body3" color="neutralDark">
            Summary
          </Text>
        </ListItem>
      </Box>
    </>
  ),
};

export const CustomCollapseLabel: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Custom Collapse Title
        </Text>
        <Box px="m" py="2xs">
          <ListItem
            image={SAMPLE_IMAGE}
            title="Siyah V Yaka Çiçek Desenli Siyah V Yaka Ç..."
            collapsible
            expanded={expanded}
            onExpandedChange={setExpanded}
            expandLabel="6 Varyantı Göster"
            collapseLabel="Varyantları Gizle"
            collapseButtonVariant="ghost"
            collapseContent={
              <Box gap="2xs">
                <Text variant="body3" color="neutralDark">
                  Varyant listesi (örnek)
                </Text>
                <PlaceholderSlot height={80} />
              </Box>
            }>
            <Text variant="body3" color="neutralDark">
              37260552 | Çok Renkli | 999.400 Adet Stok
            </Text>
          </ListItem>
        </Box>
      </>
    );
  },
};

/** Image 3 — rich product card composition
 * children = sadece image yanındaki kısa header (badge/title/meta)
 * footer  = fiyat + plus + input (full width, image kolonunu itmez)
 */
export const ProductDetailFilled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Product Detail (Filled Content)
        </Text>
        <Box px="m" py="2xs" backgroundColor="neutralLightest">
          <Box borderRadius="m" overflow="hidden">
            <ListItem
              image={SAMPLE_IMAGE}
              collapsible
              expanded={expanded}
              onExpandedChange={setExpanded}
              expandLabel="6 Varyantı Göster"
              collapseLabel="Varyantları Gizle"
              collapseButtonVariant="ghost"
              footer={
                <Box gap="s">
                  <ProductPricingBlock />
                  <PlusCommissionBox />
                  <PriceUpdateField />
                </Box>
              }
              collapseContent={
                <Box gap="s">
                  <Text variant="subtitle3Medium" color="neutralDarker">
                    Varyantlar
                  </Text>
                  <PlaceholderSlot height={72} />
                </Box>
              }>
              <Box gap="2xs">
                <Badge
                  text="Önerilen"
                  icon="flash"
                  size="small"
                  backgroundColor="featuredKey"
                  color="neutralFull"
                />
                <Text variant="subtitle3Medium" color="neutralDarker">
                  Siyah V Yaka Çiçek Desenli Siyah V Yaka Ç...
                </Text>
                <Text variant="body3" color="neutralDark">
                  37260552 | Çok Renkli | 999.400 Adet Stok
                </Text>
              </Box>
            </ListItem>
          </Box>
        </Box>
      </>
    );
  },
};

/** Image 4 — variant rows; expand via trailing, collapse button only when open */
export const VariantRowsFilled: Story = {
  render: () => {
    const [openId, setOpenId] = useState<string | null>('large');

    const variants = [
      { id: '150', beden: '150x200', barkod: '8683067739999' },
      { id: 'medium', beden: 'Medium', barkod: '8683067739999' },
      { id: 'large', beden: 'Large', barkod: '8683067739999' },
    ];

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Variant Rows (Filled Content)
        </Text>
        <Box backgroundColor="neutralFull">
          {variants.map((variant, index) => {
            const isOpen = openId === variant.id;
            return (
              <Box key={variant.id}>
                <ListItem
                  collapsible
                  expanded={isOpen}
                  onExpandedChange={open => setOpenId(open ? variant.id : null)}
                  collapseButtonVariant="filled"
                  collapseButtonVisibility="expanded"
                  collapseLabel="Collapse"
                  trailing={
                    <Icon
                      name={isOpen ? 'arrow-up' : 'arrow-down'}
                      size="s"
                      color="neutralDark"
                    />
                  }
                  onActionPress={() => setOpenId(isOpen ? null : variant.id)}
                  collapseContent={
                    <Box gap="s">
                      <Box flexDirection="row" gap="m">
                        <KeyValue label="Stok" value="999.400" />
                        <KeyValue label="TSF" value="999.400 ₺" />
                        <KeyValue
                          label="Müşterinin Gördüğü Fiyat"
                          value="999.400 ₺"
                        />
                      </Box>
                      <KeyValue
                        label="Komisyonun Hesaplandığı Fiyat / Komisyon:"
                        value="7.400 ₺ / %16"
                      />
                      <KeyValue
                        label="Plus Komisyona Esas Fiyat / Komisyon:"
                        value="7.400 ₺ / %16"
                      />
                      <PlusCommissionBox />
                      <PriceUpdateField />
                    </Box>
                  }>
                  <Box flexDirection="row" gap="xl">
                    <KeyValue label="Beden" value={variant.beden} />
                    <KeyValue label="Barkod" value={variant.barkod} />
                  </Box>
                </ListItem>
                {index < variants.length - 1 ? (
                  <Box height={1} backgroundColor="neutralLightest" />
                ) : null}
              </Box>
            );
          })}
        </Box>
      </>
    );
  },
};

export const FooterAndCollapse: Story = {
  render: () => (
    <>
      <Text p="2xs" variant="subtitle01Bold">
        Footer + Collapse
      </Text>
      <Box px="m" py="2xs">
        <ListItem
          image={SAMPLE_IMAGE}
          title="Lorem Ipsum Dolor Sit Amet"
          showActionButton
          collapsible
          defaultExpanded
          collapseButtonVariant="filled"
          footer={
            <Text variant="subtitle3Medium" color="neutralDarker">
              300,00 TL
            </Text>
          }
          collapseContent={<PlaceholderSlot height={80} />}>
          <Text variant="body3" color="neutralDark">
            Summary line
          </Text>
        </ListItem>
      </Box>
    </>
  ),
};

export const ClickableAreas: Story = {
  render: () => {
    const [log, setLog] = useState('—');
    const [selected, setSelected] = useState(false);
    const push = (msg: string) => setLog(msg);

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Clickable Areas
        </Text>
        <Box px="m" py="2xs" gap="m">
          <ListItem
            selected={selected}
            leading={
              <Checkbox
                checked={selected}
                onPress={() => {
                  setSelected(prev => !prev);
                  push('leading');
                }}
              />
            }
            image={SAMPLE_IMAGE}
            imageBadge={1}
            onImagePress={() => push('image')}
            onPress={() => push('body')}
            showActionButton
            onActionPress={() => push('action')}
            collapsible
            collapseButtonVariant="ghost"
            collapseContent={<Text variant="body3">Extra</Text>}
            onExpandedChange={open => push(open ? 'expand' : 'collapse')}
            title="Tap different zones">
            <Text variant="body3" color="neutralDark">
              Body content
            </Text>
          </ListItem>
          <Text variant="body2" color="neutralDarker">
            Last interaction: {log}
          </Text>
        </Box>
      </>
    );
  },
};

export const ExampleCompositions: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const toggle = (id: string) => {
      setSelectedIds(prev =>
        prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id],
      );
    };

    const items = [
      { id: '1', title: 'Product Title' },
      { id: '2', title: 'Product Title' },
      { id: '3', title: 'Product Title' },
    ];

    return (
      <>
        <Text p="2xs" variant="subtitle01Bold">
          Example Compositions
        </Text>

        <Text px="m" py="2xs" variant="subtitle3Medium">
          Example 1 — card list
        </Text>
        <Box px="m" gap="xs" backgroundColor="neutralLightest" py="xs">
          {items.map(item => (
            <Box key={item.id} borderRadius="m" overflow="hidden">
              <ListItem
                selected={selectedIds.includes(item.id)}
                leading={
                  <Checkbox
                    checked={selectedIds.includes(item.id)}
                    onPress={() => toggle(item.id)}
                  />
                }
                image={SAMPLE_IMAGE}
                title={item.title}
                showActionButton>
                <DetailLines
                  items={[
                    { label: 'Detail', value: '99999' },
                    { label: 'Detail', value: '99999' },
                  ]}
                />
              </ListItem>
            </Box>
          ))}
        </Box>

        <Text px="m" pt="m" pb="2xs" variant="subtitle3Medium">
          Example 2 — badges + divider
        </Text>
        <Box>
          {items.map((item, index) => (
            <Box key={`ex2-${item.id}`}>
              <ListItem
                leading={
                  <Checkbox
                    checked={selectedIds.includes(`ex2-${item.id}`)}
                    onPress={() => toggle(`ex2-${item.id}`)}
                  />
                }
                image={SAMPLE_IMAGE}
                title={item.title}
                showActionButton>
                <Box gap="2xs">
                  <Box flexDirection="row" gap="2xs" flexWrap="wrap">
                    <Badge text="Buybox: 2" icon="award" size="small" />
                    <Badge
                      text="Waiting"
                      icon="clock"
                      size="small"
                      backgroundColor="primaryContrast"
                      color="primaryKey"
                    />
                  </Box>
                  <DetailLines
                    items={[
                      { label: 'Detail', value: '99999' },
                      { label: 'Detail', value: '99999' },
                    ]}
                  />
                </Box>
              </ListItem>
              {index < items.length - 1 ? (
                <Box height={1} backgroundColor="neutralLightest" />
              ) : null}
            </Box>
          ))}
        </Box>
      </>
    );
  },
};
