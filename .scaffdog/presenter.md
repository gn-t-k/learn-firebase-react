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

type Props = {
}

const {{ inputs.component | pascal }}Presenter = ({}: Props): JSX.Element => (
  <p>template</p>
)

export default {{ inputs.component | pascal }}Presenter
```

# `{{ inputs.component | kebab }}/index.module.css`

```css
```

# `{{ inputs.component | kebab }}/index.stories.tsx`

```tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {{ inputs.component | pascal }}Presenter from ".";

export default {
  title: "{{output.dir | replace "src\/components\/presenter\/" ""}}",
  component: {{ inputs.component | pascal }}Presenter,
} as ComponentMeta<typeof {{ inputs.component | pascal }}Presenter>;

const TemplateStory: ComponentStory<typeof {{ inputs.component | pascal }}Presenter> = (props) => <{{ inputs.component | pascal }}Presenter {...props} />;

export const Default = TemplateStory.bind({});
Default.args = {
};
```
