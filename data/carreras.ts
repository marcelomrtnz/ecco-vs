import medicina from './carreras/medicina.json'
import odontologia from './carreras/odontologia.json'
import enfermeria from './carreras/enfermeria.json'
import psicologia from './carreras/psicologia.json'
import derecho from './carreras/derecho.json'
import ingenieriaSistemas from './carreras/ingenieria-sistemas.json'
import ingenieriaElectrica from './carreras/ingenieria-electrica.json'
import ingenieriaMecanica from './carreras/ingenieria-mecanica.json'
import ingenieriaIndustrial from './carreras/ingenieria-industrial.json'
import ingenieriaCivil from './carreras/ingenieria-civil.json'
import economia from './carreras/economia.json'
import pedagogia from './carreras/pedagogia.json'
import quimicaIndustrial from './carreras/quimica-industrial.json'
import concejoUniversitario from './carreras/concejo-universitario.json'
import unidadAcademica from './carreras/unidad-academica.json'
import feuh from './carreras/feuh.json'

export interface Candidato {
  nombre: string
  cargo: string
  descripcion: string
  foto: string
  activo: boolean
}

export interface Logro {
  imagen: string
  descripcion: string
}

export interface FAQ {
  pregunta: string
  respuesta: string
}

export interface Carrera {
  slug: string
  nombre: string
  facultad: string
  candidatos: Candidato[]
  propuestas: string[]
  logros: Logro[]
  faqs: FAQ[]
}

const allCarreras: Carrera[] = [
  medicina,
  odontologia,
  enfermeria,
  psicologia,
  derecho,
  ingenieriaSistemas,
  ingenieriaElectrica,
  ingenieriaMecanica,
  ingenieriaIndustrial,
  ingenieriaCivil,
  economia,
  pedagogia,
  quimicaIndustrial,
  concejoUniversitario,
  unidadAcademica,
  feuh,
]

/** Only regular career planillas (excludes governance entities) */
export function getCarrerasOnly(): Carrera[] {
  return allCarreras.filter(
    (c) =>
      c.slug !== 'concejo-universitario-unah-vs-elecciones-2026' &&
      c.slug !== 'unidad-academica-unah-vs-elecciones-2026' &&
      c.slug !== 'feuh-unah-vs-elecciones-2026'
  )
}

/** Governance entities only */
export function getEntidadesGobierno(): Carrera[] {
  return allCarreras.filter(
    (c) =>
      c.slug === 'concejo-universitario-unah-vs-elecciones-2026' ||
      c.slug === 'unidad-academica-unah-vs-elecciones-2026' ||
      c.slug === 'feuh-unah-vs-elecciones-2026'
  )
}

export function getAllCarreras(): Carrera[] {
  return allCarreras
}

export function getCarrera(slug: string): Carrera | undefined {
  return allCarreras.find((c) => c.slug === slug)
}
