"use strict";

import { OBJECT_OBJECT } from "../constants";
import { ARRAY_JSON_TYPE,
         OBJECT_JSON_TYPE,
         STRING_JSON_TYPE,
         NUMBER_JSON_TYPE,
         BOOLEAN_JSON_TYPE,
         PRIMITIVE_JSON_TYPE } from "../jsonTypes";

export function typeOf(json) {
  let type;

  const array = isArray(json),
        object = isObject(json),
        primitive = isPrimitive(json);

  if (false) {
    ///
  } else if (array) {
    type = ARRAY_JSON_TYPE;
  } else if (object) {
    type = OBJECT_JSON_TYPE;
  } else if (primitive) {
    type = PRIMITIVE_JSON_TYPE;
  }

  return type;
}

export function isNull(json) {
  const _null = (json === null);

  return _null;
}

export function isArray(json) {
  const array = Array.isArray(json);

  return array;
}

export function isObject(json) {
  const object = (Object.prototype.toString.call(json) === OBJECT_OBJECT);

  return object;
}

export function isString(json) {
  const string = ((typeof json) === STRING_JSON_TYPE);

  return string;
}

export function isNumber(json) {
  const number = ((typeof json) === NUMBER_JSON_TYPE);

  return number;
}

export function isBoolean(json) {
  const boolean = ((typeof json) === BOOLEAN_JSON_TYPE);

  return boolean;
}

export function isPrimitive(json) {
  const _null = isNull(json),
        string = isString(json),
        number = isNumber(json),
        boolean = isBoolean(json),
        primitive = (_null || string || number || boolean);

  return primitive;
}

export default {
  typeOf,
  isNull,
  isArray,
  isObject,
  isString,
  isNumber,
  isBoolean,
  isPrimitive
};
