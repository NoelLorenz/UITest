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
    Search,
  } from "flowbite-svelte";
  import CustomDarkmode from "../component/customDarkmode.svelte";
  import LogoutSVG from "../svgIcons/logoutSVG.svelte";

  const itemClass = "text-lg px-4 flex gap-2 items-center items-end";
</script>

<Navbar
  fluid
  class="bg-primary-500 dark:bg-primary-700  rounded-2xl shadow-sm w-5/6 md:w-full ml-auto"
>
  <div class="flex justify-between w-full items-center">
    <Search size="lg" class="w-1/3">
      <Button class="me-1">Search</Button>
    </Search>
    <div class="flex gap-8 ml-16">
      <CustomDarkmode className="hidden md:block" />
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
        <DropdownItem class={itemClass}>Profile</DropdownItem>
        <DropdownItem href="/" class={itemClass}
          ><LogoutSVG /> Logout</DropdownItem
        >
        <DropdownItem class="md:hidden block"><CustomDarkmode /></DropdownItem>
      </Dropdown>
    </div>
  </div>
</Navbar>
