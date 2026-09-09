import React from 'react';
import { render, fireEvent } from '../../test-utils';
import Accordion from './Accordion';
import AccordionGroup from './AccordionGroup';
import Text from '../Text/Text';

describe('AccordionGroup', () => {
  test('should render accordion group correctly', () => {
    const { toJSON, getByTestId } = render(
      <AccordionGroup>
        <Accordion title="Item 1">
          <Text>Content 1</Text>
        </Accordion>
        <Accordion title="Item 2">
          <Text>Content 2</Text>
        </Accordion>
      </AccordionGroup>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('accordion-group')).toBeTruthy();
  });

  test('should force fullWidth on all children', () => {
    const { getAllByTestId } = render(
      <AccordionGroup>
        <Accordion title="Item 1" />
        <Accordion title="Item 2" />
      </AccordionGroup>,
    );

    const accordions = getAllByTestId('accordion');
    accordions.forEach((accordion: any) => {
      expect(accordion.props.style[0].borderLeftWidth).toBe(0);
      expect(accordion.props.style[0].borderRightWidth).toBe(0);
    });
  });

  test('should open only one item at a time by default (single-select)', () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <AccordionGroup>
        <Accordion title="Item 1">
          <Text>Content 1</Text>
        </Accordion>
        <Accordion title="Item 2">
          <Text>Content 2</Text>
        </Accordion>
        <Accordion title="Item 3">
          <Text>Content 3</Text>
        </Accordion>
      </AccordionGroup>,
    );

    const headers = getAllByTestId('accordion-header');

    fireEvent.press(headers[0]);
    expect(queryAllByTestId('accordion-content')).toHaveLength(1);

    fireEvent.press(headers[1]);
    expect(queryAllByTestId('accordion-content')).toHaveLength(1);
  });

  test('should allow multiple items open when multiple is true', () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <AccordionGroup multiple>
        <Accordion title="Item 1">
          <Text>Content 1</Text>
        </Accordion>
        <Accordion title="Item 2">
          <Text>Content 2</Text>
        </Accordion>
      </AccordionGroup>,
    );

    const headers = getAllByTestId('accordion-header');

    fireEvent.press(headers[0]);
    fireEvent.press(headers[1]);
    expect(queryAllByTestId('accordion-content')).toHaveLength(2);
  });

  test('should close open item in single-select mode', () => {
    const { getAllByTestId, queryAllByTestId } = render(
      <AccordionGroup>
        <Accordion title="Item 1">
          <Text>Content 1</Text>
        </Accordion>
        <Accordion title="Item 2">
          <Text>Content 2</Text>
        </Accordion>
      </AccordionGroup>,
    );

    const headers = getAllByTestId('accordion-header');

    fireEvent.press(headers[0]);
    expect(queryAllByTestId('accordion-content')).toHaveLength(1);

    fireEvent.press(headers[0]);
    expect(queryAllByTestId('accordion-content')).toHaveLength(0);
  });

  test('should open item at defaultOpenIndex', () => {
    const { queryAllByTestId, getAllByTestId } = render(
      <AccordionGroup defaultOpenIndex={1}>
        <Accordion title="Item 1">
          <Text>Content 1</Text>
        </Accordion>
        <Accordion title="Item 2">
          <Text>Content 2</Text>
        </Accordion>
      </AccordionGroup>,
    );

    const contents = queryAllByTestId('accordion-content');
    expect(contents).toHaveLength(1);

    const chevrons = getAllByTestId('accordion-chevron');
    expect(chevrons[0].props.title).toBe('arrow-down');
    expect(chevrons[1].props.title).toBe('arrow-up');
  });

  test('should apply border collapse margin on items after the first', () => {
    const { getAllByTestId } = render(
      <AccordionGroup>
        <Accordion title="Item 1" />
        <Accordion title="Item 2" />
        <Accordion title="Item 3" />
      </AccordionGroup>,
    );

    const accordions = getAllByTestId('accordion');
    const firstStyle = accordions[0].props.style;
    const hasMarginTop = firstStyle.some?.((s: any) => s?.marginTop === -1);
    expect(hasMarginTop).toBeFalsy();

    const secondStyle = accordions[1].props.style;
    const secondHasMargin = secondStyle.some?.((s: any) => s?.marginTop === -1);
    expect(secondHasMargin).toBeTruthy();
  });
});
