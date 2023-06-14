import { Meta, StoryFn } from '@storybook/react';
import ProductCard, { IProductCard } from './ProductCard';
import { mockProductCardProps } from './ProductCard.mocks';

export default {
  title: 'templates/ProductCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProductCardProps.base,
} as IProductCard;
