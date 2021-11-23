---
name: 'presenter'
root: 'src/components/presenter'
output: '*'
ignore: []
questions:
  component: 'Please enter component name.'
---

# `{{ inputs.component | kebab }}/index.tsx`

```tsx
import styles from "./index.module.css";

type DOMProps = {
}

export const DOM = ({}: DOMProps): JSX.Element => (
)

type Props = {
} & DOMProps

const {{ inputs.component | pascal }} = ({}: Props): JSX.Element => {
  return <DOM />
}

export default {{ inputs.component | pascal }}
```

# `{{ inputs.component | kebab }}/index.module.css`

```css
```

# `{{ inputs.component | kebab }}/index.stories.tsx`

```tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DOM } from ".";

export default {
  title: "{{output.dir | replace "src\/components\/presenter\/" ""}}",
  component: DOM,
} as ComponentMeta<typeof DOM>;

const TemplateStory: ComponentStory<typeof DOM> = (props) => <DOM {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
};
```
