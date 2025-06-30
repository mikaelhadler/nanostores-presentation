<script lang="ts">
  import { counterAtom } from "../context/counterAtom";
</script>

<div class="flex flex-row items-end gap-4">
  <div class="flex flex-row items-start gap-2 flex-1">
    <button
      type="button"
      class="rounded-md bg-pink-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      on:click={() => {
        counterAtom.set($counterAtom + 1);
      }}
    >
      Click to add
    </button>

    <button
      type="button"
      class="rounded-md bg-gray-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      on:click={() => counterAtom.set(0)}
    >
      Reset
    </button>
  </div>
  <div class="flex flex-col items-end gap-2 flex-1">
    <a
      class="items-end rounded-md bg-gray-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      href="/"
    >
      Back
    </a>
  </div>
</div>
