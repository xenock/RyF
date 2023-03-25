<script>
  export let value = 0
  export let min = 0
  export let max = 0
  export let placeholder = ''
  export let name = ''
  export let label = ''

  function increment() {
    if (value < max) {
      value += 1
    }
  }

  function decrement() {
    if (value > min) {
      value -= 1
    }
  }
</script>

<label class="field" for={name}>
  <span>{label}</span>
  <div>
    <input {name} {placeholder} type="number" {min} {max} bind:value />
    <button on:click={decrement}>-</button>
    <button on:click={increment}>+</button>
  </div>
</label>

<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .field {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  input {
    width: 50px;
  }

  button {
    width: 50px;
  }
</style>
