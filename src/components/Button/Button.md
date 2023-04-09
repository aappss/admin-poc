```jsx
import { Flex } from "theme-ui";
<>
  <Flex>
    <Button variant="primary">Click me </Button>

    <Button variant="secondary" ml={2}>
      Click me{" "}
    </Button>

    <Button variant="primary" ml={2} disabled={true}>
      Click me{" "}
    </Button>

    <Button variant="secondary" ml={2} disabled>
      Click me{" "}
    </Button>
  </Flex>
  <Flex mt={2}>
    <Button variant="primary" size="medium" ml={2}>
      Click me{" "}
    </Button>
    <Button variant="secondary" size="medium" ml={2}>
      Click me{" "}
    </Button>
  </Flex>

  <Flex mt={2}>
    <Button variant="primary" size="small" ml={2}>
      Click me{" "}
    </Button>
    <Button variant="secondary" size="small" ml={2}>
      Click me{" "}
    </Button>
  </Flex>
</>;
```
