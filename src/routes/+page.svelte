<script>
  import Kirby from "$lib/kirby.svelte";
  import ClickButton from "$lib/clickButton.svelte";
  import Greet from "$lib/greet.svelte";
  import Head from "$lib/head.svelte";
  import Warning from "$lib/warning.svelte";

  const version = "1.2.0-beta_vercel2";

  const backgrounds = [
    "bg-gray-800",
    "bg-pink-300",
    "bg-linear-65 from-red-500 to-pink-500",
    "bg-linear-65 from-yellow-300 to-emerald-600",
  ];

  let currentBackground = $state(backgrounds[0]);

  const headConfig = {
    title: "welcome",
    content: "hell yeah test lol aa beta2",
  };

  const warningText = "check out ***markdown*** on the textbox below!";
</script>

<Head {...headConfig} />

<div
  id="container"
  class="{currentBackground} text-white flex flex-col min-h-screen items-center justify-center gap-5 transition delay-200"
>
  <Warning {warningText} />

  <Greet {version} />

  <Kirby />

  <ClickButton />

  <h1 class="text-2xl">Backgrounds</h1>
  <div class="flex items-center justify-center flex-wrap gap-5">
    {#each backgrounds as bg}
      <button
        aria-label={bg}
        class="background h-20 w-40 bg-linear-65 {bg} rounded-md cursor-pointer"
        onclick={() => (currentBackground = bg)}
      ></button>
    {/each}
  </div>
</div>
