import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PartyPopperIcon } from "lucide-react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    variant: "primary",
    size: "default",
    onClick: fn(),
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ["primary"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    children: "Click me",
  },
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: {
        type: "select",
      },
    },
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    "aria-label": "Click me",
    children: <PartyPopperIcon />,
  },
  argTypes: {
    size: {
      options: ["icon"],
      control: {
        type: "select",
      },
    },
    "aria-label": {
      control: {
        type: "text",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const IconAndText: Story = {
  args: {
    children: (
      <>
        <PartyPopperIcon /> Click me
      </>
    ),
  },
  argTypes: {
    size: {
      options: ["default", "sm", "lg"],
      control: {
        type: "select",
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};
