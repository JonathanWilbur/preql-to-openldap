# PreQL

* Author: Jonathan M. Wilbur <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2019
* License: [MIT License](https://mit-license.org/)

## What is PreQL?

A Pre-SQL language that can transpile to any SQL dialect. It takes a declarative
Kubernetes-like YAML schema and generates the necessary commands or statements
in the correct order to generate schema and other database objects in the
database dialect of your choice.

## What is this Library

This library converts PreQL into OpenLDAP OLC Schema.

## Notes

- The Syntax OID and length comes from the `DataType`
  - If the `DataType` lacks these, the `jsonEquivalent` field is used to map it to the most sensible type:
    - A `boolean` becomes a `BOOLEAN`
    - An `integer` becomes an `INTEGER`
    - A `number` becomes an `IA5String` (OpenLDAP does not provide any `REAL` type)
    - A `string` becomes a `directoryString`
    - An `array` just throws an error, since it can't be obviously converted to something.
- The object identifier and matching, ordering, and substring rules come from the `Attribute`
  - If the `Attribute` does not have matching, ordering, or substring rules,
    sensible defaults are used.
- Index example: `olcDbIndex: cn,sn,uid`

## To Do

- [ ] Configurable database files location
- [ ] Configurable LDAP backend
- [ ] `Attribute`
- [ ] `Struct`