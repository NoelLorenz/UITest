<script lang="ts">
  import {
    P,
    Input,
    Label,
    Button,
    Tooltip,
    Avatar,
    Heading,
    ImagePlaceholder,
    Hr,
  } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
</script>

<div
  class="flex flex-col lg:items-center lg:justify-center lg:h-[90vh] h-screen w-full"
>
  <div
    class="flex lg:flex-row flex-col-reverse h-full lg:w-3/5 w-full lg:m-24 p-4 bg-teal-400 dark:bg-teal-600 lg:dark:bg-gray-500 lg:bg-gray-300 rounded-3xl lg:items-center lg:justify-center shadow-lg"
  >
    <div
      class="lg:w-1/2 w-full lg:h-full h-full flex flex-col lg:rounded-3xl rounded-t-3xl dark:bg-gray-500 bg-gray-300 items-center lg:justify-center"
    >
      <form
        action="?/login"
        method="post"
        class="flex flex-col gap-4 lg:w-2/3 w-full p-4 self-center lg:mb-16"
      >
        <P class="self-center" size="3xl" weight="extrabold">Login</P>
        <Label>UserName:</Label>
        <Input autocomplete="off" required name="user" />
        <Label>Password:</Label>
        <Input autocomplete="off" required type="password" name="password" />
        <Button class="shadow-md mt-4" type="submit">Login</Button>
        <div class=" flex gap-2 w-full justify-center"></div>
      </form>
    </div>

    <div
      class="lg:w-1/2 lg:h-full h-1/3 flex flex-col p-8 bg-linear-to-tl from-teal-300 to-emerald-500 gap-8 relative rounded-2xl"
    >
      <!-- <Avatar
        class="self-center lg:absolute static right-8 bottom-10 aspect-square w-56 h-56"
      ></Avatar> -->
      <div class="flex w-full gap-4 items-center">
        <Avatar />
        <Heading tag="h2">App Name</Heading>
      </div>
      <!-- <Hr class="h-1 w-64">
        <QuoteSolid class="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </Hr> -->
      <P
        >"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        nihil! Odit, laborum explicabo, vero eum quia cupiditate quos ducimus
        totam ratione?"</P
      >
      <ImagePlaceholder
        imgOnly
        class="self-center lg:absolute static right-5 bottom-5 rounded-full w-56 h-56"
      />
    </div>
  </div>
</div>
