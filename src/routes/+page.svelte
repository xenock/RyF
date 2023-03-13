<script>
  import { attributes, abilities, config } from '$lib/data.js';
  let pyramid;
  let attributeValues = {};
  let abilitiesValues = {};
$: console.log(`attributeValues ${JSON.stringify(attributeValues)}`);
  $: console.log(`pyramid es ${pyramid}`);
  $: console.log(`abilitiesValues ${JSON.stringify(abilitiesValues)}`);
</script>

<main class="container-fluid">
  <header>
    <section>
      {#each Object.entries(attributes) as [key, { label }], index}
        <label for={key}>
          <input
            name={key}
            placeholder={label}
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            bind:value={attributeValues[key]}
          />
          {label}
        </label>
      {/each}
    </section>
  </header>
  <section>
    <fieldset>
      <legend>Tono de la partida</legend>
      {#each Object.entries(config.pyramid) as [key, { label }], index}
        <label for={key}>
          <input name="pyramid" type="radio" bind:group={pyramid} value={key} />
          {label}
        </label>
      {/each}
      {#if pyramid}
        {#each config.pyramid[pyramid]?.values as value, index}
          <div>
            <p>
              {value} habilidades de nivel {index + 1} :
            </p>
          </div>
        {/each}
      {/if}
    </fieldset>
  </section>
  <section class="abilities">
    {#each abilities.actual as { key, label, attribute }, index}
      <label for={key}>
        <input
          name={key}
          placeholder={label}
          class="ability"
          type="number"
          min={config.abilities.min}
          max={config.abilities.max}
          bind:value={abilitiesValues[key]}
        />
        {label} {(attributeValues[attribute] || 0) + (abilitiesValues[key] || 0)}
      </label>
    {/each}
  </section>
</main>

<style>
  .ability {
    width: 80px;
    --border-color: none;
  }

  .abilities {
    columns: 2;
  }
</style>
