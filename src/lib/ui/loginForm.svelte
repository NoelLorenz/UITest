<!-- @migration-task Error while migrating Svelte code: `<form>` cannot be a descendant of `<form>`. The browser will 'repair' the HTML (by moving, removing, or inserting elements) which breaks Svelte's assumptions about the structure of your components.
https://svelte.dev/e/node_invalid_placement -->
<script lang="ts">
  import {
    P,
    Input,
    Label,
    Button,
    Tooltip,
    Avatar,
    Heading,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { afterNavigate, invalidateAll } from "$app/navigation";
  //   let innerWidth: number;
  //   let isMobile = false;

  //   afterNavigate(() => {
  //     invalidateAll();
  //   });

  //   $: if (innerWidth < 768) {
  //     isMobile = true;
  //   } else {
  //     false;
  //   }
</script>

<div
  class="flex flex-col lg:items-center lg:justify-center lg:h-[90vh] h-screen w-full"
>
  <div
    class="flex lg:flex-row flex-col-reverse h-full lg:w-2/3 w-full lg:m-24 bg-teal-400 dark:bg-teal-600 lg:dark:bg-emerald-600 lg:bg-emerald-400 rounded-3xl lg:items-center lg:justify-center shadow-lg"
  >
    <div
      class="lg:w-1/3 w-full lg:h-full h-2/3 flex flex-col lg:rounded-l-3xl rounded-t-3xl dark:bg-emerald-600 bg-emerald-400 items-center lg:justify-center"
    >
      <form
        method="POST"
        action="?/login"
        class="flex flex-col gap-4 w-full p-4 self-center lg:mb-16"
      >
        <P class="self-center" size="3xl" weight="extrabold">Login</P>
        <Label>UserName:</Label>
        <Input autocomplete="off" required name="user" />
        <Label>Password:</Label>
        <Input autocomplete="off" required type="password" name="password" />
        <div class=" flex gap-2 w-full justify-center">
          <Button class="shadow-md" type="submit">Login</Button>
          <form method="POST" action="?/login">
            <Input name="user" value="guest" type="hidden"></Input>
            <Input name="password" value="guest" type="hidden"></Input>
            <Button class=" shadow-md" type="submit">Guest</Button>
          </form>
          <Tooltip placement="top">Login as Guest</Tooltip>
        </div>
      </form>
      <!-- {#if isMobile}
        <P class="text-center mt-8 p-4"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          doloremque quas illum nostrum, aliquam fuga eum! Cum quod soluta
          aliquid voluptate et. Id libero accusantium aut ipsam nihil molestias
          voluptatum.
        </P>

        <div class="flex flex-row w-2/3 justify-evenly mt-auto">
          <small class="text-black dark:text-white">text is here</small>
          <div class="h-full w-[2px] bg-black dark:bg-white"></div>
          <small class="text-black dark:text-white">text is here</small>
        </div>
      {/if} -->
    </div>

    <div
      class="lg:w-2/3 lg:h-full h-1/3 flex flex-col p-8 items-center bg-teal-400 dark:bg-teal-600 lg:rounded-3xl gap-8"
    >
      <!-- {#if !isMobile}
        <Heading tag="h3" class="text-center">Welcome to</Heading>
      {/if} -->
      <Avatar class="self-center" size="xl"></Avatar>
      <Heading tag="h2" class="text-center">AppName</Heading>
      <!-- {#if !isMobile}
        <P class="text-center"
          >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          doloremque quas illum nostrum, aliquam fuga eum! Cum quod soluta
          aliquid voluptate et. Id libero accusantium aut ipsam nihil molestias
          voluptatum.
        </P>
        <button class="button is-info is-outlined">button</button>
        <button class="primary">beerCss</button>
        <div class="flex flex-row w-2/3 justify-evenly mt-auto">
          <small class="text-black dark:text-white">text is here</small>
          <div class="h-full w-[2px] bg-black dark:bg-white"></div>
          <small class="text-black dark:text-white">text is here</small>
        </div>
      {/if} -->
    </div>
  </div>
</div>
