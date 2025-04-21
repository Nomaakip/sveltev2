<script>
    let ClickCount = $state(0);
</script>

<button
    onclick={() => ClickCount++}
    class="bg-blue-500 p-2 transition rounded-md hover:cursor-pointer active:scale-90"
>
    Click me!
</button>

<span id="kirbys">Click Count: {ClickCount}</span>
