<script lang="ts">
  import PagesLayout from "$lib/ui/layout/pagesLayout.svelte";
  import { Button } from "flowbite-svelte";
</script>

<PagesLayout pageTitle="Buttons">
  <div class="flex w-full gap-4">
    <Button>Default</Button>
    <Button color="alternative">Alternative</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    <Button color="blue">Blue</Button>
    <Button color="green">Green</Button>
    <Button color="red">Red</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="purple">Purple</Button>
  </div>
  <div class="flex w-full gap-4 mt-8">
    <Button outline>Default</Button>
    <Button outline color="dark">Dark</Button>
    <Button outline color="green">Green</Button>
    <Button outline color="red">Red</Button>
    <Button outline color="yellow">Yellow</Button>
    <Button outline color="purple">Purple</Button>
  </div>
</PagesLayout>
