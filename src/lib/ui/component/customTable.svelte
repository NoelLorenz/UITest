<script lang="ts">
  import {
    Input,
    Label,
    P,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
  } from "flowbite-svelte";
  import XButtonSVG from "../svgIcons/xButtonSVG.svelte";
  import { FilterSolid } from "flowbite-svelte-icons";

  export let tableText: string = "Lorem IpSum DOlor";

  let searchTerm: any;
  let filterType: "product" | "price" | "type" | "brand" | null;
  let testTableHead: any[] = [
    { name: "product" },
    { name: "price" },
    { name: "type" },
    { name: "brand" },
  ];

  let testTableBody: any[] = [
    { product: "phone", price: 5000, type: "android", brand: "samsung" },
    { product: "laptop", price: 15000, type: "Windows", brand: "Acer" },
    { product: "Tv", price: 12000, type: "smart", brand: "LG" },
    { product: "Fridge", price: 18000, type: "n/a", brand: "samsung" },
    { product: "phone", price: 7500, type: "IOS", brand: "apple" },
    { product: "phone", price: 5000, type: "android", brand: "samsung" },
    { product: "laptop", price: 15000, type: "Windows", brand: "Acer" },
    { product: "Tv", price: 12000, type: "smart", brand: "LG" },
    { product: "Fridge", price: 18000, type: "n/a", brand: "samsung" },
    { product: "phone", price: 7500, type: "IOS", brand: "apple" },
  ];

  let testDisplayBody = testTableBody;
  type Row = {
    product: string;
    price: number;
    type: string;
    brand: string;
  };
  let filteredData: Row[] = [];

  // function filterData(filterType: any) => {
  //   testDisplayBody = testTableBody.filterType.includes(searchTerm)

  // }
</script>

<div class="flex flex-col gap-4">
  <div class="grid grid-cols-3 place-items-center w-full">
    <Input class="col-span-1" bind:value={searchTerm}>
      {#snippet right()}
        {#if searchTerm}
          <button on:click={() => (searchTerm = "")}>
            <XButtonSVG />
          </button>
        {:else}
          <FilterSolid />
        {/if}
      {/snippet}
    </Input>
    <P weight="semibold" size="lg" class="col-span-1">{tableText}</P>
  </div>
  <div class="rounded-2xl overflow-hidden">
    <Table border={true} striped class="rounded-2xl">
      <TableHead class="bg-primary-400 dark:bg-primary-600 ">
        {#each testTableHead as item}
          <TableBodyCell class="text-md font-semibold dark:text-gray-950"
            >{item.name}</TableBodyCell
          >
        {/each}
      </TableHead>
      <TableBody>
        {#each testDisplayBody as itemBody}
          <TableBodyRow class="*:dark:text-gray-100">
            <TableBodyCell>{itemBody.product}</TableBodyCell>
            <TableBodyCell>{itemBody.price}</TableBodyCell>
            <TableBodyCell>{itemBody.type}</TableBodyCell>
            <TableBodyCell>{itemBody.brand}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  </div>
</div>
