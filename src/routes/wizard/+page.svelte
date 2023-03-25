<script>
  import { attributes, abilities, config, combat } from '$lib/data.js'
  import Counter from '$lib/components/Counter.svelte'
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
  <nav>
    <ul>
      <li><a href="#tone">Tono</a></li>
      <li><a href="#attributes">Atributos</a></li>
      <li><a href="#abilities">Habilidades</a></li>
      <li><a href="#presentation">Final</a></li>
    </ul>
  </nav>
  <section id="attributes">
    {#each Object.entries(attributes) as [key, { label, value }], index}
      <Counter
        {label}
        name={key}
        placeholder={label}
        min={config.attributes.min}
        max={config.attributes.max}
        {value}
      />
    {/each}
  </section>
  <section id="tone">
    <fieldset>
      <legend>Tono de la partida</legend>
      {#each Object.entries(config.pyramid) as [key, { label }], index}
        <label for={key}>
          <input name="pyramid" type="radio" bind:group={pyramid} value={key} />
          {label}
        </label>
      {/each}
      {#if pyramid}
        <p>
          {config.pyramid[pyramid].attributes} puntos en atributos
        </p>
        {#each config.pyramid[pyramid]?.abilities as value, index}
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
  <section id="abilities">
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
  <section id="presentation">PRES</section>
</main>

<style>
  nav {
    display: block;
  }
  nav ul {
    display: flex;
    justify-content: space-between;
  }
  section {
    display: none;
    margin: 5px 0;
  }
  section:target {
    display: block;
  }
</style>
