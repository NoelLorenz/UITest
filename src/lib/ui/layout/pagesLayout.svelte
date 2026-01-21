<script lang="ts">
  import { Heading, Hr } from "flowbite-svelte";
  const {
    pageTitle = "title",
    children,
    className,
  } = $props<{
    pageTitle?: string;
    children?: import("svelte").Snippet;
    className?: string;
  }>();
</script>

<div class="min-h-[86vh] w-full grid-cols-3 flex flex-col {className}">
  <div class="flex w-full pt-8">
    <Heading class="text-primary-950 dark:text-primary-400">{pageTitle}</Heading
    >
  </div>
  <Hr classes={{ bg: "h-1 bg-primary-950 dark:bg-primary-400 mt-4" }} />
  <!-- <hr class="h-2 w-full" /> -->
  {@render children?.()}
</div>
