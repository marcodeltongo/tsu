/**
 * Copyright (c) 2020 Marco Del Tongo
 *
 * Licensed under the EUPL 🇪🇺, Version 1.2 only (the "Licence");
 * You may not use this work except in compliance with the Licence.
 * You may obtain a copy of the Licence at: https://eupl.eu/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the Licence is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the Licence for the specific language governing permissions and
 * limitations under the Licence.
 */

/**
 * Convert source string to camelCase
 */
export function toCamelCase(source: string): string {
  return source
    .replace(/\W+/g, " ")
    .toLowerCase()
    .replace(/\s[a-z]/g, (s) => s.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^[A-Z]/g, (s) => s.toLowerCase())
}

/**
 * Convert source string to kebab-case
 */
export function toKebabCase(source: string): string {
  return source
    .replace(/\W+/g, " ")
    .toLowerCase()
    .replace(/\s+/g, "-")
}

/**
 * Convert source string to PascalCase
 */
export function toPascalCase(source: string): string {
  return source
    .replace(/\W+/g, " ")
    .toLowerCase()
    .replace(/\s[a-z]/g, (s) => s.toUpperCase())
    .replace(/\s+/g, "")
    .replace(/^[a-z]/g, (s) => s.toUpperCase())
}

/**
 * Convert source string to snake_case
 */
export function toSnakeCase(source: string): string {
  return source
    .replace(/\W+/g, " ")
    .toLowerCase()
    .replace(/\s+/g, "_")
}

/**
 * Convert source string from camelCase to kebab-case
 */
export function camelToKebab(source: string): string {
  return source.replace(/([A-Z])/g, (match) => `-${match[0].toLowerCase()}`)
}

/**
 * Convert source string from camelCase to PascalCase
 */
export function camelToPascal(source: string): string {
  return source.slice(0, 1).toUpperCase() + source.slice(1)
}

/**
 * Convert source string from camelCase to snake_case
 */
export function camelToSnake(source: string): string {
  return source.replace(/([A-Z])/g, (match) => `_${match[0].toLowerCase()}`)
}

/**
 * Convert source string from kebab-case to camelCase
 */
export function kebabToCamel(source: string): string {
  return source.replace(/(-\w)/g, (match) => `${match[1].toUpperCase()}`)
}

/**
 * Convert source string from kebab-case to PascalCase
 */
export function kebabToPascal(source: string): string {
  return (
    source.slice(0, 1).toUpperCase() +
    source.slice(1).replace(/(-\w)/g, (match) => `${match[1].toUpperCase()}`)
  )
}

/**
 * Convert source string from kebab-case to snake_case
 */
export function kebabToSnake(source: string): string {
  return source.replace(/-/g, "_")
}

/**
 * Convert source string from PascalCase to camelCase
 */
export function pascalToCamel(source: string): string {
  return source.slice(0, 1).toLowerCase() + source.slice(1)
}

/**
 * Convert source string from PascalCase to kebab-case
 */
export function pascalToKebab(source: string): string {
  return source.replace(/([A-Z])/g, (match) => `-${match[0].toLowerCase()}`).slice(1)
}

/**
 * Convert source string from PascalCase to snake_case
 */
export function pascalToSnake(source: string): string {
  return source.replace(/([A-Z])/g, (match) => `_${match[0].toLowerCase()}`).slice(1)
}

/**
 * Convert source string from snake_case to camelCase
 */
export function snakeToCamel(source: string): string {
  return source.replace(/(_\w)/g, (match) => `${match[1].toUpperCase()}`)
}

/**
 * Convert source string from snake_case to kebab-case
 */
export function snakeToKebab(source: string): string {
  return source.replace(/_/g, "-")
}

/**
 * Convert source string from snake_case to PascalCase
 */
export function snakeToPascal(source: string): string {
  return (
    source.slice(0, 1).toUpperCase() +
    source.slice(1).replace(/(_\w)/g, (match) => `${match[1].toUpperCase()}`)
  )
}
