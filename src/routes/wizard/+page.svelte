<script>
  import { attributes, abilities, config } from '$lib/data.js'
  let pyramid
  let theme = 'actual'

    let defense
    let pv
    let initiative

  const group = (entries) => {
    if (!entries) return null
    return Object.entries(entries).reduce((group, [, ability]) => {
      return {
        ...group,
        [ability.value]: [...(group[ability.value] || []), ability],
      }
    }, {})
  }

  $: groupedAbilities = group(abilities[theme])
$: console.log(abilities[theme])
$: {
    let {value, attribute} = abilities[theme].find(({key}) => key === 'dodge')
    defense = attributes[attribute].value + value + 5
}
$: {

        let {value, attribute} = abilities[theme].find(({key}) => key === 'reflexes')
    initiative = attributes[attribute].value + value + 5
}
$: {
    if(pyramid) {
        pv = attributes.physical.value * config.pyramid[pyramid]?.physical
    }
}
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
      <label class="field" for={key}>
        <span>{label}</span>
        <div>
          <input
            name={key}
            type="number"
            min={config.attributes.min}
            max={config.attributes.max}
            bind:value
          />
          <button
            on:click={() => {
              value -= 1
            }}>-</button
          >
          <button
            on:click={() => {
              value += 1
            }}>+</button
          >
        </div>
      </label>
    {/each}
  </section>
  <section id="tone">
    <fieldset>
      <legend>Ambientacion de la partida</legend>
      <select name="theme" bind:value={theme}>
        {#each Object.entries(config.theme) as [key, label]}
          <option value={key}>{label}</option>
        {/each}
      </select>
    </fieldset>
    <fieldset>
      <legend>Tono de la partida</legend>
      {#each Object.entries(config.pyramid) as [key, { label }], index}
        <label for={key}>
          <input name="pyramid" type="radio" bind:group={pyramid} value={key} />
          {label}
        </label>
      {/each}
    </fieldset>
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
                  {abilities[theme].find((ability) => ability.key === abilityKey).label}
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    {/if}
  </section>
  <section id="abilities">
    {#each abilities[theme] as { key, label, attribute, value }, index}
      <label class="field" for={key}>
        <span>{label}</span>
        <div>
          <input
            name={key}
            type="number"
            min={config.abilities.min}
            max={config.abilities.max}
            bind:value
          />
          <button
            on:click={() => {
              value -= 1
            }}>-</button
          >
          <button
            on:click={() => {
              value += 1
            }}>+</button
          >

        </div>
      </label>
    {/each}
  </section>
  <section id="presentation">
    <article>
      <header>
          <p>
              <strong>Atributos</strong>
          </p>
        {#each Object.entries(attributes) as [key, { label, value }]}
          <p>{label}: {value}</p>
          <progress {value} max={config.attributes.max}></progress>
        {/each}
      </header>
      <p><strong>Habilidades</strong></p>
      {#each Object.entries(abilities[theme]) as [key, {label, value, attribute}]}
	        <p>{label}: {attributes[attribute].value + value}</p>
          <progress value={attributes[attribute].value + value} max={config.abilities.max + config.attributes.max}></progress>
      {/each}
      <footer>
          <p><strong>Iniciativa: {initiative}</strong></p>
          <p><strong>Defensa: {defense}</strong></p>
          <p><strong>Puntos de vida: {pv}</strong></p>
      </footer>
    </article>
  </section>
</main>

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

  .field div {
    display: flex;
    gap: 1rem;
  }

  .field input {
    width: 50px;
  }

  button {
    width: 50px;
  }

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
