<script>
  import { attributes, abilities, config } from '$lib/data.js'
  let pyramid
  let attributeValues = {}
  let abilitiesValues = {}

  const group = (entries) => {
    if (!entries) return null
    return Object.entries(entries).reduce((group, [ability, value]) => {
      return {
        ...group,
        [value]: [...(group[value] || []), ability],
      }
    }, {})
  }

  $: groupedAbilities = group(abilitiesValues)
  $: console.log(`%cgroupedAbilities ${JSON.stringify(groupedAbilities)}`, 'color: green')
  $: console.log(`%cattributeValues ${JSON.stringify(attributeValues)}`, 'color: red')
  $: console.log(`%cpyramid es ${pyramid}`, 'color: orange')
  $: console.log(`%cabilitiesValues ${JSON.stringify(abilitiesValues)}`, 'color: cyan')
</script>

<main class="container-fluid">
  <header>
    <section class="attributes">
      {#each Object.entries(attributes) as [key, { label }], index}
        <label for={key}>
          {label}
          <input
            name={key}
            placeholder={label}
            class="ability"
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            bind:value={attributeValues[key]}
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
                {#each groupedAbilities[index + 1] as abilityKey, index}
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
        {label}
        {(attributeValues[attribute] || 0) + (abilitiesValues[key] || 0)}
      </label>
    {/each}
  </section>
</main>

<style>
  .ability {
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
