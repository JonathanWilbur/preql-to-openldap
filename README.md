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
- For some reason, either OpenLDAP or phpLDAPAdmin fails with cryptic errors
  when line-folding is used in OLC schemata. For that reason, every schema item
  will only be on a single line, ugly though it makes the output.
  - I suspect that phpLDAPAdmin is stripping the line-folding whitespace, but
    I cannot confirm it. I also managed to cause errors by using horizontal
    tabs instead of spaces.
- I thought that OLC configuration would apply automatically, no matter the
  DN of the schema entries. As it turns out, nothing happens unless these
  entries are under `cn=schema,cn=config`.
- This library will only use a `Database` for uniting schema under a single
  `olcSchemaConfig` object named after the database.
- This library will not attempt to name attributes in a way to reduce
  collisions.

## To Do

- [ ] Configurable database files location
- [ ] Configurable LDAP backend
- [ ] `Attribute`
- [ ] `Struct`

## Order of operations

1. Transpile `Preamble`
2. Transpile `DataBase`.
  1. Filter all `Struct`s, `Attribute`s, and `ForeignKeys` within that database.
  2. Transpile all `Attribute`s.
  3. Transpile all `ForeignKey`s.
  4. Transpile all `Struct`s.
3. Transpile `PlainIndex`.
4. Transpile `TextIndex`?
5. Transpile `Entry`.
6. Transpile `Postamble`.
