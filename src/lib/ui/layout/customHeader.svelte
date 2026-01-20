<script lang="ts">
  import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    Heading,
    Navbar,
    P,
  } from "flowbite-svelte";
</script>

<Navbar fluid class="bg-transparent dark:bg-transparent">
  <div class="flex justify-between w-full">
    <Heading>Lorem Ipsum Dolor</Heading>
    <Button pill>
      <Avatar />
      <P>User</P>
    </Button>
    <Dropdown>
      <DropdownItem>test</DropdownItem>
      <DropdownItem>test</DropdownItem>

      <DropdownItem>test</DropdownItem>
    </Dropdown>
  </div>
</Navbar>
