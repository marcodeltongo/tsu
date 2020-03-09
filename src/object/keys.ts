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

// eslint-disable-next-line prettier/prettier
import type { BooleanReturningFunction } from "../types"

/**
 * Returns a string with the keys that have a truthy value
 */
export function joinKeysWithTruthyValues(
  object: {
    [key: string]: boolean | number | string | BooleanReturningFunction
  },
  separator = " "
): string {
  return Object.entries(object)
    .map(([k, v]) => ((typeof v === "function" ? v() : !!v) ? k + separator : ""))
    .join("")
    .trim()
}
