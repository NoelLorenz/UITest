<script lang="ts">
  import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    Heading,
    Hr,
    Navbar,
    P,
  } from "flowbite-svelte";
</script>

<Navbar
  fluid
  class="bg-transparent dark:bg-transparent border-b-2 border-gray-600 dark:border-gray-100"
>
  <div class="flex justify-between w-full">
    <Heading>Lorem Ipsum Dolor</Heading>
    <Button pill>
      <div class="flex gap-2 items-center">
        <Avatar />
        <P weight="semibold">User</P>
      </div>
    </Button>
    <Dropdown simple>
      <DropdownItem>test</DropdownItem>
      <DropdownItem>test</DropdownItem>
      <DropdownItem>test</DropdownItem>
    </Dropdown>
  </div>
</Navbar>
