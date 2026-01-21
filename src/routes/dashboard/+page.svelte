<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>

<div
  class="min-h-[86vh] w-full lg:grid-cols-3 lg:grid-rows-6 gap-4 lg:grid pt-4 flex flex-wrap"
>
  <Card class="max-w-full col-span-2 row-span-2 rounded-2xl"></Card>
  <Card class=" max-w-full col-span-1 row-span-2 rounded-2xl"></Card>
  <Card class="max-w-full col-start-2 col-span-2 row-span-3 rounded-2xl"></Card>
  <Card class="max-w-full row-start-3 col-span-1 row-span-4 rounded-2xl"></Card>
  <Card class="max-w-full row-start-6 col-span-1 row-span-1 rounded-2xl"></Card>
  <Card class="max-w-full row-start-6 col-span-1 row-span-1 rounded-2xl"></Card>
</div>
