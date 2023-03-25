export const config = {
  attributes: {
    min: 4,
    max: 10,
  },
  abilities: {
    min: 0,
    max: 10,
  },
  theme: {
    actual: 'Actual',
    medieval: 'Medieval',
    scifi: 'Ciencia Ficcion',
  },
  pyramid: {
    specialistHeroic: {
      label: 'Especialista heroico',
      abilities: [3, 3, 3, 3, 3, 1],
      attributes: 30,
      physical: 4,
    },
    versatileHeroic: {
      label: 'Versátil heroico',
      abilities: [6, 5, 4, 3, 2, 1],
      attributes: 30,
      physical: 4,
    },
    specialistRealistic: {
      label: 'Especialista realista',
      abilities: [2, 2, 2, 2, 2],
      attributes: 22,
      physical: 3,
    },
    versatileRealistic: {
      label: 'Versátil realista',
      abilities: [5, 4, 3, 2, 1],
      attributes: 22,
      physical: 3,
    },
  },
}

export let attributes = {
  physical: {
    label: 'Físico',
    value: config.attributes.min,
  },
  dexterity: {
    label: 'Destreza',
    value: config.attributes.min,
  },
  intelligence: {
    label: 'Inteligencia',
    value: config.attributes.min,
  },
  perception: {
    label: 'Percepción',
    value: config.attributes.min,
  },
}

const medieval = [
  { attribute: 'perception', label: 'Advertir/Notar', key: 'warn', value: config.abilities.min },
  {
    attribute: 'dexterity',
    label: 'Armas a Distancia',
    key: 'remoteWeapons',
    value: config.abilities.min,
  },
  {
    attribute: 'physical',
    label: 'Armas Cuerpo a Cuerpo',
    key: 'meleeWeapons',
    value: config.abilities.min,
  },
  { attribute: 'physical', label: 'Atletismo', key: 'athletics', value: config.abilities.min },
  { attribute: 'perception', label: 'Buscar', key: 'lookFor', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Cabalgar', key: 'ride', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Callejeo', key: 'callejeo', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Comercio', key: 'trade', value: config.abilities.min },
  { attribute: 'perception', label: 'Disfraz', key: 'dress', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Escalar', key: 'climb', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Esquivar', key: 'dodge', value: config.abilities.min },
  { attribute: 'perception', label: 'Etiqueta', key: 'label', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Fauna', key: 'fauna', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Leyes', key: 'law', value: config.abilities.min },
  { attribute: 'perception', label: 'Música', key: 'music', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Navegar', key: 'sail', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Nadar', key: 'swim', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Ocultismo', key: 'occultism', value: config.abilities.min },
  { attribute: 'perception', label: 'Rastrear', key: 'track', value: config.abilities.min },
  { attribute: 'perception', label: 'Reflejos', key: 'reflexes', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Religión', key: 'religion', value: config.abilities.min },
  {
    attribute: 'dexterity',
    label: 'Robar bolsillos',
    key: 'pickPockets',
    value: config.abilities.min,
  },
  { attribute: 'perception', label: 'Rumores', key: 'rumors', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Sanacion/hierbas',
    key: 'healing',
    value: config.abilities.min,
  },
  { attribute: 'dexterity', label: 'Sigilo', key: 'stealth', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Supervivencia/Cazar',
    key: 'survival',
    value: config.abilities.min,
  },
  {
    attribute: 'intelligence',
    label: 'Tradicion/Historia',
    key: 'history',
    value: config.abilities.min,
  },
  {
    attribute: 'dexterity',
    label: 'Trampas/Cerraduras',
    key: 'trapsAndLocks',
    value: config.abilities.min,
  },
]

const actual = [
  { attribute: 'perception', label: 'Advertir/Notar', key: 'warn', value: config.abilities.min },
  {
    attribute: 'dexterity',
    label: 'Armas a Distancia',
    key: 'remoteWeapons',
    value: config.abilities.min,
  },
  {
    attribute: 'physical',
    label: 'Armas Cuerpo a Cuerpo',
    key: 'meleeWeapons',
    value: config.abilities.min,
  },
  { attribute: 'physical', label: 'Atletismo', key: 'athletics', value: config.abilities.min },
  { attribute: 'perception', label: 'Bailar', key: 'dance', value: config.abilities.min },
  { attribute: 'perception', label: 'Buscar', key: 'lookFor', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Callejeo', key: 'callejeo', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Comercio', key: 'trade', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Conducir', key: 'drive', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Esquivar', key: 'dodge', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Historia', key: 'history', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Idiomas', key: 'languages', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Informática',
    key: 'computing',
    value: config.abilities.min,
  },
  { attribute: 'intelligence', label: 'Leyes', key: 'laws', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Mecánica', key: 'mechanics', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Medicina', key: 'medicine', value: config.abilities.min },
  { attribute: 'perception', label: 'Música', key: 'music', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Ocultismo', key: 'occultism', value: config.abilities.min },
  { attribute: 'perception', label: 'Reflejos', key: 'reflexes', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Pilotar', key: 'pilot', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Sigilo', key: 'stealth', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Supervivencia',
    key: 'survival',
    value: config.abilities.min,
  },
]

const scifi = [
  { attribute: 'perception', label: 'Advertir/Notar', key: 'warn', value: config.abilities.min },
  {
    attribute: 'dexterity',
    label: 'Armas a Distancia',
    key: 'remoteWeapons',
    value: config.abilities.min,
  },
  {
    attribute: 'physical',
    label: 'Armas Cuerpo a Cuerpo',
    key: 'meleeWeapons',
    value: config.abilities.min,
  },
  { attribute: 'dexterity', label: 'Artilleria', key: 'artillery', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Astrofísica',
    key: 'astrophysics',
    value: config.abilities.min,
  },
  { attribute: 'physical', label: 'Atletismo', key: 'athletics', value: config.abilities.min },
  { attribute: 'perception', label: 'Bailar', key: 'dance', value: config.abilities.min },
  { attribute: 'perception', label: 'Buscar', key: 'lookFor', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Callejeo', key: 'callejeo', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Comercio', key: 'trade', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Conducir', key: 'drive', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Criptografía',
    key: 'cryptography',
    value: config.abilities.min,
  },
  { attribute: 'dexterity', label: 'Esquivar', key: 'dodge', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Historia', key: 'history', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Idiomas', key: 'languages', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Informática',
    key: 'computing',
    value: config.abilities.min,
  },
  {
    attribute: 'intelligence',
    label: 'Ingeniería',
    key: 'engineering',
    value: config.abilities.min,
  },
  { attribute: 'intelligence', label: 'Leyes', key: 'laws', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Mecánica', key: 'mechanics', value: config.abilities.min },
  { attribute: 'intelligence', label: 'Medicina', key: 'medicine', value: config.abilities.min },
  { attribute: 'perception', label: 'Música', key: 'music', value: config.abilities.min },
  {
    attribute: 'perception',
    label: 'Navegación Espacial',
    key: 'spaceNavigation',
    value: config.abilities.min,
  },
  { attribute: 'intelligence', label: 'Ocultismo', key: 'occultism', value: config.abilities.min },
  { attribute: 'perception', label: 'Reflejos', key: 'reflexes', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Pilotar', key: 'pilot', value: config.abilities.min },
  { attribute: 'dexterity', label: 'Sigilo', key: 'stealth', value: config.abilities.min },
  {
    attribute: 'intelligence',
    label: 'Supervivencia',
    key: 'survival',
    value: config.abilities.min,
  },
]

export const abilities = { actual, medieval, scifi }
export const combat = {
  initiative: {
    label: 'Iniciativa',
  },
  defense: {
    label: 'Defensa',
  },
  pv: {
    label: 'Puntos de vida',
  },
}

export const rasgos = [
  { nombre: 'Nombre', longitud: 'corto' },
  { nombre: 'Altura', longitud: 'corto' },
  { nombre: 'Ojos', longitud: 'corto' },
  { nombre: 'Edad', longitud: 'corto' },
  { nombre: 'Peso', longitud: 'corto' },
  { nombre: 'Pelo', longitud: 'corto' },
  { nombre: 'Lugar de nacimiento', longitud: 'largo' },
  { nombre: 'Ocupacion', longitud: 'largo' },
  { nombre: 'Descripcion', longitud: 'largo' },
]
