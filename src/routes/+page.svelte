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
</script>

<div
  class="flex flex-col lg:items-center lg:justify-center lg:h-[90vh] h-[screen] w-full"
>
  <div
    class="flex lg:flex-row flex-col-reverse h-full lg:w-2/3 w-full lg:m-24 bg-teal-400 dark:bg-teal-600 lg:dark:bg-emerald-600 lg:bg-emerald-400 rounded-3xl lg:items-center lg:justify-center shadow-lg"
  >
    <div
      class="lg:w-1/3 w-full lg:h-full h-2/3 flex flex-col lg:rounded-l-3xl rounded-t-3xl dark:bg-emerald-600 bg-emerald-400 items-center lg:justify-center"
    >
      <form
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
        </div>
      </form>
    </div>

    <div
      class="lg:w-2/3 lg:h-full h-1/3 flex flex-col p-8 items-center bg-teal-400 dark:bg-teal-600 lg:rounded-3xl gap-8"
    >
      <Avatar class="self-center" size="xl"></Avatar>
      <Heading tag="h2" class="text-center">AppName</Heading>
    </div>
  </div>
</div>
