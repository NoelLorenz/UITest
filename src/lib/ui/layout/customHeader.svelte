<script lang="ts">
  import {
    Avatar,
    Button,
    DarkMode,
    Dropdown,
    DropdownItem,
    Heading,
    Hr,
    Navbar,
    P,
  } from "flowbite-svelte";
  import CustomDarkmode from "../component/customDarkmode.svelte";
</script>

<Navbar
  fluid
  class="bg-primary-500 dark:bg-primary-700  rounded-2xl shadow-sm w-5/6 md:w-full ml-auto"
>
  <div class="flex justify-between w-full items-center">
    <Heading tag="h3" class="text-center">Lorem Ipsum Dolor</Heading>
    <div class="flex gap-8 ml-auto">
      <CustomDarkmode className=" hidden md:block" />
      <Button
        pill
        size="xs"
        class="lg:px-8 hover:dark:bg-primary-500 dark:bg-primary-600 bg-primary-600 hover:bg-primary-700"
      >
        <div class="flex gap-2 items-center">
          <Avatar />
          <P class="hidden md:block" weight="semibold">User</P>
        </div>
      </Button>
      <Dropdown simple>
        <DropdownItem>test</DropdownItem>
        <DropdownItem>test</DropdownItem>
        <DropdownItem class="md:hidden block"><CustomDarkmode /></DropdownItem>
      </Dropdown>
    </div>
  </div>
</Navbar>
