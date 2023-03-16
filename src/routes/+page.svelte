<script>
  import { attributes, abilities, config, combat } from '$lib/data.js'
  let pyramid

  const group = (entries) => {
    if (!entries) return null
    return Object.entries(entries).reduce((group, [, ability]) => {
      return {
        ...group,
        [ability.value]: [...(group[ability.value] || []), ability],
      }
    }, {})
  }

  $: groupedAbilities = group(abilities.actual)
</script>

<main class="container-fluid">
  <header>
    <section class="attributes">
      {#each Object.entries(attributes) as [key, { label, value }], index}
        <label for={key}>
          {label}
          <input
            name={key}
            placeholder={label}
            class="field"
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            bind:value
          />
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
            <p
              class:limit={groupedAbilities[index + 1]?.length === value}
              class:off={groupedAbilities[index + 1]?.length > value}
            >
              {value} habilidades de nivel {index + 1} :
            </p>
            {#if groupedAbilities[index + 1]}
              <ul>
                {#each groupedAbilities[index + 1] as { key: abilityKey }, index}
                  <li>
                    {abilities.actual.find((ability) => ability.key === abilityKey).label}
                  </li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      {/if}
    </fieldset>
  </section>
  <section class="abilities">
    {#each abilities.actual as { key, label, attribute, value }, index}
      <label for={key}>
        <input
          name={key}
          placeholder={label}
          class="field"
          type="number"
          min={config.abilities.min}
          max={config.abilities.max}
          bind:value
        />
        {label}
        {attributes[attribute].value + value}
      </label>
    {/each}
  </section>
  <section>
    {#each Object.entries(combat) as [key, { label }]}
      <label for={key}>
        {label}
        <input name={key} placeholder={label} class="field" type="number" />
      </label>
    {/each}
  </section>
</main>

<style>
  .field {
    width: 80px;
    --border-color: none;
  }

  .attributes {
    display: flex;
    justify-content: space-between;
  }

  .abilities {
    columns: 2;
  }

  .limit {
    color: green;
  }

  .off {
    color: red;
  }
</style>
