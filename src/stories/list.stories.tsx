import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { List } from "../components/list";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof List>;

export const FirstList: Story = {
  args: {
    onClick: () => {},
    name: "안녕하세요.",
  },
};
